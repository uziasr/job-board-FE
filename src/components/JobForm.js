import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CheckBox from '@material-ui/core/CheckBox'
import { useDispatch, useSelector } from "react-redux"
import { addJob } from "../state/actions"


const JobForm = (props) => {

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


    const validFieldCheck = () => {
        return props.jobForm.title !== "" && props.jobForm.company !== "" && props.jobForm.location !== "" && props.jobForm.link !== "" && props.jobForm.description !== ""
    }

    const addJobHandler = () => {
        dispatch(addJob(props.jobForm))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", margin: "10px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
                <TextField style={{ width: "48%" }} variant="outlined" name="title" label="title" value={props.jobForm.title} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
                <TextField style={{ width: "48%" }} variant="outlined" name="company" label="company" value={props.jobForm.company} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <TextField style={{ width: "48%" }} variant="outlined" name="location" label="location" value={props.jobForm.location} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
                <TextField style={{ width: "48%" }} variant="outlined" name="link" label="link" value={props.jobForm.link} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
                <FormControl style={{ width: "100%" }}>
                    <InputLabel>Importance</InputLabel>
                    <Select
                        value={props.jobForm.importance}
                        label="Importance"
                        onChange={(e) => props.setJobForm({ ...props.jobForm, importance: Number(e.target.value) })}
                        style={{ width: "80%" }}
                    >
                        {Object.keys(importance).map(i => (
                            <MenuItem key={i} value={i}>{importance[i]}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <>
                    <TextField value={props.jobForm.salary} disabled={!salary.exists} style={{ width: "76%" }} variant="outlined" name="salary" label="salary"  onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
                    <CheckBox checked={salary.exists} color="primary" onChange={()=>setSalary({...salary, exists: !salary.exists})}></CheckBox>
                </>

            </div>
            <div>
                <TextField variant="outlined" multiline
                    rows={6} style={{ width: "100%", height: "60%", marginBottom: "15px" }} name="description" label="description" value={props.jobForm.description} onChange={(e) => props.setJobForm({ ...props.jobForm, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <Button variant="contained" onClick={() => addJobHandler()} disabled={!validFieldCheck()} color="primary" style={{ width: "100%" }}>Submit</Button>
            </div>
        </div>
    );
};

export default JobForm;