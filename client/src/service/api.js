import axios from "axios" //simillar to fetch fuunction in js for api calling
const URL="http://localhost:8080";

export const authenticationSingup=async(data)=>{
    try{
        return await axios.post(`${URL}/singup`,data);

    }catch(e){
        console.log("Error occured during singup Authentication",e)
    }
}
export const authenticationLogin=async(data)=>{
    try{
        return await axios.post(`${URL}/login`,data);

    }catch(e){
        console.log("Error occured during login Authentication",e)
        return e.response;
    }
}

export const  payUsingPaytm=async(data)=>{
    try{
        const resconse=await axios.post(`${URL}/payment`,data);
        return resconse.data;

    }catch(e){
        console.log("Error occured while calling paytm api",e);
    }
}