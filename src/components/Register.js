import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const Register = () => {

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    return (
        <div style={{ width: "30%" }}>
            <Typography variant="h2" style={{ color: "black" }}>Register</Typography>
            <div style={{ display: "flex", flexDirection: "column", margin: "5% 0 5% 0" }}>
                <Typography variant="h5" style={{ color: "black", textAlign: "left" }}>Name</Typography>
                <TextField variant="outlined" placeholder="name" name="name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign: "left", marginTop: "4%" }}>Email</Typography>
                <TextField variant="outlined" placeholder="email" name="email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign: "left", marginTop: "4%" }}>Password</Typography>
                <TextField variant="outlined" placeholder="password" name="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
            </div>
            <Button variant="contained" color="primary" style={{ cursor: "pointer", width: "100%" }} disabled={newUser.email === "" || newUser.password === "" || newUser.name === ""}>Register</Button>
        </div >
    );
};

export default Register;