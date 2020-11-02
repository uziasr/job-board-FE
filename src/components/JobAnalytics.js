import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme, VictoryPie, Bar, VictoryTooltip, VictoryStack } from 'victory';
import { useSelector, useDispatch } from "react-redux"
import { getStats } from "../state/actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'


const JobAnalytics = () => {

    const stats = useSelector(state => state.stats)
    const dispatch = useDispatch()
    const [appsByDate, setAppsByDate] = useState([])
    const [jobImportanceBar, setJobImportanceBar] = useState([])
    const [jobStatusBar, setJobStatusBar] = useState([])
    const [jobFollowedImportanceBar, setJobFollowedImportanceBar] = useState([])
    const [jobFollowedStatusBar, setJobFollowedStatusBar] = useState([])
    const [jobLinkPie, setJobLinkPie] = useState([])

    const importanceHash = {
        1: "just applying",
        2: "another application",
        3: "suitable job",
        4: "exciting job",
        5: "dream job"
    }

    const statusHash = {
        "applied": 1,
        "interviewing": 2,
        "hired": 3,
        "declined": 4,
        "rejected": 5
    }

    var colorArray = ['#FF6633', '#FFB399', 'navy', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    useEffect(() => {
        if (Object.keys(stats).length == 0) {
            dispatch(getStats())
        } else {
            setAppsByDate(() => {
                const masterArr = []
                Object.keys(stats.date).forEach(date => {
                    masterArr.push({ x: date, y: stats.date[date] })
                })
                return masterArr
            })
            setJobImportanceBar(() => {
                const masterArr = []
                // { x: 1, y: 1, label: `${importance_hash[1]}` },
                Object.keys(stats.importance).forEach(i => {
                    masterArr.push({ x: i, y: stats.importance[i], label: [importanceHash[i].split(" ")[0], importanceHash[i].split(" ")[1]] })
                })
                return masterArr
            })
            setJobFollowedImportanceBar(() => {
                const masterArr = []
                Object.keys(stats.importance_followed).forEach(i => {
                    masterArr.push({ x: i, y: stats.importance_followed[i] })
                })
                return masterArr
            })
            setJobStatusBar(() => {
                const masterArr = []
                Object.keys(stats.status).forEach(i => {
                    masterArr.push({ x: i, y: stats.status[i] })
                })
                return masterArr
            })
            setJobFollowedStatusBar(() => {
                const masterArr = []
                Object.keys(stats.status_followed).forEach(i => {
                    masterArr.push({ x: i, y: stats.status_followed[i] })
                })
                return masterArr
            })
            setJobLinkPie(() => {
                const masterArr = []
                Object.keys(stats.links).forEach((i, index) => {
                    masterArr.push({ x: stats.links[i], y: stats.links[i], })
                })
                return masterArr
            })

        }
    }, [stats])

    console.log(jobImportanceBar, jobFollowedImportanceBar)


    return (
        Object.keys(stats).length ? <div style={{ width: "70%", marginTop: "2%" }}>
            <div className="averageWrap">
                <Typography style={{ color: "black" }} variant="h5">You have applied to {stats.all_jobs} jobs and followed up {stats.followed_up_count} times</Typography>
                <Typography style={{ color: "black" }} variant="h5">Averaging at {stats.average.avg} applications since {stats.average.date.split(" ")[0]}{stats.follow_rate? `, with a follow up rate of ${Math.round(stats.follow_rate * 100)}%` : ""}</Typography>
            </div>
            <div style={{ width: "100%" }}>
                {/* <Typography variant="h5" style={{ color: "black" }}>Applications Over Time</Typography>
                <div style={{ display: "flex", width: "30%", justifyContent: "space-between", margin: "1% auto 0 auto" }}>
                    <Typography variant="h6" style={{ color: "black", fontWeight: "bold", background: "#3CB371", padding: "10px 15px", borderRadius: "10px" }}>Actual</Typography>
                    <Typography variant="h6" style={{ color: "black", fontWeight: "bold", background: "dodgerblue", padding: "10px 15px", borderRadius: "10px" }}>Average</Typography>
                </div> */}
                <VictoryChart
                    width={1000}
                    domainPadding={{ x: 60, y: 60 }}
                >
                    <VictoryLine
                        strokeWidth={200}
                        style={{
                            label: {
                                fontSize: 20
                            },
                            data: {
                                stroke: "#3CB371",
                                strokeWidth: ({ data }) => data.length
                            },
                            parent: { border: "1px solid #ccc" }
                        }}
                        // labels={({ datum }) => datum.x.toString().split(" ").splice(1,3).join(' ')}
                        theme={VictoryTheme.material}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        interpolation="natural"
                        data={appsByDate}
                    />
                    <VictoryLine
                        strokeWidth={200}
                        style={{
                            label: {
                                fontSize: 20
                            },
                            data: {
                                stroke: "dodgerblue",
                                strokeWidth: ({ data }) => data.length
                            },
                            parent: { border: "1px solid #ccc" }
                        }}
                        // labels={({ datum }) => datum.x.toString().split(" ").splice(1,3).join(' ')}
                        theme={VictoryTheme.material}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        interpolation="natural"
                        data={appsByDate.map(i => (
                            { x: i.x, y: stats.average.avg }
                        ))}
                    />
                </VictoryChart>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <VictoryChart domainPadding={{ x: 40, y: 40 }}
                    >
                        <VictoryStack>
                            <VictoryBar
                                style={{ data: { fill: "dodgerblue" }, }}
                                data={jobFollowedImportanceBar}
                                // labelComponent={<VictoryTooltip/>}
                                dataComponent={
                                    <Bar
                                        tabIndex={({ index }) => index + 2}
                                        ariaLabel={({ datum }) => `x: ${datum.x}`}

                                    />
                                }

                            />
                            <VictoryBar
                                style={{ data: { fill: "#3CB371" }, }}
                                data={jobImportanceBar}
                                // labelComponent={<VictoryTooltip/>}
                                dataComponent={
                                    <Bar
                                        tabIndex={({ index }) => index + 2}
                                        ariaLabel={({ datum }) => `x: ${datum.x}`}

                                    />
                                }

                            />
                        </VictoryStack>
                    </VictoryChart>
                </div>
                <div style={{ width: "100%" }}>
                    <VictoryChart domainPadding={{ x: 40, y: 40 }}>
                        <VictoryStack>
                            <VictoryBar
                                style={{ data: { fill: "dodgerblue" } }}
                                data={jobFollowedStatusBar}
                                dataComponent={
                                    <Bar
                                        tabIndex={({ index }) => index + 2}
                                        ariaLabel={({ datum }) => `x: ${datum.x}`}
                                    />
                                }
                            />
                            <VictoryBar
                                style={{ data: { fill: "#3CB371" } }}
                                data={jobStatusBar}
                                dataComponent={
                                    <Bar
                                        tabIndex={({ index }) => index + 2}
                                        ariaLabel={({ datum }) => `x: ${datum.x}`}
                                    />
                                }
                            />
                        </VictoryStack>
                    </VictoryChart>
                </div>
            </div>
            <div className="rootPieWrap">
                <Typography variant="h5" style={{ color: "black", marginTop: "2%", textAlign: "left" }}>Application Sources</Typography>
                <div className="pieWrap">
                    <div style={{ width: "50%" }}>
                        <VictoryPie data={jobLinkPie}
                            colorScale={colorArray}
                        />
                    </div>
                    <div style={{ width: "30%" }}>
                        {Object.keys(stats.links).map((link, index) => (
                            <div key={index} className="pieColor" style={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "space-between", }}>
                                <FontAwesomeIcon icon={faSquare} style={{ color: colorArray[index], fontSize: "28px" }} />
                                <Typography className="pieLabelText" style={{ color: "black", fontWeight: "500", fontSize: "20px" }}>{`${link}`}</Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div> : null
    );
};

export default JobAnalytics;