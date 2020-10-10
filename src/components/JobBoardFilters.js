import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import CheckBox from '@material-ui/core/CheckBox';
import Typography from '@material-ui/core/Typography';





const JobBoardFilters = ({ setOpenFilters }) => {

    const [filter, setFilter] = useState({
        status: {},
        importance: {}
    })

    const filterHandler = () => {
        setOpenFilters(false)
    }

    const checkBoxHandler = (e) => { 
        console.log(e.target.name)
    }

    return (
        <div className="jobBoardFilterRoot">
            <div className="filterRootWrap">
                <div className="checkBoxWrap">
                    <div className="jobStatusRootWrap">
                        <Typography variant="h5" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>status</Typography>

                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>applied</Typography>
                            <CheckBox color="primary" name="applied" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>followed up</Typography>
                            <CheckBox color="primary" name="followed up" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>interviewing</Typography>
                            <CheckBox color="primary" name="interviewing" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>offered</Typography>
                            <CheckBox color="primary" name="offered" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>rejected</Typography>
                            <CheckBox color="primary" name="rejected" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                    </div>
                    <div className="jobStatusRootWrap">
                        <Typography variant="h5" style={{ color: "black", textAlign: "center", width: "100%", margin: "6% auto 2% auto" }}>importance</Typography>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>just applying</Typography>
                            <CheckBox color="primary" name="just applying" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>another application</Typography>
                            <CheckBox color="primary" name="another application" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>suitable application</Typography>
                            <CheckBox color="primary" name="suitable application" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>exciting job</Typography>
                            <CheckBox color="primary" name="exciting job" onClick={(e)=>checkBoxHandler(e)}></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>dream job</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "50%", margin: " 2% auto" }}>
                <Button onClick={() => setOpenFilters(false)} variant="contained">Cancel</Button>
                <Button variant="contained">Apply</Button>
            </div>
        </div>
    );
};

export default JobBoardFilters;