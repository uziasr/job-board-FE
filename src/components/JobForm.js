import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const JobForm = (props) => {
    
    

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "85%", margin:"10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin:"15px 0" }}>
                <TextField  variant="outlined" name="title" label="title" value={props.jobForm.company} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
                <TextField  variant="outlined" name="company" label="company" value={props.jobForm.title} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom:"15px" }}>
                <TextField  variant="outlined" name="location" label="location" value={props.jobForm.location} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
                <TextField  variant="outlined" name="link" label="link" value={props.jobForm.link} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <TextField  variant="outlined"  multiline
                    rows={6} style={{ width: "100%", height: "60%" }} name="description" label="description" value={props.jobForm.description} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <Button variant="contained" color="primary" style={{width: "100%"}}>Submit</Button>
            </div>
        </div>
    );
};

export default JobForm;