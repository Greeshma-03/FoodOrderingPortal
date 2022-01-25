import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return(
  <div>
  <Navbar />
  <div className="container">
  </div>
   <div style={{ textAlign: "center" }}>Happy Coding - {name}</div>;
   </div>)
};

export default Home;
