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


const FoodItems = (props) => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [sortedUsers, setSortedUsers] = useState([]);
    const [sortName, setSortName] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [email, setemail] = useState(localStorage.getItem("useremail"));
    const [edit, setedit] = useState("0");
    const [index,setindex]=useState("");

    useEffect(() => {

        const newu = {
            email: email
        };

        axios
            .post("http://localhost:4000/user/items", newu)
            .then((response) => {
                setUsers(response.data);
                setSortedUsers(response.data);
                setSearchText("");
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const onSubmitedit = (id) => {
        console.log(id)
        const newuser = {
            id: id,
            name: name,
            price: price,
            rating: rating,
            veg: veg
        };
        axios
            .post("http://localhost:4000/user/edititem", newuser)
            .then(response => {
                if (response.data.val == 1)
                    alert("Edited Successfully!!");
                else {
                    alert("Failed to Edit!!");
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const onSubmitdel = (id) => {
        console.log(id)
        const newuser = {
            id: id
        };
        axios
            .post("http://localhost:4000/user/delitem", newuser)
            .then(response => {
                if (response.data.val === 1)
                    alert("Deleted Sucessfully!!")
                else
                    alert("Failed to delete!!");
            })
            .catch((error) => {
                console.log(error);
            });
        window.location.reload(false);

    };

    return (
        <div>
            <div>
                <VendorNavbar />

                <div className="container">
                    <Button variant="contained" onClick={() => navigate("/vendor/additem")} >ADD </Button>
                </div>

                <div className="container">

                    <Grid item xs={12} md={9} lg={9}>
                        <Paper>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell> Sr No.</TableCell>
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Item Cost</TableCell>
                                        <TableCell>Rating</TableCell>
                                        <TableCell>Food Type</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user, ind) => (

                                        <TableRow key={ind}>
                                            <div container align={"center"}>
                                                {edit === "0" &&
                                                    <div>
                                                        <TableCell>{ind + 1}</TableCell>
                                                        <TableCell>{user.name}</TableCell>
                                                        <TableCell>{user.price}</TableCell>
                                                        <TableCell>{user.rating}</TableCell>
                                                        <TableCell>{user.veg}</TableCell>
                                                        <TableCell><Grid item xs={12}>
                                                            <Button variant="contained" onClick={() => onSubmitedit(user._id)}>
                                                                Edit
                                                            </Button>
                                                        </Grid></TableCell>
                                                        <TableCell>
                                                            <Grid item xs={12}>
                                                                <Button variant="contained" onClick={() => onSubmitdel(user._id)}>
                                                                    Delete
                                                                </Button>
                                                            </Grid>
                                                        </TableCell>
                                                    </div>

                                                }

                                                {edit === "1" &&
                                                    <div>
                                                        <TableCell>{ind + 1}</TableCell>
                                                        <TableCell>{user.name}</TableCell>
                                                        <TableCell>{user.price}</TableCell>
                                                        <TableCell>{user.rating}</TableCell>
                                                        <TableCell>{user.veg}</TableCell>
                                                        <TableCell><Grid item xs={12}>
                                                            <Button variant="contained" onClick={() => onSubmitedit(user._id)}>
                                                                Save
                                                            </Button>
                                                        </Grid></TableCell>
                                                        <TableCell>
                                                            <Grid item xs={12}>
                                                                <Button variant="contained" onClick={() => onSubmitdel(user._id)}>
                                                                    Delete
                                                                </Button>
                                                            </Grid>
                                                        </TableCell>
                                                    </div>
                                                }
                                            </div>
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

export default FoodItems;
