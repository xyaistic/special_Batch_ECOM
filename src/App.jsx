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
import Login1 from "./Components/Login1";
// import Authentication from "./Components/authentication";

function App() {
  let token = localStorage.getItem("token");
  
  return (
    <>
    <Layout/>
    {/* <Login1/> */}
    
      <Routes>
        <Route path="/home"element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product" element={ <AllProducts /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/allCategory" element={ <Category /> } />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
{/* <Authentication> <Home /> </Authentication> */}