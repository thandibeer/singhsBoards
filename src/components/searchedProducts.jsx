import Product from "./product";
import { useParams } from "react-router-dom";


const SearchedProducts = ({ products }) => {
    let {key} = useParams();
    let reqProducts = products.filter(p=>p.type.toLowerCase()==`${key.toLowerCase()}`||p.name.toLowerCase().includes(key.toLowerCase())||p.brand.toLowerCase()==`${key.toLowerCase()}`);
    console.log(reqProducts);
    return (<>
        <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
            <h3 style={{ padding: '7px' }}>Search Results</h3>
        </div>
        <div className='products-container'>

            {reqProducts.map((p, i) => (
                <Product
                    key={p._id}
                    {...p}
                />)
            )}
        </div>
    </>);
}

export default SearchedProducts;