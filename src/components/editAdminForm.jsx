import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import $ from 'jquery'
import { useState } from "react";


const EditAdmin = ({ products = [], onEdit=f=>f }) => {
    let { id } = useParams();
    let reqP = products.filter(p => p._id == id);
    const sizes = [];

    var productSizes = [];
    const [name,setName] = useState(reqP[0].name)
    const [color,setcolor] = useState(reqP[0].color)
    const [price,setprice] = useState(reqP[0].price)
    const [type,settype] = useState(reqP[0].type)
    const [brand,setbrand] = useState(reqP[0].brand)
    const [description,setdescription] = useState(reqP[0].description)

    const submit = (e) => {
        e.preventDefault();
        const images = reqP[0].images;
        let product = {id,name,color,price,type,brand,productSizes,images,description}
        console.log(product);
        $("input[type=checkbox]:checked").each(function () {
            productSizes.push(this.value);
        });
        console.log(productSizes);
        onEdit(id,name,color,price,type,brand,productSizes,images,description);
        productSizes = []
    }

    if (id) {
        for (let i = 7; i < 12; i += 0.5) {
            let equals = false;
            for (let j = 0; j < reqP[0].sizes.length; j++) {
                if (reqP[0].sizes[j] == i) {
                    equals = true;
                    break;
                }
            }
            sizes.push(
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="checkbox" key={i} defaultChecked={equals} name="sizes" id="sizeBox" defaultValue={i} />
                    <label className="form-check-label" htmlFor="sizeBox" key={i*2} id="sizeLbl">{i}</label>
                </div>
            )
        }
    }
    else{
        for (let i = 7; i < 12; i += 0.5) {
            sizes.push(
                <div className="form-check form-check-inline" >
                    <input className="form-check-input" type="checkbox" key={i} name="sizes" id="sizeBox" defaultValue={i} />
                    <label className="form-check-label" htmlFor="sizeBox" key={i*2} id="sizeLbl">{i}</label>
                </div>
            )
        }
    }
    
 
    return (
        <div className="container rounded mt-5 mb-5" style={{ backgroundColor: '#e6e6e6' }}>
            <form method="post" className="row" onSubmit={submit} id="addForm">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><a href="#"><img className="rounded-circle mt-5" width="150px" src={require("../images/logo.png")} /></a><span className="font-weight-bold" style={{ color: 'maroon' }}>SinghsBoards</span><span className="text-black-50">SinghsBoards@mail.com.my</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Enter product details</h4>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Name</label>
                            <input type="text" value={name} onChange={event=>setName(event.target.value)} className="form-control" placeholder="Enter name" name="name" required />
                            </div>
                            <div className="col-md-12"><label className="labels">Color</label>
                            <input type="text" value={color} onChange={event=>setcolor(event.target.value)} className="form-control" placeholder="Enter color" name="color" required />
                            </div>
                            <div className="col-md-12"><label className="labels">Price</label>
                            <input type="number" value={price} onChange={event=>setprice(event.target.value)} className="form-control" placeholder="Enter price" name="price" required />
                            </div>
                            <div className="col-md-12"><label className="labels">Type</label>
                            <input type="text" value={type} onChange={event=>settype(event.target.value)} readOnly className="form-control" placeholder="Enter product type" name="type" />
                            </div>
                            <div className="col-md-12"><label className="labels">Brand</label>
                            <input type="text" value={brand} onChange={event=>setbrand(event.target.value)} className="form-control" placeholder="Enter brand" name="brand" />
                            </div>
                        </div>
                        <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', padding: '0 0 2px 0' }}></p>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Confirm</button></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="col-md-12"><label className="lblUpload" style={{
                            paddingBottom: '6px',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}>
                            Upload Images</label><input type="file" className="file" placeholder="Product images" style={{ fontSize: '0.8rem' }} name="file" multiple />

                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Select avialable sizes</label><br></br>
                                    {sizes}
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="labels">Enter Description</label>
                                    <div className="form-floating">
                                        <textarea className="form-control" id="desc" value={description} onChange={event=>setdescription(event.target.value)} name="description" style={{ height: '150px', width: '300px' }}></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );

}

export default EditAdmin;