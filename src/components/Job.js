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
        <>
            {state.loading ? <Typography variant="h1" style={{ color: "black" }}>loading</Typography>
                :
                <>
                    <Typography variant="h3" style={{ color: "black" }}>{state.job.title}</Typography>
                    <Typography variant="h4" style={{ color: "black" }}>{state.job.company}</Typography>
                    <Typography variant="h4" style={{ color: "black" }}>{state.job.location}</Typography>
                    <a href={state.job.link}>
                        <Typography variant="h6" style={{ color: "black" }}>{state.job.link}</Typography>
                    </a>
                    <Typography variant="h6" style={{ color: "black" }}>{state.job.description}</Typography>
                    <Typography variant="h6" style={{ color: "black" }}>{state.job.salary}</Typography>
                    <Typography variant="h6" style={{ color: "black" }}>{importance[state.job.importance]}</Typography>
                    <Typography variant="h6" style={{ color: "black" }}>{state.job.status}</Typography>
                    <Typography variant="h6" style={{ color: "black" }}>{state.job.date}</Typography>
                </>
            }
        </>
    )
}

export default Job