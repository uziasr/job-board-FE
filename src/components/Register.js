import React , { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Register = () => {

    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        password:""
    })

    return (
        <div>
          <TextField variant="outlined" placeholder="name" name="name" value={newUser.name} onChange={(e)=>setNewUser({...newUser, name: e.target.value})}/>
          <TextField variant="outlined" placeholder="email" name="email" value={newUser.email} onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/>
          <TextField variant="outlined" placeholder="password" name="password" value={newUser.password} onChange={(e)=>setNewUser({...newUser, password: e.target.value})}/>
        </div>
    );
};

export default Register;