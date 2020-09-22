import React, { useState } from 'react';
import Login from "./Login"
import Register from "./Register"
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


const Auth = () => {

    const [isNewUser, setIsNewUser] = useState(true)

    return (
        <>
            {isNewUser ? <Register /> : <Login />}
            <div style={{display:"flex", justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "30%"}}>
                <Typography variant="subtitle2" style={{color:"black"}}> {isNewUser ? "Already have an account?" : "Are you new? Register today!"}</Typography>
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