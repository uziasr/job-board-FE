import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { getJobs } from "../state/actions"
import { useDispatch, useSelector } from "react-redux"
import JobCard from "./JobCard"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import JobBoardFilters from "./JobBoardFilters"
import { Loading } from 'react-loading-dot'



const JobBoard = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [query, setQuery] = useState('')
    const [filteredJobs, setFilteredJobs] = useState([]) // filtered by status filter
    const [filteredData, setFilteredData] = useState([]) // filtered by status filtered and search bar

    const [openFilters, setOpenFilters] = useState(false)

    useEffect(() => {
        if (!state.initialJobsLoad) {
            dispatch(getJobs())
        }
        setFilteredJobs(state.jobs)
        setFilteredData(state.jobs)
    }, [state.jobs])

    const searchHandler = (e) => {
        e.preventDefault()
        setFilteredData(() => filteredJobs.filter(job => {
            return RegExp(new RegExp(query.toLowerCase())).test(job.title.toLowerCase()) || RegExp(new RegExp(query.toLowerCase())).test(job.company.toLowerCase()) || RegExp(new RegExp(query.toLowerCase())).test(job.location.toLowerCase())
        })
        )
    }



    return (
        <div className="jobBoardRoot">
            {state.loading ? <Loading background={"#3f51b5"} /> :
                <>
                    <div className="jobBoardSearchAndCard">
                        <Typography variant="h4" style={{ color: "black", margin: ".25% auto 2% auto" }}>You have applied to {state.jobs.length} jobs so far!</Typography>
                        <form className="jobBoardSearch" onSubmit={(e) => searchHandler(e)}>
                            <TextField className="jobSearchInput" value={query} onChange={(e) => setQuery(e.target.value)} label="Job Title, Company, or Location"></TextField>
                            <div className="jobBoardFilter">
                                <Button type="submit" style={{ margin: "1% auto" }} variant="contained" color="primary">Search</Button>
                                <Button className="filterIcon" onClick={() => setOpenFilters(!openFilters)}>
                                    <FontAwesomeIcon icon={faFilter} style={{ color: "#3f51b5", fontSize: "28px" }} />
                                </Button>
                            </div>
                        </form>
                        {openFilters ? <JobBoardFilters setOpenFilters={setOpenFilters} /> : null}
                        {state.jobs.length && state.initialJobsLoad ? <JobCard jobs={filteredData} /> : <Typography variant="h2" style={{ color: "black", marginTop: "5%" }}>There are no jobs</Typography>}
                    </div>
                </>
            }
        </div>
    );
};

export default JobBoard;
