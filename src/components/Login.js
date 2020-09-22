import React , { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    return (
        <div>
          <TextField variant="outlined" placeholder="email" name="email" value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})}/>
          <TextField variant="outlined" placeholder="password" name="password" value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})}/>
        </div>
    );
};

export default Login;