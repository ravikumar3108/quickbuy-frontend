import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./User/Login"
import Signup from "./User/Signup"
import Home from './Layout/Home';
import Contact from './Pages/Contact';
import AddProducts from './Admin/AddProducts';
import Cart from './Components/Cart';
import Product from './Pages/Product';
import Checkout from './Components/Order/Checkout';
import ProductOverview from "./Components/ProductOverview"
import Notfound from './Pages/Notfound';
import Confirmation from "./Components/Order/Confirmation"
import DashboardLayout from './Admin/DashboardLayout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/admin-addproducts' element={<AddProducts/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/overview' element={<ProductOverview/>}/>
            <Route path='/confirmation' element={<Confirmation/>}/>
            <Route path='/*' element={<Notfound/>}/>
            <Route path='/admin-dash' element={<DashboardLayout/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
