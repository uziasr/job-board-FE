import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from "react-router-dom"


const JobCard = ({ jobs }) => {

    const [jobStatus, setJobStatus] = useState([
        { value: 10, label: "applied" },
        { value: 30, label: "interviewing" },
        { value: 50, label: "rejected" },
        { value: 70, label: "declined" },
        { value: 90, label: "hired" },
    ])
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="position" name="position" defaultValue={job.status}>
                                <FormControlLabel
                                    value="applied"
                                    control={<Radio color="primary" />}
                                    label="Applied"
                                    labelPlacement="bottom"
                                    style={{ color: "black" }}
                                />
                                <FormControlLabel
                                    value="interviewing"
                                    control={<Radio color="primary" />}
                                    label="Interviewing"
                                    labelPlacement="bottom"
                                    style={{ color: "black" }}
                                />
                                <FormControlLabel
                                    value="rejected"
                                    control={<Radio color="primary" />}
                                    label="Rejected"
                                    labelPlacement="bottom"
                                    style={{ color: "black" }}
                                />
                                <FormControlLabel
                                    value="declined"
                                    control={<Radio color="primary" />}
                                    label="Declined"
                                    labelPlacement="bottom"
                                    style={{ color: "black" }}
                                />
                                <FormControlLabel
                                    value="hired"
                                    control={<Radio color="primary" />}
                                    label="Hired"
                                    labelPlacement="bottom"
                                    style={{ color: "black" }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobCard;