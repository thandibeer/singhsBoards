import Product from "./product";

const Skateboards = ({products}) => {
    let skateboards = products.filter(p=>p.type==="board_complete");
    return (<>
        <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
            <h3 style={{ padding: '7px' }}>Skateboards</h3>
        </div>
        <div className='products-container'>

            {skateboards.map((p, i) => (
                <Product
                    key={p._id}
                    {...p}
                />)
            )}
        </div>
    </>);
}
 
export default Skateboards;