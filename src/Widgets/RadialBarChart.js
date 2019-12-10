import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import './Widgets.css';

const data = [
  {
    subject: 'China', A: 2, B: 110, fullMark: 150,
  },
  {
    subject: 'Albania', A: 1, B: 130, fullMark: 150,
  },
  {
    subject: 'Italy', A: 1, B: 130, fullMark: 150,
  },
  {
    subject: 'Russia', A: 1, B: 100, fullMark: 150,
  },
  {
    subject: 'Greece', A: 1, B: 90, fullMark: 150,
  },
  {
    subject: 'Morocco', A: 1, B: 85, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';


  render() {
    return (
        <div className="rbc3">
            <br></br>
            <br></br>
            <b>Répartition des clients dans le monde</b>
            
            <div className="rbc2">
     
           
      <RadarChart cx={200} cy={170} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
     </div>
      </div>
       
    );
  }
}
