import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'


function CartTable({ cartData=[], total,onRemove=f=>f }) {
    if(cartData.length==0)
        return("No items in the cart")
    else
    return (
        <>
            <div id="pageHeading" style={{ display: 'flex', justifyContent: 'center', marginLeft: '5%', width: '90%', borderBottom: '1px solid grey' }}>
                <h3 style={{ padding: '7px' }}>Shopping cart</h3>
            </div>
            <Table borderless size="sm">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map(p => (
                        <tr>
                            <td>
                                <div>
                                    <img src={require(`../images/${p.images[0]}`)} className='item'
                                        style={{ width: '165px', height: '165px', objectFit: 'contain', display: 'inline-block' }} />
                                    <div style={{ display: 'inline-block', lineHeight: '0.2rem' }}>
                                        <p className='item' style={{ fontSize: '1rem' }}>{p.name}</p>
                                        <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>{p.brand}</p>
                                        <p style={{ fontSize: '0.7rem' }}>{p.size}</p>
                                    </div>
                                </div>
                            </td>
                            <td>${p.price} CAD</td>
                            <td>
                                {p.quantity}<br/>
                                <a href="#" onClick={()=>onRemove(p._id,p.quantity)} style={{fontSize:'0.7rem'}}>remove</a>
                            </td>
                            <td style={{ color: 'maroon', fontWeight: 'bold' }}>${p.price*p.quantity} CAD</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{margin:'15px',lineHeight:'0.9rem'}}>
                    <p style={{ color: 'maroon', fontWeight: 'bold',fontSize:'1.2rem' }}>Subtotal ${total}</p>
                    <p style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>Shipping & taxes calculated at checkout</p>
                    <button
                        style={{ backgroundColor: "maroon", color: 'white', outline: 'none', border: 'none', padding: '15px', fontSize: '0.9rem' }}>
                        Check out</button>
                </div>
            </div>
        </>
    );
}

export default CartTable;