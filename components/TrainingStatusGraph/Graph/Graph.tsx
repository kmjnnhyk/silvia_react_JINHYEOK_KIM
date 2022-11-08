import ResponsiveVictoryChart from 'components/commons/ResponsiveVictoryChart';
import React from 'react';
import { TotalDataProps } from 'types';
import { VictoryAxis, VictoryBar, VictoryScatter } from 'victory';

interface IGraphProps {
  data: Array<TotalDataProps>;
}

const Graph = ({ data }: IGraphProps) => {
  return (
    <ResponsiveVictoryChart domainPadding={{ x: 60 }}>
      <VictoryBar
        data={data}
        x="date"
        y="runningTime"
        style={{
          data: { fill: '#788CFF' },
        }}
      />
      {/* <VictoryScatter data={data} /> */}
    </ResponsiveVictoryChart>
  );
};

export default Graph;
