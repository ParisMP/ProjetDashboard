import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import './Widgets.css';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    {
        name: 'bedroom', uv: 4000, nombre: 2, male: 2400,
    },
    {
        name: 'entrance', uv: 3000, nombre: 4, male: 2210,
    },
    {
        name: 'bathroom', uv: 2000, nombre: 9, male: 2290,
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

export default class ShapeBChartW extends PureComponent {

    render() {
        return (
            <div className="divShapeW">
                <b>Nombre de types de chambres</b>
                <div className="graphShapeW">
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
                        <Bar dataKey="nombre" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
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
