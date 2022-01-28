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


const OrderItems = (props) => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [email, setemail] = useState(localStorage.getItem("useremail"));
    const [shop, setshop] = useState(localStorage.getItem("shop"));
    const [edit, setedit] = useState("0");
    const [index, setindex] = useState(-1);
    const [qty, setqty] = useState(-1);

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [rating, setrating] = useState("");
    const [veg, setveg] = useState("");

    useEffect(() => {
        const user = {
            bemail: email
        };

        axios
            .post("http://localhost:4000/user/orderitems", user)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onSubmitOrder = (user) => {

        console.log(user);
        const nuser = {
            bemail: email, 
            vemail: user.email,
            item: user.name,
            qty: 0,
            status: "placed",
            shop: shop
        };

        console.log(nuser);

        axios
            .post("http://localhost:4000/user/addorder", nuser)
            .then(response => {
                if (response.data.val === 1)
                    alert("Order placed Successfully!!");
                else
                    alert("Failed to place Order!!");

            })
            .catch((error) => {
                console.log(error);
            });
        setedit("0");
        setindex(-1);
    };

    const onChangeqty = (event, ind) => {
        setedit("1");
        setindex(ind);
        setqty(event);
    };


    const onSubmitFav = () => {

    };


    return (
        <div>
            <div>
                <BuyerNavbar />

                <div className="container">

                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Sr No.</TableCell>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Item Qty</TableCell>
                                        <TableCell>Vendor email</TableCell>
                                        <TableCell>Shop</TableCell>
                                        <TableCell>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user, ind) => (

                                        <TableRow key={ind}>
                                            <TableCell>{ind + 1}</TableCell>
                                            <TableCell>{user.item}</TableCell>
                                            <TableCell>{user.qty}</TableCell>
                                            <TableCell>{user.vemail}</TableCell>
                                            <TableCell>{user.shop}</TableCell>
                                            <TableCell>{user.status}</TableCell>

                                            <TableCell><Grid item xs={12}>
                                                <Button variant="contained" color="success" onClick={() => onSubmitOrder(user)}>
                                                    Order
                                                </Button>
                                            </Grid></TableCell>
                                            <TableCell><Grid item xs={12}>
                                                <Button variant="contained" onClick={() => onSubmitFav(ind, user._id)}>
                                                    Add to Favourites
                                                </Button>
                                            </Grid></TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </div>
            </div>
        </div >
    );
};

export default OrderItems;
