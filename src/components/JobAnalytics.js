import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import { useSelector, useDispatch } from "react-redux"
import { getStats } from "../state/actions"
// import * as V from 'victory';

const JobAnalytics = () => {

    const stats = useSelector(state => state.stats)
    const dispatch = useDispatch()
    const [appsByDate, setAppsByDate] = useState([])

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
        }
    }, [stats])


    return (
        Object.keys(stats).length ? <div>
            <div className="averageWrap">
                <Typography style={{color:"black"}} variant="h3">Average of {stats.average.avg} applications since {stats.average.date.split(" ")[0]}</Typography>
            </div>
            <div style={{ width: "100%" }}>
                <Typography variant="h4" style={{ color: "black" }}>Applications Over Time</Typography>
                <VictoryChart
                    width={1000}
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
                        }}
                        // labels={({ datum }) => datum.x.toString().split(" ").splice(1,3).join(' ')}
                        theme={VictoryTheme.material}
                        // interpolation="natural"
                        data={appsByDate}
                    />
                </VictoryChart>
            </div>
        </div> : null
    );
};

export default JobAnalytics;