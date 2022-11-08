import CountCircle from 'components/commons/Circle';
import CustomBar from 'components/commons/CustomBar';
import CustomPoint from 'components/commons/CustomPoint';
import ResponsiveVictoryChart from 'components/commons/ResponsiveVictoryChart';
import { countReaching } from 'hooks/utils';
import React, { useMemo } from 'react';
import { TotalDataProps } from 'types';
import { VictoryAxis, VictoryBar, VictoryLabel, VictoryLine, VictoryScatter } from 'victory';
import LabelWrapper from './LabelWrapper';

interface IGraphProps {
  data: Array<TotalDataProps>;
}

export const ARBITRATION_FIGURE = 67;

const Graph = ({ data }: IGraphProps) => {
  const count = useMemo(() => countReaching(data), [data]);

  return (
    <div className="graph-tab-area-grid">
      <ResponsiveVictoryChart domainPadding={{ x: 60 }}>
        <LabelWrapper text={'중재점'} transform={'translate(920, 130)'} />
        <LabelWrapper text={'시간(분)'} transform={'translate(0, 10)'} />
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
            { x: data.length + 1, y: ARBITRATION_FIGURE },
          ]}
          style={{
            data: { strokeWidth: 1 },
          }}
          // labelComponent={<VictoryLabel verticalAnchor="middle" textAnchor="end" />}
          // labels={({ datum }) => datum.label}
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
      <CountCircle>
        <p>중재점 도달 횟수</p>
        <h2>{count}회</h2>
      </CountCircle>
    </div>
  );
};

export default Graph;
