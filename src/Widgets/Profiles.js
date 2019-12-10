import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import './Widgets.css';

const data = [
    {
        name: 'small', uv: 4000, nombredepersonnes: 17, amt: 2400,
    },
    {
        name: 'medium', uv: -3000, nombredepersonnes: 31, amt: 2210,
    },
    {
        name: 'large', uv: -2000, nombredepersonnes: 18, amt: 2290,
    },
];

export default class Pro extends PureComponent {

    render() {
        return (
            <div className="datachart">
                <b>Nombre des personnes par type de maison</b>
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
                <Bar dataKey="nombredepersonnes" fill="#8884d8" stackId="stack" />
               
            </BarChart>
                </div>
            </div>
        );
    }
}
