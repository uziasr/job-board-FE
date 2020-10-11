import React from 'react';
import Typography from '@material-ui/core/Typography';
import { VictoryBar, VictoryLine, VictoryChart } from 'victory';
// import * as V from 'victory';

const JobAnalytics = () => {
    return (
        <div>

            <div>
                <Typography variant="h4" style={{color:"black"}}>Applications Over Time</Typography>
                <VictoryChart
                    width={1000}
                >
                    <VictoryLine
                        data={[
                            
                                {x: new Date("2020-09-28"), y: 1},
                                {x: new Date("2020-09-29"), y: 3},
                                {x: new Date("2020-10-02"), y: 1},
                                {x: new Date("2020-10-08"), y: 30},
                                {x: new Date("2020-10-09"), y: 2}
                            
                        ]}
                    />
                </VictoryChart>
            </div>
        </div>
    );
};

export default JobAnalytics;