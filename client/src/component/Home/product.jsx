

const Product=({product})=>{
    return(
        <div className="product" key={product.id}>
            <img src={product.url} alt="Product Image" className="productImg"/>
            <p>{product.title.shortTitle}</p>
            <p style={{color:"green"}}>-{product.discount}</p>
            <b>{product.tagline}</b>
        </div>
    ); 
}

export default Product;