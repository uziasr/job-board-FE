import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme, Bar } from 'victory';
import { useSelector, useDispatch } from "react-redux"
import { getStats } from "../state/actions"
// import * as V from 'victory';

const JobAnalytics = () => {

    const stats = useSelector(state => state.stats)
    const dispatch = useDispatch()
    const [appsByDate, setAppsByDate] = useState([])
    const [jobImportanceBar, setJobImportanceBar] = useState([])
    const [jobStatusBar, setJobStatusBar] = useState([])

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
            setJobStatusBar(() => {
                const masterArr = []
                Object.keys(stats.status).forEach(i => {
                    masterArr.push({ x: i, y: stats.status[i] })
                })
                return masterArr
            })

        }
    }, [stats])


    return (
        Object.keys(stats).length ? <div style={{ width: "60%" }}>
            <div className="averageWrap">
                <Typography style={{ color: "black" }} variant="h4">Average of {stats.average.avg} applications since {stats.average.date.split(" ")[0]}</Typography>
            </div>
            <div style={{ width: "100%" }}>
                <Typography variant="h5" style={{ color: "black" }}>Applications Over Time</Typography>
                <VictoryChart
                    width={1000}
                    domainPadding={{ x: 40, y: 40 }}
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
                        // interpolation="natural"
                        data={appsByDate}
                    />
                </VictoryChart>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <VictoryChart domainPadding={{ x: 40, y: 40 }}
                    >
                        <VictoryBar
                            style={{ data: { fill: "#3CB371" }, }}
                            data={jobImportanceBar}
                            dataComponent={
                                <Bar
                                    tabIndex={({ index }) => index + 2}
                                    ariaLabel={({ datum }) => `x: ${datum.x}`}

                                />
                            }
                        />
                    </VictoryChart>
                </div>
                <div style={{ width: "100%" }}>
                    <VictoryChart domainPadding={{ x: 40, y: 40 }}>
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
                    </VictoryChart>
                </div>
            </div>
        </div> : null
    );
};

export default JobAnalytics;