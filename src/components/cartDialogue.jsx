import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from "react-router-dom";


export default function CartDualogue({ open, handleClose = f => f, products=[], items=0 }) {
  let navigate = useNavigate();
  let {id} = useParams();
  console.log(id);
  if (products.length==0 || !open)
    return ("");
  else{
    let product = products.filter(p=>p._id == id)
    console.log(product)
    return (
      <div style={{ position: 'relative' }}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            "& .MuiDialog-container": {
              justifyContent: "flex-end",
              alignItems: "flex-start",
              p: 0,
            }
          }}
          PaperProps={{
            sx: {
              m: 0,
              top: "15vh",
              right: 20,
            }
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: '0.8rem' }}>
            {"Added to cart"}
          </DialogTitle>
          <DialogContent>
            <div style={{ borderBottom: '1px solid grey', borderTop: '1px solid grey', padding: '5px' }}>
              <img src={require(`../images/${product[0].images[0]}`)} className='item'
                style={{ width: '65px', height: '65px', objectFit: 'contain', display: 'inline-block' }} />
              <p className='item' style={{ display: 'inline-block',fontSize:'0.8rem' }}>{product[0].name}</p><br />
            </div>
            <div style={{ lineHeight: '0.2rem', padding: '5px 5px 0px 5px', borderBottom: '1px solid grey' }}>
              <p style={{ fontSize: '0.7rem', paddingTop: '1.5px' }}>{product[0].size}</p>
              <p style={{ fontSize: '0.8rem' }}>${product[0].price} CAD</p>
            </div>
            <div>
              <p style={{ fontStyle: 'italic', fontSize: '0.7rem' }}>You have {items} {items > 1 ? 'items' : 'item'} in the cart.</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Total</p><p>${product[0].price} CAD</p>
              </div>
            </div>
            <div>
              <button 
              style={{ width: '100%', backgroundColor: "maroon", color: 'white', outline: 'none', border: 'none',padding:'5px',fontSize:'0.8rem' }}
              onClick={()=>{navigate(`/cart`)
                            handleClose()}}>
                Check out</button>
              <button
                style={{ width: '100%', backgroundColor: "grey", color: 'white', marginTop: '5px', outline: 'none', border: 'none',padding:'5px',fontSize:'0.8rem' }}
                onClick={handleClose}>Continue shopping</button>
            </div>
          </DialogContent>
         
        </Dialog>
      </div>
    );
        }
}