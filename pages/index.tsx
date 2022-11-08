import React from 'react';
import { NextPage } from 'next';
import ProfileHeader from 'components/ProfileHeader';
import MeetingHistory from 'components/MeetingHistory';
import AverageTrainingData from 'components/AverageTrainingData';
import TrainingStatusGraph from 'components/TrainingStatusGraph';
import { MeetingProps, ProfileProps, CardProps, TotalDataProps } from 'types';

interface Props {
  profile: ProfileProps;
  meetings: Array<MeetingProps>;
  averageTraining: Array<CardProps>;
  totalData: Array<TotalDataProps>;
}

const DashBoard: NextPage<Props> = ({ profile, meetings, averageTraining, totalData }) => {
  return (
    <>
      <ProfileHeader data={profile} />
      <MeetingHistory data={meetings} />
      <AverageTrainingData data={averageTraining} />
      <TrainingStatusGraph data={totalData} />
    </>
  );
};

DashBoard.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api', { method: 'GET' });
  const json = await res.json();
  return {
    profile: json.profile,
    meetings: json.meetings,
    averageTraining: json.averageTrainingData,
    totalData: json.totalData,
  };
};

export default DashBoard;
