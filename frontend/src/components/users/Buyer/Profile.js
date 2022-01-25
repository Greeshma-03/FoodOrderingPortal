import BuyerNavbar from "../../templates/BuyerNav";
import axios from "axios";
import { useState } from "react";

const BProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const onChangeUsername = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const newUser = {
        email: email,
    };

    axios
        .post("http://localhost:4000/buyer/info", newUser)
        .then((response) => {
            console.log(response);
        });

    return (
        <div>
            <BuyerNavbar />
            <div className="container" container-align="center" >
            </div>
            <h1>Welcome to the profile page {localStorage.getItem("username")}!! </h1>

        </div>

    );
};

export default BProfile;