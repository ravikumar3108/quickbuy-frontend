import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./User/Login"
import Signup from "./User/Signup"
import Home from './Layout/Home';
import Contact from './Home Pages/Contact';
import AddProducts from './Components/AddProducts';
import Cart from './Components/Cart';
import Payment from './Components/Payment';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/addproducts' element={<AddProducts/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
