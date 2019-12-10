import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Pie, RadialBarChart,
} from 'recharts';
import '../Widgets.css';

const data = [
    {
        name: '01/01/2019', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: '01/02/2019', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: '01/03/2019', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: '01/04/2019', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: '01/05/2019', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: '01/06/2019', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '01/07/2019', uv: 3490, pv: 4300, amt: 2100,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <div className="divLine">
                    <b>Evolution du nombre d'écoute</b>
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
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            </div>
            </div>
        );
    }
}
