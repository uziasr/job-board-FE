import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    return (
        <div style={{ width: "30%" }}>
            <Typography variant="h2" style={{ color: "black" }}>Login</Typography>
            <div style={{ display: "flex", flexDirection: "column", margin:"5% 0 5% 0" }}>
                <Typography variant="h5" style={{ color: "black", textAlign:"left" }}>Email</Typography>
                <TextField variant="outlined" placeholder="enter email" name="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <Typography variant="h5" style={{ color: "black", textAlign:"left", marginTop:"5%" }}>Password</Typography>
                <TextField variant="outlined" placeholder="enter password" name="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <Button variant="contained" color="primary" style={{ cursor: "pointer", width: "100%" }} disabled={user.email === "" || user.password === ""}>Login</Button>
        </div>
    );
};

export default Login;