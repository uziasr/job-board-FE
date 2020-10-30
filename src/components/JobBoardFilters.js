import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux"
import { addFilters } from "../state/actions"
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';





const JobBoardFilters = ({ setOpenFilters }) => {

    const [filter, setFilter] = useState({
        status: {},
        importance: {},
        followed_up: {}
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
    console.log("this is filter",filter)

    return (
        <div className="jobBoardFilterRoot">
            <div className="filterRootWrap">
                <div className="checkBoxWrap">
                    <div className="jobStatusRootWrap">
                        <Typography variant="h6" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>Status</Typography>

                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>applied</Typography>
                            <Checkbox checked={filter.status.applied !== undefined} color="primary" name="applied" onClick={(e) => checkBoxHandler(e, "status")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>interviewing</Typography>
                            <Checkbox checked={filter.status.interviewing !== undefined} color="primary" name="interviewing" onClick={(e) => checkBoxHandler(e, "status")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>declined</Typography>
                            <Checkbox checked={filter.status["declined"] !== undefined} color="primary" name="followed up" onClick={(e) => checkBoxHandler(e, "status")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>offered</Typography>
                            <Checkbox checked={filter.status.offered !== undefined} color="primary" name="offered" onClick={(e) => checkBoxHandler(e, "status")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>rejected</Typography>
                            <Checkbox checked={filter.status.rejected !== undefined} color="primary" name="rejected" onClick={(e) => checkBoxHandler(e, "status")}></Checkbox>
                        </div>
                    </div>
                    <div className="jobStatusRootWrap">
                        <Typography variant="h6" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>Importance</Typography>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>just applying</Typography>
                            <Checkbox checked={filter.importance["just applying"] !== undefined} color="primary" name="just applying" onClick={(e) => checkBoxHandler(e, "importance")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>another application</Typography>
                            <Checkbox checked={filter.importance["another application"] !== undefined} color="primary" name="another application" onClick={(e) => checkBoxHandler(e, "importance")}></Checkbox>
                        </div><div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>suitable job</Typography>
                            <Checkbox checked={filter.importance["suitable job"] !== undefined} color="primary" name="suitable job" onClick={(e) => checkBoxHandler(e, "importance")}></Checkbox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>exciting job</Typography>
                            <Checkbox checked={filter.importance["exciting job"] !== undefined} color="primary" name="exciting job" onClick={(e) => checkBoxHandler(e, "importance")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>dream job</Typography>
                            <Checkbox checked={filter.importance["dream job"] !== undefined} color="primary" name="dream job" onClick={(e) => checkBoxHandler(e, "importance")}></Checkbox>
                        </div>
                    </div>
                    <div className="jobStatusRootWrap">
                        <Typography variant="h6" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>Followed Up</Typography>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>Yes</Typography>
                            <Checkbox checked={filter.followed_up["yes"] !== undefined } color="primary" name="yes" onClick={(e) => checkBoxHandler(e, "followed_up")}></Checkbox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography className="checkText" style={{ color: "black" }}>No</Typography>
                            <Checkbox checked={filter.followed_up["no"] !== undefined} color="primary" name="no" onClick={(e) => checkBoxHandler(e, "followed_up")}></Checkbox>
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