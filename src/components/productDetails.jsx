import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import DetailImagesSlider from "./deatilsImagesSlider";
import Product from "./product";

const ProductDetails = ({products=[],onAdd=f=>f}) => {
    window.scrollTo(0,0);
    let {id} = useParams();
    let foundP = products.find(product=>product._id == id);
    let filteredP = products.filter(p=>p.type==foundP.type&&p._id!==foundP._id);

    let mayAlsoLike = [];
    for(let i=0;i<4;i++){
        mayAlsoLike.push(filteredP[i]);
    }

    let size;

    const elemRef = useRef(null);

    const clicked = (event)=>{
        size = event.target.innerHTML;
    }

    useEffect(()=>{
        elemRef.current.focus();
    })
    return ( 
    <><div className="deets" >
        <div className="details" ref={elemRef}>
            <div className="big-img">
                <DetailImagesSlider images={foundP.images}/>
            </div>
            <div className="box">
                <div className="row">
                    <h2>{foundP.name}</h2>
                    <span>${foundP.price}</span>
                </div>
                <div className="sizes">
                    {
                        foundP.sizes.map((s,i)=>(
                            <button id="sizeBtn" className="sizeBtn" onClick={(event)=>clicked(event)} key={i}>{s}</button>
                        ))
                        // <SizeGroup/>
                    }
                </div>
                <p style={{fontSize:'0.8rem'}}>{foundP.description}</p>
                <button className="cart" id="addbtn" onClick={
                    ()=>onAdd(foundP._id,size)}>Add to cart</button>

                    
            </div>
        </div>

    </div> 
    <h3 style={{marginLeft:'10%'}}>You may also like</h3>
    <div className='products-container' style={{marginBottom:'50px'}}>
        
        {mayAlsoLike.map((p,i)=>(
            <Product
                key={p._id}
                {...p}
            />)
        )}
    </div>
    </>);
}
 
export default ProductDetails;