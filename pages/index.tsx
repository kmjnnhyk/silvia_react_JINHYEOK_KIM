import React from 'react';
import { NextPage } from 'next';
import ProfileHeader from 'components/ProfileHeader';
import MeetingHistory from 'components/MeetingHistory';
import AverageTrainingData from 'components/AverageTrainingData';
import TrainingStatusGraph from 'components/TrainingStatusGraph';

const DashBoard: NextPage = () => (
  <>
    <ProfileHeader />
    <MeetingHistory />
    <AverageTrainingData />
    <TrainingStatusGraph />
  </>
);

export default DashBoard;
