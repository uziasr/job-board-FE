import React, { useState, useEffect } from 'react';
import axios from "axios"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import JobForm from "./JobForm"
import { useSelector, useDispatch } from "react-redux"
import { Loading } from 'react-loading-dot'



const Scraper = () => {

    const [jobSources, setJobSources] = useState(["indeed", "ziprecruiter", "dice", "monster"])
    const [jobSourceFocus, setJobSourceFocus] = useState("")
    const [link, setLink] = useState('')
    const [loading, setLoading] = useState(false)

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [jobForm, setJobForm] = useState({
        title: "",
        company: "",
        location: "",
        link: "",
        description: "",
        importance: 4,
        status: "applied",
        salary: 0
    })

    const scrapeLink = () => {
        setLoading(() => true)
        axios.post(`http://127.0.0.1:5000/scrape/${jobSourceFocus}`, { link: link })
            .then(res => {
                setJobForm(() => ({
                    title: "",
                    company: "",
                    location: "",
                    link: "",
                    description: "",
                    importance: 3,
                    status: "applied",
                    salary: 0
                }))
                setJobForm(() => { return { ...jobForm, ...res.data } })
                setLoading(() => false)
            })
            .catch(err => {
                setLoading(() => false)
            })

    }

    const styles = theme => ({
        multilineColor: {
            color: 'white'
        }
    });


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
        <div style={{margin:"0", top: "12%", position:"fixed"}}>
            <Typography variant="h2" style={{ color: "black", marginBottom: "32px" }}>Save Job</Typography>
            {loading ? <Loading background={"white"} /> : null}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {jobSources.map((job, index) => (
                    <Typography variant="h5" key={index} style={{ color: job === jobSourceFocus ? "green" : "black", marginBottom: "10px" }} >{job}</Typography>
                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignContent: "center", alignItems: "center" }}>
                <TextField
                    variant="outlined"
                    color="primary" inputProps={{ color: "white" }}
                    style={{ width: "450px", borderRadius: "10px", color: "white" }}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Have a Link?"
                />
                <Button variant="contained" color="primary" style={{ marginLeft: "15px", cursor: "pointer" }} disabled={!validLink()} onClick={() => scrapeLink()}>Get Details!</Button>
            </div>
            <JobForm jobForm={jobForm} setJobForm={setJobForm} setLink={setLink} />
        </div>
    );
};

export default Scraper;