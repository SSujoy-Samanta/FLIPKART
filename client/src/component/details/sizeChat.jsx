import styled from "@emotion/styled";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const tableRow=styled(TableRow)`
    border:none;
`

const SizeChat=({product})=>{
    return (
        <div className="sizeChat">
            <b style={{marginTop:"1rem",fontSize:'1.1rem',color:"blue"}}>View Details</b>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{fontSize:"1.2rem",color:'gray'}}>Description</TableCell>
                        <TableCell >
                            <div className="description">
                            <i style={{fontSize:'1rem'}}>{product.description }</i>
                            </div>

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{fontSize:"1.2rem",color:'gray'}}>Color</TableCell>
                        <TableCell >
                            <div className="chooseImage">
                                <img src={product.url} alt="image" width={50} className="shortImage" />
                                <img src={product.url} alt="image" width={50} className="shortImage"/>
                                <img src={product.url} alt="image" width={50} className="shortImage"/>
                                <img src={product.url} alt="image" width={50} className="shortImage"/>
                            </div>

                        </TableCell>
                    </TableRow>
                    {
                        product.shoeSize &&
                        <TableRow>
                            <TableCell style={{fontSize:"1.2rem",color:'gray'}}>Size</TableCell>
                            <TableCell >
                                <div className="chooseSize">
                                    <p className="SIZE">6</p>
                                    <p className="SIZE">7</p>
                                    <p className="SIZE">8</p>
                                    <p className="SIZE">9</p>
                                    <p className="SIZE">10</p>
                                    <p className="SIZE">11</p>
                                    
                                </div>

                            </TableCell>
                        </TableRow>
                    }
                    {
                        product.shirtSize &&
                        <TableRow>
                            <TableCell style={{fontSize:"1.2rem",color:'gray'}}>Size</TableCell>
                            <TableCell >
                                <div className="chooseSize">
                                    <p className="SIZE">XS</p>
                                    <p className="SIZE">S</p>
                                    <p className="SIZE">M</p>
                                    <p className="SIZE">L</p>
                                    <p className="SIZE">XL</p>
                                    <p className="SIZE">XXL</p>
                                    
                                </div>

                            </TableCell>
                        </TableRow>
                    }
                    <TableRow>
                        <TableCell style={{fontSize:"1.2rem",color:'gray'}}>Seller</TableCell>
                        <TableCell >
                            <div className="seller">
                                <ul>10 Days Return Policy</ul>
                            </div>

                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="supper coin" width={400}/>
                        </TableCell>
                        
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    );
}

export default SizeChat;