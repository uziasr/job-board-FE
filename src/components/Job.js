import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getJobById, updateJob } from "../state/actions"
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from "react-router-dom"
import JobEdit from "./JobEdit"
import Confetti from 'react-dom-confetti';

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

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


    const [status, setStatus] = useState(["applied", "interviewing", "rejected", "declined", "hired"])
    const [jobDetails, setJobDetails] = useState({})
    const [edit, setEdit] = useState(false)
    const [followedUpPopUp, setFollowedUpPopUp] = useState(true)
    const [celebrate, setCelebrate] = useState(false)


    const updateStatus = (jobDetails) => {
        dispatch(updateJob(url, jobDetails))
        setEdit(false)
    }

    const editHandler = () => {
        setJobDetails(() => {
            let jobObj = { ...state.job }
            delete jobObj.date
            return jobObj
        })
        setEdit(true)
        setFollowedUpPopUp(false)
    }

    useEffect(() => {
        dispatch(getJobById(url))
    }, [])

    console.log(jobDetails)

    return (
        <div className="jobRoot">
            <div style={{
                position: "absolute",
                left: "50%",
                top: "50%"
            }}><Confetti active={celebrate} config={config} /></div>
            {state.loading ? <Typography variant="h1" style={{ color: "black" }}>loading</Typography>
                :
                <>
                    <div className="jobTitleWrap">
                        <a className="jobLink" href={state.job.link} >
                            <Typography className="jobLinkText" variant="h3">{state.job.title}</Typography>
                        </a>
                    </div>
                    <div className="jobDescriptionDetails">
                        <div className="jobDetailsWrap">
                            {edit ?
                                <>
                                    <div className="jobDetails">
                                        <Typography className="jobDetailTitle">TITLE</Typography>
                                        <TextField
                                            name="title"
                                            variant="outlined"
                                            color="primary"
                                            value={jobDetails.title}
                                            className="jobInput"
                                            onChange={e => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })}
                                        ></TextField>
                                    </div>
                                    <div className="jobDetails">
                                        <Typography className="jobDetailTitle">LINK</Typography>
                                        <TextField
                                            name="link"
                                            variant="outlined"
                                            color="primary"
                                            value={jobDetails.link}
                                            className="jobInput"
                                            onChange={e => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })}
                                        ></TextField>
                                    </div>
                                </>
                                : null}
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">COMPANY</Typography>
                                {edit ? <TextField
                                    name="company"
                                    variant="outlined"
                                    color="primary"
                                    value={jobDetails.company}
                                    className="jobInput"
                                    onChange={e => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })}
                                ></TextField> : <Typography variant="h6" className="jobDetailText">{state.job.company}</Typography>}
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">LOCATION</Typography>
                                {edit ? <TextField
                                    name="location"
                                    variant="outlined"
                                    color="primary"
                                    value={jobDetails.location}
                                    className="jobInput"
                                    onChange={e => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })}
                                ></TextField> : <Typography variant="h6" className="jobDetailText">{state.job.location}</Typography>}
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">SALARY</Typography>
                                {edit ? <TextField
                                    name="salary"
                                    variant="outlined"
                                    color="primary"
                                    value={jobDetails.salary}
                                    className="jobInput"
                                    onChange={e => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })}
                                ></TextField> : <Typography variant="h6" className="jobDetailText">{state.job.salary}</Typography>}
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">IMPORTANCE</Typography>
                                {edit ?
                                    <FormControl style={{ width: "100%" }}>
                                        <Select
                                            value={jobDetails.importance}
                                            label="Importance"
                                            className="jobInput"
                                            name="importance"
                                            onChange={(e) => setJobDetails({ ...jobDetails, importance: Number(e.target.value) })}
                                            style={{ width: "100%" }}
                                        >
                                            {Object.keys(importance).map(i => (
                                                <MenuItem key={i} value={i}>{importance[i]}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    : <Typography variant="h6" className="jobDetailText">{importance[state.job.importance]}</Typography>}
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">STATUS</Typography>
                                {edit ?
                                    <FormControl style={{ width: "100%" }}>
                                        <Select
                                            value={jobDetails.status}
                                            label="Status"
                                            className="jobInput"
                                            name="status"
                                            onChange={(e) => setJobDetails({ ...jobDetails, status: e.target.value })}
                                            style={{ width: "100%" }}
                                        >
                                            {status.map(i => (
                                                <MenuItem key={i} value={i}>{i}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    : <Typography variant="h6" className="jobDetailText">{state.job.status}</Typography>}
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">DATE APPLIED</Typography>
                                <Typography variant="h6" className="jobDetailText">{state.job.date.split(" ").splice(1, 3).join(' ')}</Typography>
                            </div>
                            <div className="jobDetails">
                                <Typography className="jobDetailTitle">FOLLOWED UP</Typography>
                                {edit ?
                                    <div style={{ display: "flex" }}>
                                        <div onClick={() => setJobDetails({ ...jobDetails, followed_up: true })} className="jobEditButton" style={{ background: jobDetails.followed_up === true ? "#3CB371" : "white", border: jobDetails.followed_up === true ? "none" : "1px solid #3CB371", color: jobDetails.followed_up === true ? "white" : "#3CB371" }}>
                                            <Typography>Yes</Typography>
                                        </div>
                                        <div onClick={() => setJobDetails({ ...jobDetails, followed_up: false })} className="jobEditButton" style={{ background: jobDetails.followed_up === false ? "#3CB371" : "white", border: jobDetails.followed_up === false ? "none" : "1px solid #3CB371", color: jobDetails.followed_up === false ? "white" : "#3CB371" }}>
                                            <Typography>No</Typography>
                                        </div>
                                    </div>
                                    : <Typography variant="h6" className="jobDetailText">{state.job.followed_up ? "Yes" : "No"}</Typography>}
                            </div>
                            {edit ? <div style={{ display: "flex", width: "90%" }}>
                                <div className="jobEditButton" onClick={() => setEdit(false)}>
                                    <Typography>CANCEL</Typography>
                                </div>
                                <div onClick={() => updateStatus(jobDetails)} className="jobEditButton">
                                    <Typography>SUBMIT</Typography>
                                </div>
                            </div> : <div onClick={() => editHandler()} className="jobDetailsButton">
                                    <Typography>EDIT</Typography>
                                </div>}
                        </div>
                        {edit ?
                            <div className="jobDetails" style={{ justifyContent: "flex-start" }}>
                                <Typography className="jobDetailTitle" style={{ marginBottom: "1%" }}>DESCRIPTION</Typography>
                                <TextField variant="outlined" multiline
                                    rows={20} style={{ width: "100%", height: "60%", marginBottom: "15px" }} name="description" value={jobDetails.description} onChange={(e) => setJobDetails({ ...jobDetails, [e.target.name]: e.target.value })} />
                            </div>
                            : <div className="jobDescription">
                                <Typography className="jobDetailTitle" style={{ marginBottom: "1%" }}>DESCRIPTION</Typography>
                                <Typography style={{ color: "black", textAlign: "left" }}>{state.job.description}</Typography>
                            </div>
                        }
                    </div>
                    {followedUpPopUp && state.job.followed_up === false ? <JobEdit setFollowedUpPopUp={setFollowedUpPopUp}
                        updateStatus={updateStatus}
                        setCelebrate={setCelebrate}
                    /> : null}
                </>
            }
        </div>
    )
}

export default Job