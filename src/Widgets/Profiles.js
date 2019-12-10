import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import './Profiles.css';

const data = [
    {
        name: 'chanson 1', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'chanson 2', uv: -3000, pv: 1398, amt: 2210,
    },
    {
        name: 'chanson 3', uv: -2000, pv: -9800, amt: 2290,
    },
    {
        name: 'chanson 4', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'chanson 5', uv: -1890, pv: 4800, amt: 2181,
    },
    {
        name: 'chanson 6', uv: 2390, pv: -3800, amt: 2500,
    },
    {
        name: 'chanson 7', uv: 3490, pv: 4300, amt: 2100,
    },
];

export default class Pro extends PureComponent {

    render() {
        return (
            <div className="datachart">
                <b>Taux de satisfaction des fans</b>
                <div className="datacharttwo">
            <BarChart
                width={300}
                height={300}
                data={data}
                stackOffset="sign"
                margin={{
                    top: 5, right: 30, left: 0, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#8884d8" stackId="stack" />
                <Bar dataKey="uv" fill="#82ca9d" stackId="stack" />
            </BarChart>
                </div>
            </div>
        );
    }
}
