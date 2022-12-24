import { click } from '@testing-library/user-event/dist/click';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaSearch} from 'react-icons/fa';
import {FaShoppingCart,FaUser} from 'react-icons/fa';
import {Link} from 'react-router-dom'

function NavScroll({items,total,onSubmitForm=f=>f,loggedIn=false}) {

  let s
  if(loggedIn){
    s = {
    visibility:"visible"
   }
  }
  else{
    s = {
      visibility:"hidden"
     }
  }

  return (
    <Navbar  expand="lg" variant='dark' style={{backgroundColor:'black',height:'15vh',position:'relative',bottom:0}} >
      <Container fluid >
        <Navbar.Brand as={Link} to="/">
        <img  
              src={require('../images/logo.png')}
              width="110"
              height="110"
              className="d-inline-block align-top"
            //   alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* as={Link} to="/home" */}
            <Nav.Link as={Link} to="/" className='mx-2'>Home</Nav.Link>
            <Nav.Link as={Link} to="footwear" className='mx-2'>Footwear</Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown" className='mx-2'>
              <NavDropdown.Item id='navBrand' as={Link} to="dc">DC</NavDropdown.Item>
              <NavDropdown.Item id='navBrand' as={Link} to="almost">
                Almost
              </NavDropdown.Item>
              <NavDropdown.Item id='navBrand' as={Link} to="blind">
                Blind
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="skateboards" className='mx-2'>
              Skateboards
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(event)=>onSubmitForm(event,document.getElementById('searchKey'))}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id='searchKey'
              style={{borderRadius: '25px',border:'2px solid #87CEEB',height:'auto'}}
            />
            <Button variant="outline" type='submit'><FaSearch color='#0096FF'/></Button>
            <div style={{display:'inline-flex',alignItems:'center'}}>
            <Nav.Link as={Link} to="cart" variant="outline" ><FaShoppingCart color='white' /></Nav.Link>
            <span style={{fontSize:'0.6rem',color:'white',width:'105px'}}>{items} cart ${total} CAD</span>
            </div>
            <Nav.Link as={Link} to="admin" variant="outline" style={s} ><FaUser color='white' /></Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;