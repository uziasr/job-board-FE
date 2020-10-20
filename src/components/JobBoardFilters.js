import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux"
import { addFilters } from "../state/actions"
import CheckBox from '@material-ui/core/CheckBox';
import Typography from '@material-ui/core/Typography';





const JobBoardFilters = ({ setOpenFilters }) => {

    const [filter, setFilter] = useState({
        status: {},
        importance: {}
    })

    const dispatch = useDispatch()

    const state = useSelector(state => state)

    useEffect(() => {
        setFilter(state.jobFilters)
    }, [])


    const filterHandler = () => {
        dispatch(addFilters(filter))
        setOpenFilters(false)
    }

    const checkBoxHandler = (e, name) => {
        if (filter[name][e.target.name]) {
            var currentFilter = { ...filter }
            delete currentFilter[name][e.target.name]
            setFilter(currentFilter)
        } else {
            setFilter({
                ...filter,
                [name]: {
                    ...filter[name],
                    [e.target.name]: true
                }
            })
        }
    }

    return (
        <div className="jobBoardFilterRoot">
            <div className="filterRootWrap">
                <div className="checkBoxWrap">
                    <div className="jobStatusRootWrap">
                        <Typography variant="h5" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>status</Typography>

                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>applied</Typography>
                            <CheckBox checked={filter.status.applied !== undefined} color="primary" name="applied" onClick={(e) => checkBoxHandler(e, "status")}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>followed up</Typography>
                            <CheckBox checked={filter.status["followed up"] !== undefined} color="primary" name="followed up" onClick={(e) => checkBoxHandler(e, "status")}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>interviewing</Typography>
                            <CheckBox checked={filter.status.interviewing !== undefined} color="primary" name="interviewing" onClick={(e) => checkBoxHandler(e, "status")}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>offered</Typography>
                            <CheckBox checked={filter.status.offered !== undefined} color="primary" name="offered" onClick={(e) => checkBoxHandler(e, "status")}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>rejected</Typography>
                            <CheckBox checked={filter.status.rejected !== undefined} color="primary" name="rejected" onClick={(e) => checkBoxHandler(e, "status")}></CheckBox>
                        </div>
                    </div>
                    <div className="jobStatusRootWrap">
                        <Typography variant="h5" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>importance</Typography>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>just applying</Typography>
                            <CheckBox checked={filter.importance["just applying"] !== undefined} color="primary" name="just applying" onClick={(e) => checkBoxHandler(e, "importance")}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>another application</Typography>
                            <CheckBox checked={filter.importance["another application"] !== undefined} color="primary" name="another application" onClick={(e) => checkBoxHandler(e, "importance")}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>suitable job</Typography>
                            <CheckBox checked={filter.importance["suitable job"] !== undefined} color="primary" name="suitable job" onClick={(e) => checkBoxHandler(e, "importance")}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>exciting job</Typography>
                            <CheckBox checked={filter.importance["exciting job"] !== undefined} color="primary" name="exciting job" onClick={(e) => checkBoxHandler(e, "importance")}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>dream job</Typography>
                            <CheckBox checked={filter.importance["dream job"] !== undefined} color="primary" name="dream job" onClick={(e) => checkBoxHandler(e, "importance")}></CheckBox>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: " 2% auto" }}>
                <Button onClick={() => setOpenFilters(false)} variant="contained">Cancel</Button>
                <Button onClick={() => filterHandler()} variant="contained">Apply</Button>
            </div>
        </div>
    );
};

export default JobBoardFilters;