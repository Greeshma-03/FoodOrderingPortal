import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/login";
import Buyer from "./components/users/Buyer";
import BReg from "./components/common/Bregister";
import VReg from "./components/common/Vregister";
import Vendor from "./components/users/Vendor";

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
          <Route path="login" element={<Login/>}/>
          <Route path="buyer" element={<Buyer/>}/>
          <Route path="vendor" element={<Vendor/>} />
          <Route path="bregister" element={<BReg/>}/>
          <Route path="vregister" element={<VReg/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;