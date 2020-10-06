import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getJobs } from "../state/actions"
import { useDispatch, useSelector } from "react-redux"
import JobCard from "./JobCard"
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/CheckBox';
import Button from '@material-ui/core/Button';



const JobBoard = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [jobs, setJobs] = useState({
        applied: [],
        interviewing: [],
        declined: [],
        hired: []

    })
    const [statusFilter, setStatusFilter] = useState({
        applied: { status: true, data: [] }, interviewing: { status: true, data: [] }, declined: { status: true, data: [] }, offered: { status: true, data: [] }
    })
    const [query, setQuery] = useState('')
    const [filteredJobs, setFilteredJobs] = useState([]) // filtered by status filter
    const [filteredData, setFilteredData] = useState([]) // filtered by status filtered and search bar


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

    console.log("hello", filteredJobs)


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

    const searchHandler = () => {
        setFilteredData(() => filteredJobs.filter(job => {
            return (RegExp(new RegExp(query.toLowerCase())).test(job.title.toLowerCase()))
        })
        )
    }



        return (
            <div className="jobBoardRoot">
                <div className="jobStatusRootWrap">
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>Applied ({statusFilter.applied.data.length})</Typography>
                        <CheckBox checked={statusFilter.applied.status} onChange={() => statusFilterHandler("applied")} color="primary" ></CheckBox>
                    </div>
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>Interviewing ({statusFilter.interviewing.data.length})</Typography>
                        <CheckBox checked={statusFilter.interviewing.status} onChange={() => statusFilterHandler("interviewing")} color="primary" ></CheckBox>

                    </div>
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>Denied ({statusFilter.declined.data.length})</Typography>
                        <CheckBox checked={statusFilter.declined.status} onChange={() => statusFilterHandler("declined")} color="primary" ></CheckBox>
                    </div>
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>Offered ({statusFilter.offered.data.length})</Typography>
                        <CheckBox checked={statusFilter.offered.status} onChange={() => statusFilterHandler("offered")} color="primary" ></CheckBox>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center", width: "500px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                        <TextField value={query} onChange={(e) => setQuery(e.target.value)} label="Job Title" style={{ width: "100%", margin: "1% auto", fontSize: "32px", padding: "3%" }}></TextField>
                        <Button onClick={() => searchHandler()} style={{ margin: "1% auto" }} variant="contained" color="primary">Search</Button>
                    </div>
                    <JobCard jobs={filteredData} />
                </div>
            </div>
        );
    };

    export default JobBoard;
