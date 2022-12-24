import Product from "./product";

const Footwear = ({ products }) => {
    let footwear = products.filter(p=>p.type==="shoes");
    return (<>
        <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
            <h3 style={{ padding: '7px' }}>Footwear</h3>
        </div>
        <div className='products-container'>

            {footwear.map((p, i) => (
                <Product
                    key={p._id}
                    {...p}
                />)
            )}
        </div>
    </>);
}

export default Footwear;