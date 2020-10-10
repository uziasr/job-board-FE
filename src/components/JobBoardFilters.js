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





const JobBoardFilters = () => {

    return (
        <>
            <div className="filterRootWrap">
                <div className="checkBoxWrap">
                    <div className="jobStatusRootWrap">
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>applied</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>followed up</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div><div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>interviewing</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>offered</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div>
                        <div className="jobStatusWrap">
                            <Typography style={{ color: "black" }}>rejected</Typography>
                            <CheckBox color="primary" ></CheckBox>
                        </div>
                    </div>
                </div>
                <div className="checkBoxWrap">
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>just applying</Typography>
                        <CheckBox color="primary" ></CheckBox>
                    </div>
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>another application</Typography>
                        <CheckBox color="primary" ></CheckBox>
                    </div><div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>suitable application</Typography>
                        <CheckBox color="primary" ></CheckBox>
                    </div><div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>exciting job</Typography>
                        <CheckBox color="primary" ></CheckBox>
                    </div>
                    <div className="jobStatusWrap">
                        <Typography style={{ color: "black" }}>dream job</Typography>
                        <CheckBox color="primary" ></CheckBox>
                    </div>
                </div>
            </div>
            <Button>Apply</Button>
            <Button>Cancel</Button>
        </>
    );
};

export default JobBoardFilters;