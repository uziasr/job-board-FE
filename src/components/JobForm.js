import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const JobForm = () => {

    const [jobForm, setJobForm] = useState({
        title: "",
        company: "",
        location: "",
        link: "",
        description: "",

    })

    return (
        <div style={{display:"flex"}}>
            <div>
                <TextField name="title" value={jobForm.company} onChange={(e) => setJobForm({ ...jobForm, [e.target.name]: e.target.value })} />
                <TextField name="company" value={jobForm.title} onChange={(e) => setJobForm({ ...jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <TextField name="location" value={jobForm.location} onChange={(e) => setJobForm({ ...jobForm, [e.target.name]: e.target.value })} />
                <TextField name="link" value={jobForm.link} onChange={(e) => setJobForm({ ...jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <TextField name="description" value={jobForm.description} onChange={(e) => setJobForm({ ...jobForm, [e.target.name]: e.target.value })} />
            </div>
        </div>
    );
};

export default JobForm;