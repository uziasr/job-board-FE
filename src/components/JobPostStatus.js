import React from 'react';
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



const JobPostStatus = ({ open, handleClose, clearForm }) => {

    const postAnotherHandler = () => {
        handleClose(false)
        clearForm()
    }

    const { jobId, jobPostedSuccess, jobPostLoading } = useSelector(state => state)

    const Success = () => (
        <>
            <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon icon={faCheck} style={{ color: "#3CB371", fontSize: "128px", width: "320px" }}></FontAwesomeIcon>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link style={{ textDecoration: "none" }}
                    to={{
                        pathname: `/job/${jobId}`,
                        state: { id: jobId }
                    }}
                >
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Go To Job
                    </Button>
                </Link>
                <Button onClick={postAnotherHandler} color="primary">
                    Post Another
                </Button>
            </DialogActions>
        </>
    )

    const Failure = () => (
        <>
            <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description" style={{ display: "flex", justifyContent: "center" }}>
                    <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "#B22222", fontSize: "128px", width: "320px" }}></FontAwesomeIcon>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </>
    )

    return (

        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {jobPostLoading ? <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle> : jobPostedSuccess ? <Success /> : jobPostedSuccess === false ? <Failure /> : null}
            </Dialog>
        </div>
    );
};

export default JobPostStatus;