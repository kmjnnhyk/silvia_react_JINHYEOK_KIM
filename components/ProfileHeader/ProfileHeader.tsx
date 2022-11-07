import React from 'react';
import backBtnSrc from 'assets/images/left_arrow_box.svg';
import editBtnSrc from 'assets/images/edit_box.svg';
import profileImgSrc from '/assets/images/header/profile_image.jpeg';
import { Container, ResetButton } from './ProfileHeader.style';
import { Avatar, Descriptions, PageHeader } from 'antd';
import NextImage from 'components/commons/NextImage';

const ProfileHeader = () => {
  return (
    <Container>
      <PageHeader
        title="내담자 대시보드"
        onBack={() => null}
        backIcon={<NextImage src={backBtnSrc} alt="back" />}
      />

      <Avatar size={100} src={<NextImage src={profileImgSrc} alt={'profile'} />} />

      <div style={{ display: 'flex' }}>
        <h2 style={{ marginRight: '24px' }}>닉네임</h2>
        <ResetButton>
          <NextImage src={editBtnSrc} alt="edit" />
        </ResetButton>
      </div>
      <Descriptions title="User Info">
        <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
      </Descriptions>
    </Container>
  );
};

export default ProfileHeader;
