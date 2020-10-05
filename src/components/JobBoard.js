import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getJobs } from "../state/actions"
import { useDispatch, useSelector } from "react-redux"
import JobCard from "./JobCard"
import TextField from '@material-ui/core/TextField';


const JobBoard = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [jobs, setJobs] = useState({
        applied: [],
        interviewing: [],
        denied: [],
        hired: []

    })



    useEffect(() => {
        dispatch(getJobs())
    }, [])


    console.log(state.jobs)

    return (
        <div className="jobBoardRoot">
            <TextField label="Job Title" style={{width: "30%"}}></TextField>
            <JobCard jobs={state.jobs} />

        </div>
    );
};

export default JobBoard;
