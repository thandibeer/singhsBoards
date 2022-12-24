import EditableProduct from "./editableProduct";

const AllProducts = ({products=[],onDelete=f=>f}) => {
    if(!products.length)return <div>No products listed</div>
    return ( 
        <>
        <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
        <h3 style={{ padding: '7px' }}>Edit Products</h3>
    </div>
    <div className='products-container'>
        
        {products.map((p,i)=>(
            <EditableProduct
                key={p._id}
                {...p}
                del={onDelete}
            />)
        )}
    </div>
    </> );
}
 
export default AllProducts;