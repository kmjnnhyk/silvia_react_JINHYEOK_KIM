import { Space } from 'antd';
import Circle from 'components/commons/Circle';
import CustomBar from 'components/commons/CustomBar';
import CustomPoint from 'components/commons/CustomPoint';
import ResponsiveVictoryChart from 'components/commons/ResponsiveVictoryChart';
import { countReaching } from 'hooks/utils';
import React, { useMemo } from 'react';
import { TotalDataProps } from 'types';
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryLine, VictoryScatter } from 'victory';

interface IGraphProps {
  data: Array<TotalDataProps>;
}

export const ARBITRATION_FIGURE = 67;

const Graph = ({ data }: IGraphProps) => {
  const count = useMemo(() => countReaching(data), [data]);

  return (
    <Space>
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
          data={[
            { x: 0, y: ARBITRATION_FIGURE },
            { x: data.length + 1, y: ARBITRATION_FIGURE, label: '중재점' },
          ]}
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
          barWidth={30}
          dataComponent={<CustomBar />}
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
      <div
        className="auto-layout"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '80px',
          border: '6px solid #757575',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <p>중재점 도달 횟수</p>
        <h2>{count}회</h2>
      </div>
    </Space>
  );
};

export default Graph;
