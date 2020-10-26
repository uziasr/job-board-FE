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
        dispatch(updateJob(url, { status: status }))
    }
    
    const [jobDetails, setJobDetails] = useState({})
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        dispatch(getJobById(url))
        setJobDetails(state.job)
    }, [])

    console.log(jobDetails)

    return (
        <div className="jobRoot">
            {state.loading ? <Typography variant="h1" style={{ color: "black" }}>loading</Typography>
                :
                <>
                    <div className="jobTitleWrap">
                        <a className="jobLink" href={state.job.link} >
                            <Typography className="jobLinkText" variant="h3">{state.job.title}</Typography>
                        </a>
                        {/* <div className="jobLoCo">
                            <Typography variant="h4" style={{ color: "black" }}>{state.job.company}</Typography>
                            <Typography variant="h4" style={{ color: "black" }}>{state.job.location}</Typography>
                        </div> */}
                    </div>
                    {/* <div>
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
                    </div> */}
                    <div className="jobDescriptionDetails">
                        <div className="jobDetailsWrap">
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">COMPANY</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.company}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">LOCATION</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.location}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">SALARY</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.salary}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">IMPORTANCE</Typography>
                                <Typography variant="h6" className="jobDetailText">{importance[state.job.importance]}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">STATUS</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.status}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">DATE</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.date.split(" ").splice(1, 3).join(' ')}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">FOLLOWED UP</Typography>
                                <Typography variant="h6" className="jobDetailText">No</Typography>
                            </div>
                            {edit ? <div style={{ display: "flex", justifyContent: "center", margin: "0 auto", width: "90%" }}>
                                <div className="jobEditButton" onClick={()=>setEdit(false)}>
                                    <Typography>CANCEL</Typography>
                                </div>
                                <div className="jobEditButton">
                                    <Typography>SUBMIT</Typography>
                                </div>
                            </div> : <div onClick={()=>setEdit(true)} className="jobDetailsButton">
                                    <Typography>EDIT</Typography>
                                </div>}
                        </div>
                        <div className="jobDescription">
                            <Typography style={{ color: "black", textAlign: "left" }}>{state.job.description}</Typography>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Job