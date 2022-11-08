import React from 'react';
import { NextPage } from 'next';
import ProfileHeader from 'components/ProfileHeader';
import MeetingHistory from 'components/MeetingHistory';
import AverageTrainingData from 'components/AverageTrainingData';
import TrainingStatusGraph from 'components/TrainingStatusGraph';
import { MeetingProps, ProfileProps } from 'types';

interface Props {
  profile: ProfileProps;
  meetings: Array<MeetingProps>;
}

const DashBoard: NextPage<Props> = ({ profile, meetings, averageTraining }) => {
  return (
    <>
      <ProfileHeader data={profile} />
      <MeetingHistory data={meetings} />
      <AverageTrainingData data={averageTraining} />
      <TrainingStatusGraph />
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
  };
};

export default DashBoard;
