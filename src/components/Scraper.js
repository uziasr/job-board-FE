import React, { useState, useEffect } from 'react';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import JobForm from "./JobForm"



const Scraper = () => {

    const [jobSources, setJobSources] = useState(["indeed", "ziprecruiter", "dice", "monster"])
    const [jobSourceFocus, setJobSourceFocus] = useState("")

    const [link, setLink] = useState('')

    const scrapeLink = () => {
        axios.post(`http://127.0.0.1:5000/scrape/${jobSourceFocus}`, { link: link })
            .then(res => {
                console.log("res.data", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const styles = theme => ({
        multilineColor: {
            color: 'white'
        }
    });

    const changeSource = () => {

    }

    const validLink = () => {
        const filteredInput = jobSources.filter(job => link.search(job) !== -1)
        if (filteredInput.length > 0) {
            if (jobSourceFocus !== filteredInput[0]) {
                setJobSourceFocus(() => filteredInput[0])
            }
            return true
        } else {
            if (jobSourceFocus !== "") {
                setJobSourceFocus(() => "")
            }
            return false
        }
    }

    return (
        <div>
            <Typography variant="h2" style={{ color: "black", marginBottom: "32px" }}>Add a Job</Typography>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {jobSources.map((job, index) => (
                    <Typography variant="h5" key={index} style={{ color: job === jobSourceFocus ? "green" : "black", marginBottom: "10px" }} >{job}</Typography>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                <TextField
                    variant="outlined"
                    placeHolder="Paste Link"
                    color="primary" inputProps={{ color: "white" }}
                    style={{ width: "450px", borderRadius: "10px", color: "white" }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                <Button variant="contained" color="primary" style={{ marginLeft: "15px", cursor: "pointer" }} disabled={!validLink()} onClick={() => scrapeLink()}>Save Job!</Button>
            </div>
            <JobForm />
        </div>
    );
};

export default Scraper;