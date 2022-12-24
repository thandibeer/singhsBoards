import { useNavigate } from "react-router-dom";

const Product = ({_id,name,color,price,type,size,images,brand}) => {

    let navigate = useNavigate();
   
    return ( 
    <div className="box" onClick={()=>navigate(`/${_id}`)} style={{cursor:'pointer'}}>
        <div className="box-img">
            <img src={require(`../images/${images[0]}`)} alt="img1"/>
        </div>
        <p>{brand}</p>
        <p style={{fontSize:'0.7rem'}}>{name}</p>
        <p style={{color:'darkblue',fontWeight:'bold'}}>${price}</p>

    </div>
     );
}
 
export default Product;