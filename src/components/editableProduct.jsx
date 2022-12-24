import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import axios from "axios";


const EditableProduct = ({_id,name,color,price,type,size,images,brand,del=f=>f}) => {

    let navigate = useNavigate();
   
    return ( 
        <div>
    <div className="box" onClick={()=>navigate(`/edit/${_id}`)} style={{cursor:'pointer'}}>
        <div className="box-img">
            <img src={require(`../images/${images[0]}`)} alt="img1"/>
        </div>
        <p>{brand}</p>
        <p style={{fontSize:'0.7rem'}}>{name}</p>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p style={{color:'darkblue',fontWeight:'bold'}}>${price}</p>
        </div>
    </div>
    <button onClick={()=>del(_id)} 
        style={{border:'none',marginTop:'4px',borderRadius:'10px',backgroundColor:'#e6e6e6',marginLeft:'40%',color:'maroon',width:'55px',height:'45px'}}>
            <FaTrash/>
    </button>
        
    </div>
     );
}
 
export default EditableProduct;