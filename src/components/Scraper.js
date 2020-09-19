import React, { useState, useEffect } from 'react';
import axios from "axios"


const Scraper = () => {

    const [jobSources, setJobSources] = useState(["indeed", "zip", "dice"])
    const [jobSourceFocus, setjobSourceFocus] = useState("indeed")

    const [link, setLink] = useState('')

    const scrapeLink = () => {
        axios.post(`http://127.0.0.1:5000/${jobSourceFocus}`, {link:link})
            .then(res => {
                console.log("res.data", res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const changeSource = () =>{

    }

    return (
        <div>
            <div style={{display:"flex", justifyContent: "space-between"}}>
                {jobSources.map((job, index)=>(
                    <p key={index} style={{cursor: "pointer", color: job===jobSourceFocus ? "green":"white"}} onClick={()=> setjobSourceFocus(job)}>{job}</p>
                ))}
            </div>
            <div style={{display:"flex", justifyContent: "space-between",}}>
                <input value={link} style={{width: "450px", height:"23px", borderRadius: "10px"}} onChange={(e)=>setLink(e.target.value)}></input>
                <button style={{marginLeft: "15px"}} disabled={link===""} onClick={()=>scrapeLink()}>Save Job!</button>
            </div>
        </div>
    );
};

export default Scraper;