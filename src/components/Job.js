import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getJobById } from "../state/actions"
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const Job = (props) => {

    const url = props.location.state.id
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [importance, setImportance] = useState({
        1: "just applying",
        2: "another application",
        3: "suitable job",
        4: "exciting job",
        5: "dream job"
    })

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
                    {/* <a href={state.job.link}>
                        <Typography variant="h6" style={{ color: "black" }}>{state.job.link}</Typography>
                    </a> */}
                    <Typography variant="h6" style={{ color: "black", textAlign: "left" }}>{state.job.description}</Typography>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>Salary</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>{state.job.salary}</Typography>
                    </div>
                    <div className="jobDetails">
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>Importance</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>{importance[state.job.importance]}</Typography>
                    </div>
                    <div className="jobDetails">
                    <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>Status</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>{state.job.status}</Typography>
                    </div>
                    <div className="jobDetails">
                    <Typography variant="h6" style={{ color: "black", textAlign:"left"}}>Date</Typography>
                        <Typography variant="h6" style={{ color: "black", textAlign:"left" }}>{state.job.date.split(" ").splice(1,3).join(' ')}</Typography>
                    </div>
                </>
            }
        </div>
    )
}

export default Job