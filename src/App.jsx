import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import WishList from "./Components/WishList";
import Category from "./Components/Category";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import RegistrationPage from "./Components/Registration";
// import Authentication from "./Components/authentication";
import PlaceOrder from "./Components/PlaceOrder";
import SingleProduct from "./Components/SingleProduct";
import ConfirmedOrder from "./Components/ConfirmedOrder";
import FailedOrder from "./Components/FailedOrder";
function App() {
  // let token = localStorage.getItem("token");

  return (
    <>
    
    <Layout/>
      <Routes>
        {/* <Route path="/" element={<Layout/>}/> */}
        <Route path="/"element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={ <AllProducts /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/allCategory" element={ <Category /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/placeorder" element={<PlaceOrder/>}/>
        <Route path="/SingleProduct" element={<SingleProduct/>}/>
        <Route path="/ConfirmedOrder" element={<ConfirmedOrder/>}/>
        <Route path="/FailedOrder" element={<FailedOrder/>}/>
        
      </Routes>
    </>
  );
}

export default App;
{/* <Authentication> <Home /> </Authentication> */}