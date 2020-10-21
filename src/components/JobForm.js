import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch, useSelector } from "react-redux"
import { addJob } from "../state/actions"
import JobPostStatus from './JobPostStatus'
import { Loading } from 'react-loading-dot'




const JobForm = ({ jobForm, setJobForm, setLink }) => {

    const jobState = useSelector(state => state)
    const dispatch = useDispatch()
    const [importance, setImportance] = useState({
        1: "just applying",
        2: "another application",
        3: "suitable job",
        4: "exciting job",
        5: "dream job"
    })

    const [salary, setSalary] = useState({
        amount: 0,
        exists: false
    })

    const [open, setOpen] = useState(false);

    const validFieldCheck = () => {
        return jobForm.title !== "" && jobForm.company !== "" && jobForm.location !== "" && jobForm.link !== "" && jobForm.description !== ""
    }

    const addJobHandler = () => {
        dispatch(addJob(jobForm))
        setOpen(true)
    }

    const clearForm = () => {
        setJobForm(() => (
            {
                title: "",
                company: "",
                location: "",
                link: "",
                description: "",
                importance: 4,
                status: "applied",
                salary: 0
            }
        ))
        setLink("")
    }

    const handleClose = () => {
        setOpen(false);
    };

    const inputHandler = (e) => {
        setJobForm({ ...jobForm, [e.target.name]: e.target.value })
    }

    return (
        <>
            {jobState.jobPostLoading ? <Loading background={"#3f51b5"} /> : <div style={{ display: "flex", flexDirection: "column", width: "100%", margin: "10px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
                    <TextField style={{ width: "48%" }} variant="outlined" name="title" label="title" value={jobForm.title} onChange={(e) => inputHandler(e)} />
                    <TextField style={{ width: "48%" }} variant="outlined" name="company" label="company" value={jobForm.company} onChange={(e) => inputHandler(e)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                    <TextField style={{ width: "48%" }} variant="outlined" name="location" label="location" value={jobForm.location} onChange={(e) => inputHandler(e)} />
                    <TextField style={{ width: "48%" }} variant="outlined" name="link" label="link" value={jobForm.link} onChange={(e) => inputHandler(e)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                    <FormControl style={{ width: "100%" }}>
                        <InputLabel>Importance</InputLabel>
                        <Select
                            value={jobForm.importance}
                            label="Importance"
                            onChange={(e) => setJobForm({ ...jobForm, importance: Number(e.target.value) })}
                            style={{ width: "80%" }}
                        >
                            {Object.keys(importance).map(i => (
                                <MenuItem key={i} value={i}>{importance[i]}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <>
                        <TextField value={jobForm.salary} disabled={!salary.exists} style={{ width: "76%" }} variant="outlined" name="salary" label="salary" onChange={(e) => inputHandler(e)} />
                        <Checkbox checked={salary.exists} color="primary" onChange={() => setSalary({ ...salary, exists: !salary.exists })}></Checkbox>
                    </>

                </div>
                <div>
                    <TextField variant="outlined" multiline
                        rows={6} style={{ width: "100%", height: "60%", marginBottom: "15px" }} name="description" label="description" value={jobForm.description} onChange={(e) => inputHandler(e)} />
                </div>
                <div>
                    <Button variant="contained" onClick={() => addJobHandler()} disabled={!validFieldCheck()} color="primary" style={{ width: "100%" }}>Submit</Button>
                    <Button variant="contained" onClick={() => clearForm()} color="primary" style={{ width: "100%" }}>Clear Form</Button>
                    <JobPostStatus open={open} handleClose={handleClose} clearForm={clearForm} />
                </div>
            </div>}
        </>
    );
};

export default JobForm;