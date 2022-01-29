import VendorNavbar from "../../templates/VendorNav";
import { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import BuyerNavbar from "../../templates/BuyerNav";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Stats = (props) => {
    const [users, setUsers] = useState([]);
    const [orderusers, setorderUsers] = useState([]);
    const [email, setemail] = useState(localStorage.getItem("useremail"));
    const [placed, setplaced] = useState(0);
    const [pending, setpending] = useState(0);
    const [completed, setcompleted] = useState(0);

    const user = {
        email: email
    }

    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vorderitems", user)
            .then((response) => {
                setorderUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <VendorNavbar />
            <div className="container">
                <h1>Welcome to home page of {localStorage.getItem("shop")}</h1>
                <>
                    <div className="container" style={{ textAlign: "center" }}>
                        <Grid item xs={12} md={9} lg={9}>
                            <Paper>
                                <Table size="small">

                                    {orderusers.map((user, ind) => (
                                        <>
                                            {user.status=="placed" && setplaced(2)}

                                        </>
                                    ))}
                                </Table>
                            </Paper>
                        </Grid>
                    </div>
                </>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2>Orders placed-{placed}</h2>
                    <h2>Orders completed-{completed}</h2>
                </div>
            </div>
        </div>

    );
};

export default Stats;
