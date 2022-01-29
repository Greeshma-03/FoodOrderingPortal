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

    var placed = 0;
    var pending = 0;
    let completed = 0;
    let rejected = 0;

    const user = {
        email: email
    }

    useEffect(() => {
        axios
            .post("http://localhost:4000/user/vorderitems", user)
            .then((response) => {
                setorderUsers(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <VendorNavbar />
            <div className="container">
                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orderusers.map((user, ind) => (
                                        <>
                                            {(() => {
                                                if (user.status === "placed") {
                                                    placed = placed + 1;
                                                    console.log(placed);
                                                }
                                                else if (user.status === "completed") {
                                                    completed = completed + 1;
                                                    console.log(completed)
                                                }
                                                else if (user.status === "rejected") {
                                                    rejected = rejected + 1;
                                                }
                                                else{
                                                    pending = 1 + pending;
                                                }
                                            }
                                            )()}
                                            </>
                                    ))}

                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                <h2>placed-{placed}</h2>
                <h2>completed-{completed}</h2>
            </div>
        </div >

    );
};

export default Stats;

