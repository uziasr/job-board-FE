import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';


const JobEdit = ({ setFollowedUpPopUp, updateStatus, setCelebrate }) => {

    const followUpHandler = () => {
        updateStatus({ followed_up: true })
        setCelebrate(true)
    }

    

    return (
        <div className="jobEditRoot">
            <div>
                <Typography style={{ color: "white" }}>Have you followed up?</Typography>
                <div style={{ display: "flex", justifyContent: "space-between", width: "70%", margin: "0 auto" }}>
                    <Typography onClick={() => followUpHandler()} className="jobEditYesNo">Yes</Typography>
                    <Typography onClick={() => setFollowedUpPopUp(false)} className="jobEditYesNo">No</Typography>
                </div>            </div>
        </div>
    );
};

export default JobEdit;