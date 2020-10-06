import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const JobCard = ({ jobs }) => {

    const [showDetails, setShowDetails] = useState({})

    const detailHandler = (id) => {
        if (showDetails[id]) {
            setShowDetails(() => ({ ...showDetails, [id]: !showDetails[id] }))
        } else {
            setShowDetails(() => ({ ...showDetails, [id]: true }))
        }
    }

    // console.log(showDetails)

    return (
        <div>
            {jobs.map(job =>
                <div className="jobCardRootWrap">
                    <Typography variant="h5" className="jobCardText">{job.title}</Typography>
                    {showDetails[job.id] ? null : <div className="chevronWrapper" onClick={() => detailHandler(job.id)}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ color: "black", fontSize: "24px" }} />
                    </div>}
                    {showDetails[job.id] ?
                        <>
                            <Typography variant="h6" className="jobCardText">{job.company}</Typography>
                            <Typography variant="h6" className="jobCardText">{job.location}</Typography>
                            <Typography variant="h6" className="jobCardText">{job.date}</Typography>
                        </>
                        : null
                    }
                    {showDetails[job.id] ? <div className="chevronWrapper" onClick={() => detailHandler(job.id)}>
                        <FontAwesomeIcon icon={faChevronUp} style={{ color: "black", fontSize: "24px" }} />
                    </div> : null}

                </div>
            )}
        </div>
    );
};

export default JobCard;