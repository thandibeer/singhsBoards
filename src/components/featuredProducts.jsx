import Product from "./product";

const FeaturedProducts = ({products=[]}) => {
    if(!products.length)return <div>No products listed</div>
    return ( <div className='products-container'>
        
        {products.map((p,i)=>(
            <Product
                key={p._id}
                {...p}
            />)
        )}
    </div> );
}
 
export default FeaturedProducts;