import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"


const JobCard = ({ jobs }) => {

    
    return (
        <div>
            {jobs.map(job =>
                <div className="jobCardRootWrap">
                    <Link style={{textDecoration: "none"}} to={{
                        pathname:`/job/${job.id}`,
                        state: {id: job.id}
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