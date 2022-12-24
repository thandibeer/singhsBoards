import axios from "axios";
import { useNavigate } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa'


const Admin = ({type='bar',onTypeChange=f=>f,onLogout=f=>f,products=[]}) => {

    let nums = [products.filter(p=>p.brand==='VANS').length,products.filter(p=>p.brand==='BLIND').length
                ,products.filter(p=>p.brand==='DC').length,products.filter(p=>p.brand==='ADIDAS').length
                ,products.filter(p=>p.brand==='ALMOST').length]

    console.log(nums)

    let data = { type: `${type}`, backgroundColor: "rgb(128,0,0)", data: { labels: ['Vans', 'Blind', 'DC', 'Adidas','Almost'], datasets: [{ label: 'Products', data: nums }] } }
    console.log(data)
    let navigate = useNavigate();
    return (<div className="deets" >
        <div className="details">
            <div className="big-img">
                <div className="buttons" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <button onClick={()=>navigate('/add')}>Add Product</button>
                    <button onClick={()=>navigate('/edit')}>Edit Product</button>
                    <button onClick={(event)=>onTypeChange()}>Change graph type</button>
                    <button style={{marginTop:'3rem',width:'fit-content',backgroundColor:'maroon',color:'white'}} onClick={(event)=>onLogout()}><FaArrowLeft/>Logout</button>
                </div>
            </div>
            <div className="big-img " >
                <img src={`https://quickchart.io/chart?c=${JSON.stringify(data)}`} alt=""
                    style={{ objectFit: 'contain' }} />
                    
            </div>
            
        </div>

    </div>);
}

export default Admin;