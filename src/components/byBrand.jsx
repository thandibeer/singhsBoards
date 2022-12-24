import Product from "./product";

const ByBrand = ({ products,brand }) => {
    let byBrand = products.filter(p=>p.brand.toLowerCase()===`${brand}`);
    return (<>
        <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
            <h3 style={{ padding: '7px' }}>{brand.toUpperCase()}</h3>
        </div>
        <div className='products-container'>

            {byBrand.map((p, i) => (
                <Product
                    key={p._id}
                    {...p}
                />)
            )}
        </div>
    </>);
}

export default ByBrand;