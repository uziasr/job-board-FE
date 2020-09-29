import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getJobs } from "../state/actions"
import { useDispatch, useSelector } from "react-redux"


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
            <Typography variant="h4" style={{ color: "black" }}>Applied</Typography>
            {jobs.applied.map(job => (
                <p>{job}</p>
            ))}
            <Typography variant="h4" style={{ color: "black" }}>Interviewing</Typography>
            {jobs.interviewing.map(job => (
                <p>{job}</p>
            ))}
            <Typography variant="h4" style={{ color: "black" }}>Denied</Typography>
            {jobs.denied.map(job => (
                <p>{job}</p>
            ))}
            <Typography variant="h4" style={{ color: "black" }}>Hired</Typography>
            {jobs.hired.map(job => (
                <p>{job}</p>
            ))}
        </div>
    );
};

export default JobBoard;