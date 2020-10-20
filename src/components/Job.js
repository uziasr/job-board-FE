import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getJobById, updateJob } from "../state/actions"
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from "react-router-dom"

const Job = (props) => {

    const url = props.location.pathname.split("/")[2]
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [importance, setImportance] = useState({
        1: "just applying",
        2: "another application",
        3: "suitable job",
        4: "exciting job",
        5: "dream job"
    })

    const updateStatus = (status) => {
        dispatch(updateJob(url, {status: status}))
    }

    useEffect(() => {
        dispatch(getJobById(url))
    }, [])

    return (
        <div className="jobRoot">
            {state.loading ? <Typography variant="h1" style={{ color: "black" }}>loading</Typography>
                :
                <>
                    <a className="jobLink" href={state.job.link} >
                        <Typography className="jobLinkText" variant="h3">{state.job.title}</Typography>
                    </a>
                    <div className="jobLoCo">
                        <Typography variant="h4" style={{ color: "black" }}>{state.job.company}</Typography>
                        <Typography variant="h4" style={{ color: "black" }}>{state.job.location}</Typography>
                    </div>
                    <div>
                        <FormControl component="fieldset">
                            <RadioGroup className="statusRadio" row aria-label="position" onChange={e => updateStatus(e.target.value)} name="position" defaultValue={state.job.status}>
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
                    {/* <a href={state.job.link}>
                        <Typography variant="h6" style={{ color: "black" }}>{state.job.link}</Typography>
                    </a> */}
                    <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{state.job.description}</Typography>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>Salary</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{state.job.salary}</Typography>
                    </div>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>Importance</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{importance[state.job.importance]}</Typography>
                    </div>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>Status</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{state.job.status}</Typography>
                    </div>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>Date</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{state.job.date.split(" ").splice(1, 3).join(' ')}</Typography>
                    </div>
                </>
            }
        </div>
    )
}

export default Job