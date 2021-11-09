
import { makeStyles } from '@material-ui/core/styles';
import { TimeSeries, avg, Index, TimeRange } from 'pondjs';
import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    BarChart,
    Resizable, 
    LineChart,
    AreaChart,
} from "react-timeseries-charts";
import { getSamples } from '../api/hivedb';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        border: "1px solid #ccc", 
        paddingTop: "0px", 
        paddingBottom: "0px",
    }
}));

export function ResultTimeChart(props) {    // user_id, hive_id, 
    const classes = useStyles();
    //new TimeRange(date.setFullYear( date.getFullYear() - 1 ) , new Date())
    const [timerange, setTimerange] = useState(new TimeRange(new Date('2020-01-03T08:00:00'), new Date('2020-01-03T09:00:00')));
    const [data, setData] = React.useState([]);
    const [activeDelay, setActiveDelay] = useState(false)
    const [activeQuery, setActiveQuery] = useState(false)
    const user_id = props.user_id;
    const hive_id = props.hive_id;
    //let series = {}

    useEffect( () => {
        console.log('Effect invoked', activeDelay);
        if (! activeDelay) {
        // do not access server until delay in progress
        setActiveQuery(true);
        getSamples(user_id, hive_id, timerange).then((retData) => {
            //updataData = false;
            setData(retData.data.data.items);
            setActiveQuery(false);
        }).catch(err => {
            console.log({location: "ResultTimeChart; getSamples return", error: err});
            setData(null);
            setActiveQuery(false);
        })
        }
      }, [user_id, hive_id, activeDelay]);

    if (! data || data.length === 0)
        return (<h2>No data</h2>);

    //console.log(JSON.stringify(data));

    /* const series = new TimeSeries({
        name: "Bio Unit statistics",
        columns: ["index", "temp_low", "temp_high", "heat_pwr"],
        points: data.map((rec) => [
            Index.getIndexString("1m", new Date(rec.sample_time)),
            rec.temp_low,
            rec.temp_high,
            rec.heat_pwr
        ])
    }); */
   
    /* if (! timerange)
        setTimerange(new TimeRange(new Date('01/01/2020'), new Date('02/01/2020')))
 */

    const series = new TimeSeries({
        name: "Bio Unit statistics",
        columns: ["time", "temp_low", "temp_high", "heat_pwr"],
        points: data.map((rec) => [
            new Date(rec.sample_time),
            rec.temp_low,
            rec.temp_high,
            rec.heat_pwr
        ])
    });
    
    /* let dailySeries = series.dailyRollup({
        aggregation: {success: {success: avg()}},
        toTimeEvents: false 
    }) */

    //const style = styler([
    //    { key: "success", color: "#A5C8E1"},
    //]);

    //console.log(JSON.stringify(series));

    //console.log(series.min("temp_high"), series.max("temp_high"));

    const handleTimeRangeChange = timerange => {
        setTimerange(timerange);
        if (! activeDelay) {
            console.log('Set Active delay true and start the timer');
            setActiveDelay(true);
            setTimeout(() => { setActiveDelay(false)}, 500)
        }
        //console.log(timerange);
    };

    return (
        <React.Fragment>
        { activeQuery && <LinearProgress/>}
        <Resizable className={classes.rootContainer}>
        {/* <Button disabled={activeQuery}/>    */}
        <ChartContainer timeRange={series ? timerange: null} 
                    title="Temperature statistics over the past month" 
                    //format="day" 
                    utc={false}
                    //padding ={0}
                    enablePanZoom={true}
                    onTimeRangeChanged={handleTimeRangeChange}
                    >
            <ChartRow height="130">
                <YAxis
                    id="temp_low"
                    label="rate %"
                    min={series.min("temp_low")}
                    max={series.max("temp_low")}
                    format=".2f"
                    width="70"
                    type="linear"
                />
                <Charts>
                    <LineChart
                        axis="temp_low"
                        //style={{success: {normal: {fill: "#e34d7d"}}}}
                        spacing={5}
                        columns={["temp_low"]}
                        series={series}
                        //radius={5.0}
                    />
                </Charts>
            </ChartRow>            
            <ChartRow height="130">
                <YAxis
                    id="temp_high"
                    label="rate %"
                    min={series.min("temp_high")}
                    max={series.max("temp_high")}
                    format=".2f"
                    width="70"
                    type="linear"
                />
                <Charts>
                    <LineChart
                        axis="temp_high"
                        //style={{success: {normal: {fill: "#e34d7d"}}}}
                        spacing={5}
                        columns={["temp_high"]}
                        series={series}
                        //radius={5.0}
                    />
                </Charts>
            </ChartRow>
            <ChartRow height="130">
                <YAxis
                    id="heat_power"
                    label="%"
                    min={series.min("heat_pwr")}
                    max={series.max("heat_pwr")}
                    format=".2f"
                    width="70"
                    type="linear"
                />
                <Charts>
                    <LineChart
                        axis="heat_power"
                        //style={{success: {normal: {fill: "#e34d7d"}}}}
                        spacing={5}
                        columns={["heat_pwr"]}
                        series={series}
                        //radius={5.0}
                    />
                    {/* <BarChart
                        axis="heat_power"
                        //style={{success: {normal: {fill: "#e34d7d"}}}}
                        spacing={5}
                        columns={["heat_pwr"]}
                        //style={upDownStyle}
                        series={series}
                        //radius={5.0}
                    /> */}
                </Charts>
            </ChartRow>
        </ChartContainer>
        </Resizable>
        </React.Fragment>
    );
}