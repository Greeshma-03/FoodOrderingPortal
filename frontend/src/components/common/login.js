import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
   const navigate = useNavigate();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   const onChangeUsername = (event) => {
      setName(event.target.value);
   };

   const onChangeEmail = (event) => {
      setEmail(event.target.value);
   };

   const resetInputs = () => {
      setName("");
      setEmail("");
   };


   
   const onSubmit = (event) => {
      event.preventDefault();
  
      const newUser = {
        name: name,
        email: email,
      };
  
      axios
        .post("http://localhost:4000/user/login", newUser)
        .then((response) => {
        console.log("here is the frontend:")
         console.log(response.data);
          if(response.data.val===0){
          alert("Register first!!");
           }
          else if(response.data.val===1){
            navigate("/buyer");
           }
          else if(response.data.val===2){
            navigate("/vendor");
          } 
          else{
            alert("wtf!!");
          }
        });
  
      resetInputs();
    };
  
    return (
      <Grid container align={"center"} spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={onChangeUsername}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={onChangeEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={onSubmit}>
            Login
          </Button>
        </Grid>
      </Grid>
    );
  };
  

export default Login;
