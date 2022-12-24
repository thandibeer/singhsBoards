import { useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import $ from 'jquery'

const AdminAddForm = ({ onAdd=f=>f }) => {
    var productSizes = [];
    const [name,setName] = useState("")
    const [color,setcolor] = useState("")
    const [price,setprice] = useState("")
    const [type,settype] = useState("")
    const [brand,setbrand] = useState("")
    const [description,setdescription] = useState("")

    const submit = (e) => {
        e.preventDefault();
        $("input[type=checkbox]:checked").each(function () {
            productSizes.push(this.value);
        });
        console.log(productSizes);
        onAdd(name,color,price,type,brand,productSizes,description);
        setName("")
        setcolor("")
        setprice("")
        settype("")
        setbrand("")
        setdescription("")
        productSizes = []
    }

    const sizes = [];

    for (let i = 7; i < 12; i += 0.5) {
        sizes.push(
            <div class="form-check form-check-inline" >
                <input class="form-check-input" type="checkbox" name="sizes" id="sizeBox" defaultChecked={false} defaultValue={i} />
                <label class="form-check-label" for="sizeBox" id="sizeLbl">{i}</label>
            </div>
        )
    }

    return (
        <div className="container rounded mt-5 mb-5" style={{ backgroundColor: '#e6e6e6' }}>
            <form method="post" className="row" action="add" id="addForm" onSubmit={submit}>
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><a href="#"><img className="rounded-circle mt-5" width="150px" src={require("../images/logo.png")} /></a><span className="font-weight-bold" style={{ color: 'maroon' }}>SinghsBoards</span><span className="text-black-50">SinghsBoards@mail.com.my</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Enter product details</h4>
                        </div>

                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Name</label><input type="text" value={name} onChange={event=>setName(event.target.value)} className="form-control" placeholder="Enter name" name="name" required /></div>
                            <div className="col-md-12"><label className="labels">Color</label><input type="text" value={color} onChange={event=>setcolor(event.target.value)} className="form-control" placeholder="Enter color" name="color" required /></div>
                            <div className="col-md-12"><label className="labels">Price</label><input type="number" min={0} step="0.01" value={price} onChange={event=>setprice(event.target.value)} className="form-control" placeholder="Enter price" name="price" required /></div>
                            <div className="col-md-12"><label className="labels">Type</label><input type="text" value={type} onChange={event=>settype(event.target.value)} className="form-control" placeholder="Enter product type" name="type" /></div>
                            <div className="col-md-12"><label className="labels">Brand</label><input type="text" value={brand} onChange={event=>setbrand(event.target.value)} className="form-control" placeholder="Enter brand" name="brand" /></div>
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
                                    <div class="form-floating">
                                        <textarea class="form-control" id="desc" value={description} onChange={event=>setdescription(event.target.value)} name="description" style={{ height: '150px', width: '300px' }}></textarea>
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

export default AdminAddForm;