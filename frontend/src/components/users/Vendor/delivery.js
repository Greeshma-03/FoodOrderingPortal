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
import VendorNavbar from "../../templates/VendorNav";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Selling = (props) => {
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
            vemail: email
        };

        axios
            .post("http://localhost:4000/user/delivery", user)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onSubmitStage = (id) => {

        const nuser = {
            id: id
        };

        console.log(nuser);

        axios
            .post("http://localhost:4000/user/stageedit", nuser)
            .then(response => {
                if (response.data.val === 1)
                    alert("Order Edited Successfully!!");
                else
                    alert("Failed to edit Order!!");

            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload(false);
    };

    const onSubmitreject = (id) => {

        const nuser = {
            id: id
        };

        console.log(nuser);

        axios
            .post("http://localhost:4000/user/reject", nuser)
            .then(response => {
                if (response.data.val === 1)
                    alert("Rejected Successfully!!");
                else
                    alert("Failed to reject Order!!");

            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload(false);
    };

    const onChangeqty = (event, ind) => {
        setedit("1");
        setindex(ind);
        setqty(event);
    };


    return (
        <div>
            <div>
                <VendorNavbar />

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
                                            {user.status == "placed" || user.status == "accepted" || user.status == "cooking" ?
                                                <>
                                                    < TableCell > <Grid item xs={12}>
                                                        <Button variant="contained" color="success" onClick={() => onSubmitStage(user._id)}>
                                                            Move to Next Stage
                                                        </Button>
                                                    </Grid></TableCell>
                                                    {user.status == "placed" &&
                                                        < TableCell > <Grid item xs={12}>
                                                            <Button variant="contained" color="error" onClick={() => onSubmitreject(user._id)}>
                                                                Reject
                                                            </Button>
                                                        </Grid></TableCell>
                                                    }

                                                </>
                                                :
                                                <>
                                                </>
                                            }
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

export default Selling;
