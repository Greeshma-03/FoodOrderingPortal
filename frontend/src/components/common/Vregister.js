import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const VReg = (props) => {

    const [name, setname] = useState("");
    const [shop, setshop] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [canteenopen, setcanteenopen] = useState("");
    const [canteenclose, setcanteenclose] = useState("");
    const [pw, setpw] = useState("");
    
    const onChangename = (event) => {
        setname(event.target.value);
    };

    const onChangeshop = (event) => {
        setshop(event.target.value);
    };

    const onChangeemail = (event) => {
        setemail(event.target.value);
    };

    const onChangecontact = (event) => {
        setcontact(event.target.value);
    };

    const onChangeopen = (event) => {
        setcanteenopen(event.target.value);
    };

    const onChangeclose = (event) => {
        setcanteenclose(event.target.value);
    };

    const onChangepw = (event) => {
        setpw(event.target.value);
    };

    const resetInputs = () => {
        setname("");
        setshop("");
        setemail("");
        setcontact("");
        setcanteenopen("");
        setcanteenclose("");
        setpw("");
    };

    
    var present = 0;
    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: name,
            shop:shop,
            email: email,
            contactno: contact,
            canteenopen:canteenopen,
            canteenclose:canteenclose,
            password:pw
        };

        axios
            .post("http://localhost:4000/user/vregister", newUser)
            .then((response) => {
                console.log(response.data);
                //failure
                if (response.data.val === 0) {
                    alert("Already registered!!\nLogin now!!!");
                }
                //success
                else {
                    alert("Created "+response.data.name);              
                    present = 1;
                }

            });

        resetInputs();
    };

    
    return (
        <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Manager's Name"
                    variant="outlined"
                    value={name}
                    onChange={onChangename}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Shop Name"
                    variant="outlined"
                    value={shop}
                    onChange={onChangeshop}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email Address"
                    variant="outlined"
                    value={email}
                    onChange={onChangeemail}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Contact Number"
                    variant="outlined"
                    value={contact}
                    onChange={onChangecontact}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Canteen Opening time"
                    variant="outlined"
                    value={canteenopen}
                    onChange={onChangeopen}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="Canteen Closing time"
                    variant="outlined"
                    value={canteenclose}
                    onChange={onChangeclose}
                />
            </Grid>            
            <Grid item xs={12}>
                <TextField
                    label="password"
                    variant="outlined"
                    value={pw}
                    onChange={onChangepw}
                />

            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" onClick={onSubmit}>
                    Register
                </Button>
            </Grid>
        </Grid>
    );
};


export default VReg;
