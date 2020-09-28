import React, { useState } from 'react';
import Login from "./Login"
import Register from "./Register"
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

export const endpoint = "http://127.0.0.1:5000/user"

const Auth = () => {

    const [isNewUser, setIsNewUser] = useState(true)

    return (
        <>
            {isNewUser ? <Register /> : <Login />}
            <div style={{display:"flex", justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "30%"}}>
                <Typography variant="subtitle2" style={{color:"black"}}>Already Have an Account?</Typography>
                <Switch
                    onChange={() => setIsNewUser(!isNewUser)}
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
            </div>

        </>
    );
};

export default Auth;