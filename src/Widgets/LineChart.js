import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, RadialBarChart,
} from 'recharts';
import './Widgets.css';

const data = [
    {
        name: '20/08/2019', uv: 4000, temperature: 30, amt: 2400,
    },
    {
        name: '19/01/2019', uv: 3000, temperature: 4, amt: 2210,
    },
    {
        name: '24/09/2019', uv: 2000, temperature: 6, amt: 2290,
    },
    {
        name: '29/10/2019', uv: 2780, temperature: 20, amt: 2000,
    },
    {
        name: '17/08/2019', uv: 1890, temperature: 59, amt: 2181,
    },
    {
        name: '17/07/2019', uv: 2390, temperature: 58, amt: 2500,
    },
    {
        name: '26/11/2019', uv: 3490, temperature: 6, amt: 2100,
    },
    {
        name: '05/03/2019', uv: 3490, temperature: 50, amt: 2100,
    },
    {
        name: '12/05/2019', uv: 3490, temperature: 80, amt: 2100,
    },
    {
        name: '27/12/2019', uv: 3490, temperature: 41, amt: 2100,
    },
    {
        name: '22/10/2019', uv: 3490, temperature: 80, amt: 2100,
    },
    {
        name: '13/11/2019', uv: 3490, temperature: 10, amt: 2100,
    },
    {
        name: '20/01/2019', uv: 3490, temperature: 32, amt: 2100,
    },
    {
        name: '24/04/2019', uv: 3490, temperature: 40, amt: 2100,
    },
    {
        name: '17/09/2019', uv: 3490, temperature: 93, amt: 2100,
    },
    {
        name: '25/03/2019', uv: 3490, temperature: 8, amt: 2100,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <div className="divLine">
                    <b>Evolution de la temperature</b>
                <div className="graph">
            <LineChart
                width={370}
                height={250}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </div>
            </div>
        );
    }
}
