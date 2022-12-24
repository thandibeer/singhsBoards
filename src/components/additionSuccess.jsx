import { useNavigate } from "react-router-dom";


const Addition = () => {
    let navigate = useNavigate()
    return ( <div>
        <p>Document Added successfully</p>
        <button onClick={()=>navigate("/admin")}>Back to admin page</button>
    </div> );
}
 
export default Addition;