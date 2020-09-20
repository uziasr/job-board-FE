import React, { useState, useEffect } from 'react';
import axios from "axios"
import Typography from '@material-ui/core/Typography';


const JobBoard = () => {

    const [jobs, setJobs] = useState({
        applied: [],
        interviewing: [],
        denied: [],
        hired: []

    })

    useEffect(() => {

    }, [])

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