import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/login";
import BReg from "./components/common/Bregister";
import VReg from "./components/common/Vregister";
import BProfile from "./components/users/Buyer/Profile";
import Buyer from "./components/users/Buyer/Buyer"
import Vendor from "./components/users/Vendor/Vendor";
import BLogout from "./components/users/Buyer/logout";
import VLogout from "./components/users/Vendor/logout";
import Vprofile from "./components/users/Vendor/Profile";
import FoodItems from "./components/users/Vendor/FoodItems";
import AddItem from "./components/users/Vendor/Itemreg";
import Items from "./components/users/Buyer/FoodItems";
import OrderItems from "./components/users/Buyer/OrderItems";

const Layout = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<UsersList />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="vendor" element={<Vendor />} />
        <Route path="bregister" element={<BReg />} />
        <Route path="vregister" element={<VReg />} />

        <Route path="/buyer" element={<Buyer />} />
        <Route path="/buyer/profile" element={<BProfile />} />
        <Route path="/buyer/logout" element={<BLogout />} />
        <Route path="/buyer/items" element={<Items />} />
        <Route path="/buyer/order" element={<OrderItems />} />
        

        <Route path="/vendor" element={<Vendor />} />
        <Route path="/vendor/logout" element={<VLogout />} />
        <Route path="/vendor/proofile" element={<Vprofile />} />
        <Route path="/vendor/menu" element={<FoodItems />} />
        <Route path="/vendor/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;