import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './ShapeBarChart.css';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
        name: 'Asie', uv: 4000, female: 2400, male: 2400,
    },
    {
        name: 'Europe', uv: 3000, female: 1398, male: 2210,
    },
    {
        name: 'Amérique de Nord', uv: 2000, female: 9800, male: 2290,
    },
    {
        name: 'Afrique', uv: 2780, female: 3908, male: 2000,
    },
    {
        name: 'Océanie', uv: 1890, female: 4800, male: 2181,
    },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const {
        fill, x, y, width, height,
    } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default class ShapeBChart extends PureComponent {

    render() {
        return (
            <div className="divShape">
                <b>Vues par continent pour les hommes</b>
                <div className="graphShape">
            <BarChart
                width={400}
                height={200}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="male" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))
                    }
                </Bar>
            </BarChart>
                </div>
            </div>
        );
    }
}
