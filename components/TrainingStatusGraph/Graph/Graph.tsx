import CustomPoint from 'components/commons/CustomPoint';
import ResponsiveVictoryChart from 'components/commons/ResponsiveVictoryChart';
import React from 'react';
import { TotalDataProps } from 'types';
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryLine, VictoryScatter } from 'victory';

interface IGraphProps {
  data: Array<TotalDataProps>;
}

const Graph = ({ data }: IGraphProps) => {
  const ARBITRATION_FIGURE = [
    { x: 0, y: 67 },
    { x: data.length + 1, y: 67, label: '중재점' },
  ];
  return (
    <ResponsiveVictoryChart domainPadding={{ x: 60 }}>
      <VictoryAxis
        dependentAxis
        labelComponent={<VictoryLabel title="asfa" />}
        style={{
          tickLabels: { fontSize: 14, fontWeight: 100, padding: 12 },
          grid: { stroke: 'lightgrey', strokeDasharray: '1' },
        }}
      />
      <VictoryAxis
        style={{
          tickLabels: { fontSize: 14, fontWeight: 100, padding: 12 },
        }}
      />
      <VictoryLine
        padding={{ right: -80 }}
        data={ARBITRATION_FIGURE}
        style={{
          data: { strokeWidth: 1 },
        }}
        labelComponent={<VictoryLabel dx={0} dy={0} textAnchor="end" />}
        labels={({ datum }) => datum.label}
      />
      <VictoryBar
        data={data}
        x="date"
        y="runningTime"
        style={{
          data: { fill: '#D9D9D9' },
        }}
      />
      <VictoryLine
        data={data}
        x="date"
        y="runningTime"
        style={{
          data: { stroke: '#788CFF', strokeWidth: 4 },
        }}
      />
      <VictoryScatter dataComponent={<CustomPoint />} data={data} x="date" y="runningTime" />
    </ResponsiveVictoryChart>
  );
};

export default Graph;
