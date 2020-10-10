import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getJobs } from "../state/actions"
import { useDispatch, useSelector } from "react-redux"
import JobCard from "./JobCard"
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/CheckBox';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import JobBoardFilters from "./JobBoardFilters"




const JobBoard = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [statusFilter, setStatusFilter] = useState({
        applied: { status: true, data: [] }, interviewing: { status: true, data: [] }, declined: { status: true, data: [] }, offered: { status: true, data: [] }
    })
    const [query, setQuery] = useState('')
    const [filteredJobs, setFilteredJobs] = useState([]) // filtered by status filter
    const [filteredData, setFilteredData] = useState([]) // filtered by status filtered and search bar

    const [openFilters, setOpenFilters] = useState(false)

    useEffect(() => {
        if (!state.jobs.length) {
            dispatch(getJobs())
        }
        setStatusFilter(() => {
            const filtered = { applied: { status: true, data: [] }, interviewing: { status: true, data: [] }, declined: { status: true, data: [] }, offered: { status: true, data: [] } }
            state.jobs.forEach(job => {
                switch (job.status) {
                    case "applied": {
                        filtered.applied.data.push(job)
                        break
                    }
                    case "interviewing": {
                        filtered.interviewing.data.push(job)
                        break
                    }
                    case "declined": {
                        filtered.declined.data.push(job)
                        break
                    }
                    case "offered": {
                        filtered.offered.data.push(job)
                        break
                    }
                    default: {
                        return statusFilter
                    }
                }
            })
            return filtered
        })
        setFilteredJobs(state.jobs)
        setFilteredData(state.jobs)
    }, [state.jobs])

    const statusFilterHandler = (status) => {
        setStatusFilter(() => {
            const newStatusFilter = { ...statusFilter, [status]: { ...statusFilter[status], status: !statusFilter[status].status } }
            setFilteredJobs(() => {
                let allJobs = []
                Object.keys(newStatusFilter).forEach(i => {
                    if (newStatusFilter[i].status) {
                        allJobs = [...allJobs, ...newStatusFilter[i].data]
                    }
                })
                return allJobs
            })
            return newStatusFilter
        })


    }

    const searchHandler = (e) => {
        e.preventDefault()
        setFilteredData(() => filteredJobs.filter(job => {
            return (RegExp(new RegExp(query.toLowerCase())).test(job.title.toLowerCase()))
        })
        )
    }



    return (
        <div className="jobBoardRoot">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center", width: "500px" }}>
                <form onSubmit={(e) => searchHandler(e)} style={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center", width: "100%", margin: "1% auto" }}>
                    <TextField value={query} onChange={(e) => setQuery(e.target.value)} label="Job Title" style={{ width: "80%", fontSize: "32px", padding: "3%" }}></TextField>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "50%" }}>
                        <Button type="submit" style={{ margin: "1% auto" }} variant="contained" color="primary">Search</Button>
                        <Button className="filterIcon" onClick={()=>setOpenFilters(true)}>
                            <FontAwesomeIcon icon={faFilter} style={{ color: "#3f51b5", fontSize: "28px" }} />
                        </Button>
                    </div>
                </form>
                {openFilters ? <JobBoardFilters setOpenFilters={setOpenFilters} /> : null}
                <JobCard jobs={filteredData} />
            </div>
        </div>
    );
};

export default JobBoard;
