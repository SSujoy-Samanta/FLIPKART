import React from 'react'
import {Dialog,TextField,Button} from '@mui/material'
import { useState,useContext } from 'react'
import { authenticationSingup ,authenticationLogin} from '../../service/api.js'
import { DataContext } from '../../context/dataProvider.jsx'
const accountType={
        login:{
            type:"Login",
            heading:"Let's Start",
            subHeading:"Get access to your Orders, Wishlist and Recommendations",
        },
        singup:{
            type:"Singup",
            heading:"Looks like you're new here!",
            subHeading:"Sign up with your mobile number to get started",
        }
}
const singUpInitial={
    Name:"",
    email:"",
    mobile:" ",
    username:"",
    password:" ",
    country:" ",
}
const loginInitial={
    mobile:" ",
    password:" ",
}
const Loginpage = ({open,setOpen}) => {
    
    const [error,setError]=useState(false);
    const closeLogin=(setOpen)=>{
        setOpen(false);
        setAccount(accountType.login);
        setError(false);
    }
    const [account,setAccount]=useState(accountType.login);
    const toggleAccount=()=>{
        setAccount(accountType.singup);
        
    }
    const [singUp,setSingUp]=useState(singUpInitial);
    const inputChange=(e)=>{
        setSingUp({...singUp,[e.target.name]:e.target.value});
        
    }
    const singUpUser=async()=>{
        let response=await authenticationSingup(singUp);
        if(!response) return;
        closeLogin(setOpen);
        setAcc(singUp.username);
    }
    const {acc,setAcc}=useContext(DataContext);

    const [logIn,setLogIn]=useState(loginInitial)
    const loginInput=(e)=>{
        setLogIn({...logIn,[e.target.name]:e.target.value});
    }
    const LoginUser=async()=>{
        let response=await authenticationLogin(logIn);
            if(response.status===200){
                closeLogin(setOpen);
                setAcc(response.data.data.username);
            }
            else{
                setError(true);
            }
    }
  return (
    <div className='loginDiolog'>
        <Dialog open={open} onClose={()=>closeLogin(setOpen)}>
            <div className="dialogContainer">
                <div className="leftComp">
                    <h2>{account.type}</h2>
                    <p>{account.heading}</p>
                    <p>{account.subHeading}</p>

                </div>

                {
                    account.type=='Login'?
                        <div className="rightComp">
                            <TextField variant='standard' label="Enter Mobile Number" name='mobile' className='inputField' onChange={(e)=>loginInput(e)}/>
                            <TextField variant='standard' label="Enter Password" name='password' type='password' className='inputField' onChange={(e)=>loginInput(e)}> 
                            
                            </TextField>
                            {error && <p className='error'>Please Enter The Valid Mobile No and Password!!</p>}
                            <p style={{fontWeight:"800",marginBottom:"2rem"}}>By continuing, you agree to Flipkart's <a href="" style={{color:"blue"}}>Terms</a> of Use and <a href='' style={{color:"blue"}}> Privacy Policy.</a></p>
                            <Button style={{backgroundColor:"orange",color:"white"}} onClick={LoginUser}>Login</Button>
                            <p style={{fontWeight:"bold",margin:"5px"}}>OR</p>
                            <Button style={{backgroundColor:"green",color:"white"}}>Request OTP</Button>
                            <p style={{fontWeight:"600"}}>New to Flipkart? <b onClick={()=>toggleAccount()} style={{color:"blue",cursor:"pointer",textDecoration:"underline"}}>Create An Account</b></p>

                    </div>
                    :
                    <div className="rightComp" style={{width:"32vw"}}>
                        <TextField variant='standard' label="Enter Your Full Name" name='Name' className='inputField' onChange={(e)=>inputChange(e)}/>
                        <TextField variant='standard' label="Enter Your Email Id" name='email' className='inputField' onChange={(e)=>inputChange(e)}/>
                        <TextField variant='standard' label="Enter Your Mobile Number" name='mobile' className='inputField' onChange={(e)=>inputChange(e)}/>
                        <TextField variant='standard' label="Enter Your Username" name='username' className='inputField' onChange={(e)=>inputChange(e)}/>
                        <TextField variant='standard' label="Enter Your Password" name='password' type='password' className='inputField'onChange={(e)=>inputChange(e)}/> 
                        <TextField variant='standard' label="Country" name='country' className='inputField' onChange={(e)=>inputChange(e)}/>
                        
                        <Button style={{backgroundColor:"orange",color:"white"}} onClick={singUpUser}>Continue</Button>
                    </div>

                }
            </div>
            
        </Dialog>
    </div>
  )
}

export default Loginpage