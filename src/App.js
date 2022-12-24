import './App.css';
import NavBar from './components/navBar';
import './style.css'
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Footwear from './components/footwear';
import ProductDetails from './components/productDetails';
import CartDualogue from './components/cartDialogue';
import CartTable from './components/cartTable';
import Admin from './components/admin';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import AdminAddForm from './components/adminAddForm';
import Skateboards from './components/skateboards';
import AllProducts from './components/allProducts';
import EditAdmin from './components/editAdminForm';
import SearchedProducts from './components/searchedProducts';
import LoginForm from './components/loginForm';
import $ from 'jquery'
import ByBrand from './components/byBrand';


function App() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(0);
  const [boardsdata, setBoardsData] = useState([]);
  const [cartData, setCartData] = useState([]);
  let [total, setTotal] = useState(0);
  const [type, setType] = useState('bar');
  const [loggedIn, setLoggedIn] = useState(false);

  const scrollingElement = (document.scrollingElement || document.body);

  const scrollSmoothToBottom = () => {
    $(scrollingElement).animate({
      scrollTop: document.body.scrollHeight,
    }, 500);
  }

  let navigate = useNavigate();

  useEffect(() => {
    const url = "http://localhost:5000/api"
    axios.get(url)
      .then((resp) => {
        setBoardsData(resp.data)
      });
  }, []);

  const handleAdd = async (name, color, price, type, brand, productSizes, description) => {
    //add or post request
    const url = `http://localhost:5000/add`;
    const { data } = await axios.post(url, {
      name,
      color,
      price,
      type,
      brand,
      sizes: productSizes,
      description
    });
    console.log(data)
    const newBoards = [...boardsdata, data];
    console.log(newBoards)
    setBoardsData(newBoards)
    window.confirm("Product added successfully")
    navigate('/edit')
    // window.scrollTo(0, document.body.scrollHeight);
    scrollSmoothToBottom();

  };

  const handleEdit = async (id, name, color, price, type, brand, productSizes, images, description) => {
    //add or post request
    let product = { id, name, color, price, type, brand, productSizes, images, description }
    console.log(id);
    const url = `http://localhost:5000/edit/${id}`;
    console.log(url)
    const { data } = await axios.post(url, {
      name,
      color,
      price,
      type,
      brand,
      sizes: productSizes,
      images,
      description
    });
    window.confirm("Product editted successfully")
    const url2 = "http://localhost:5000/api"
    axios.get(url2)
      .then((resp) => {
        setBoardsData(resp.data)
      });
    navigate('/edit')

  };

  return (
    <div>
      <NavBar items={items} total={total} loggedIn={loggedIn} onSubmitForm={(event, key) => {
        event.preventDefault()
        navigate(`search/${key.value}`)
        key.value = '';
      }} />
      <Routes>
        <Route
          path="/"
          element={<><Home boardsdata={boardsdata} />
          </>}
        />
        <Route
          path='footwear'
          element={<Footwear products={boardsdata} />}
        />
        <Route
          path=':id'
          element={<><ProductDetails products={boardsdata} onAdd={
            (id, size) => {

              let exists = false;
              const addP = boardsdata.filter(b => b._id == id)
              for (let i = 0; i < cartData.length; i++) {
                if (cartData[i]._id == addP[0]._id && (cartData[i].size == size)) {
                  exists = true;
                  cartData[i].quantity += 1;
                  cartData[i].extendedPrice = cartData[i].quantity * cartData[i].price;
                  setCartData(cartData);
                }

              }
              if (!exists) {
                cartData.push({ ...addP[0], quantity: 1, extendedPrice: addP[0].price, size: size })
              }
              setCartData(cartData);
              let itemsArr = cartData.map((c) => c.quantity);
              setItems(itemsArr.reduce((prev, curr) => prev + curr, 0));

              let prices = cartData.map((c) => c.extendedPrice);
              setTotal(prices.reduce((prev, curr) => prev + curr, 0));
              setOpen(true);
            }
          } />
            <CartDualogue open={open} handleClose={
              () => { setOpen(false) }
            } products={cartData} items={items} />
          </>}
        />
        <Route
          path='cart'
          element={<CartTable cartData={cartData} total={total} onRemove={
            (id, quantity) => {

              let uniqueP = cartData.filter(p => p._id == id && p.quantity == quantity)

              const newcart = cartData.filter(p => p !== uniqueP[0]);
              setCartData(newcart);

              let itemsArr = newcart.map((c) => c.quantity);
              setItems(itemsArr.reduce((prev, curr) => prev + curr, 0));

              let prices = newcart.map((c) => c.extendedPrice);
              setTotal(prices.reduce((prev, curr) => prev + curr, 0));
            }
          } />}
        />
        <Route
          path='admin'
          element={<Admin type={type} products={boardsdata} onTypeChange={(event) => {
            if (type == 'bar')
              setType('line')
            else if (type == 'line')
              setType('bar')
          }} onLogout={(event) => {
            setLoggedIn(false)
            navigate('/')
          }} />}
        />
        <Route
          path='/login'
          element={<LoginForm onLogin={async (event, email, password) => {
            let admin;
            event.preventDefault()
            await axios
              .get("http://localhost:5000/login/admin")
              .then(res => admin = res.data[0]);
            if (admin.userName == email.value && admin.password == password.value) {
              console.log("logged in")
              navigate('/admin')
              setLoggedIn(true)
            }
            else {
              email.value = ""
              password.value = ""
              alert("INVALID CREDENTIALS")
            }
          }} />}
        />
        <Route
          path='add'
          element={<AdminAddForm onAdd={handleAdd} />}
        />
        <Route
          path='edit'
          element={<AllProducts products={boardsdata} onDelete={(id) => {
            if (window.confirm("Do you want to delete this product?")) {
              // console.log(`delete ${id}`)
              let url = `http://localhost:5000/delete/${id}`
              axios.delete(url).then(response => {
                console.log(response.data)
              })

              let newData = boardsdata.filter(p => p._id !== id)
              setBoardsData(newData);
            }

          }} />}
        />
        <Route
          path='edit/:id'
          element={<EditAdmin products={boardsdata} onEdit={handleEdit} />}
        />
        <Route
          path='search/:key'
          element={<SearchedProducts products={boardsdata} />}
        />
        <Route
          path='skateboards'
          element={<Skateboards products={boardsdata} />}
        />
        <Route
          path='dc'
          element={<ByBrand products={boardsdata} brand={"dc"} />}
        />
        <Route
          path='almost'
          element={<ByBrand products={boardsdata} brand={"almost"} />}
        />
        <Route
          path='blind'
          element={<ByBrand products={boardsdata} brand={"blind"} />}
        />
      </Routes>
      <Footer loggedIn={loggedIn} />
    </div>
  );
}

export default App;
