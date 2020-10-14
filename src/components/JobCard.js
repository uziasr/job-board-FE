import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"


const JobCard = ({ jobs }) => {

    const updateStatus = (status) => {

    }

    return (
        <div>
            {jobs.map((job, index) =>
                <div key={index} className="jobCardRootWrap">
                    <Link style={{ textDecoration: "none" }} to={{
                        pathname: `/job/${job.id}`,
                        state: { id: job.id }
                    }} >
                        <Typography variant="h5" className="jobCardText">{job.title}</Typography>
                        <Typography style={{ fontSize: "18px" }} className="jobCardText">{job.company}</Typography>
                        <Typography style={{ fontSize: "18px" }} className="jobCardText">{job.location}</Typography>
                        <Typography style={{ fontSize: "18px" }} className="jobCardText">{job.date}</Typography>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default JobCard;