import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { endpoint } from "./Auth"
import axios from "axios"
import { useHistory } from "react-router-dom";


const Register = (props) => {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password1: "",
        password2: ""
    })

    const [error, setError] = useState('')

    const history = useHistory()

    const registerHandler = () => {
        axios.post(`${endpoint}/register`, { name: newUser.name, email: newUser.email, password: newUser.password1 })
            .then(res => {
                localStorage.setItem("token", res.data.token)
                history.push('/add-job')
            })
            .catch(err => {
                setError("There was an error in creating your account. Please try again later")
            })
    }


    return (
        <div style={{ width: "30%" }}>
            <Typography variant="h2" style={{ color: "black" }}>Register</Typography>
            {error ? <Typography variant="h6" style={{ color: "red", textAlign: "left", marginTop: "4%" }}>{error}</Typography> : null}
            <div style={{ display: "flex", flexDirection: "column", margin: "5% 0 5% 0" }}>
                <Typography variant="h5" style={{ color: "black", textAlign: "left" }}>Name</Typography>
                <TextField variant="outlined" placeholder="name" name="name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign: "left", marginTop: "4%" }}>Email</Typography>
                <TextField variant="outlined" placeholder="email" name="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign: "left", marginTop: "4%" }}>Password</Typography>
                <TextField type="password" variant="outlined" placeholder="password" name="password1" value={newUser.password1} onChange={(e) => setNewUser({ ...newUser, password1: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign: "left", marginTop: "4%" }}>Password Retype</Typography>
                <TextField type="password" variant="outlined" placeholder="password" name="password2" value={newUser.password2} onChange={(e) => setNewUser({ ...newUser, password2: e.target.value })} />
            </div>
            <Button onClick={() => registerHandler()} variant="contained" color="primary" style={{ cursor: "pointer", width: "100%" }} disabled={newUser.email === "" || newUser.password1 === "" || newUser.name === "" || newUser.password1 !== newUser.password2}>Register</Button>
        </div >
    );
};

export default Register;