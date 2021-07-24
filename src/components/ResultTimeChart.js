
import { makeStyles } from '@material-ui/core/styles';
import { TimeSeries, avg, Index } from 'pondjs';
import React from 'react';
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

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        border: "1px solid #ccc", 
        paddingTop: "0px", 
        paddingBottom: "0px",
    }
}));

export function ResultTimeChart(props) {    
    const classes = useStyles();
    const data = props.data;

    if (! data || data.length === 0)
        return (<h2>No data</h2>);

//console.log(JSON.stringify(props.data));

    const series = new TimeSeries({
        name: "Bio Unit statistics",
        columns: ["index", "temp_low", "temp_high", "heat_pwr"],
        points: props.data.map((rec) => [
            Index.getIndexString("1h", new Date(rec.sample_time)),
            rec.temp_low,
            rec.temp_high,
            rec.heat_pwr
        ])
    });
   
/*
    let series = new TimeSeries({
        name: "Bio Unit statistics",
        columns: ["time", "success"],
        points: data.map((rec) => [
            new Date(rec.sample_time),
            Number(rec.temp_low)
        ])
    });
*/    
    let dailySeries = series.dailyRollup({
        aggregation: {success: {success: avg()}},
        toTimeEvents: false 
    })

    //const style = styler([
    //    { key: "success", color: "#A5C8E1"},
    //]);

    //console.log(JSON.stringify(series));

    console.log(series.min("temp_high"), series.max("temp_high"));

    return (
        <Resizable className={classes.rootContainer}>
        <ChartContainer timeRange={series ? series.range(): null} 
                    title="Temperature statistics over the past month" 
                    //format="day" 
                    utc={false}
                    //padding ={0}
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
                    <BarChart
                        axis="heat_power"
                        //style={{success: {normal: {fill: "#e34d7d"}}}}
                        spacing={5}
                        columns={["heat_pwr"]}
                        //style={upDownStyle}
                        series={series}
                        //radius={5.0}
                    />
                </Charts>
            </ChartRow>
        </ChartContainer>
        </Resizable>
    );
}