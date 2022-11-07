import React from 'react';
import backBtnSrc from 'assets/images/left_arrow_box.svg';
import editBtnSrc from 'assets/images/edit_box.svg';
import profileImgSrc from '/assets/images/header/profile_image.jpeg';
import { Avatar, Descriptions, PageHeader, Space } from 'antd';
import NextImage from 'components/commons/NextImage';

interface IProfileHeaderProps {
  data: ProfileProps;
}

const ProfileHeader = ({ data }: IProfileHeaderProps) => {
  const { nickname, contact, isMale, birthOfDate, birthOfMonth, birthOfYear, age } = data;

  return (
    <div style={{ padding: '24px' }}>
      <PageHeader
        style={{ padding: '0', marginBottom: '20px' }}
        title="내담자 대시보드"
        onBack={() => null}
        backIcon={<NextImage src={backBtnSrc} alt="back" />}
      />
      <Space direction="horizontal">
        <Avatar size={100} src={<NextImage src={profileImgSrc} alt={'profile'} />} />
        <Descriptions
          title={
            <Space align="center">
              <h2 style={{ margin: '0' }}>{nickname}</h2>
              <NextImage src={editBtnSrc} alt="edit" />
            </Space>
          }
          column={6}
        >
          <Descriptions.Item label="나이">{age}</Descriptions.Item>
          <Descriptions.Item label="전화번호">{contact}</Descriptions.Item>
          <Descriptions.Item label="성별">{isMale ? '남성' : '여성'}</Descriptions.Item>
          <Descriptions.Item label="생년월일">
            {birthOfYear + '.' + birthOfMonth + '.' + birthOfDate}
          </Descriptions.Item>
        </Descriptions>
      </Space>
    </div>
  );
};

export default ProfileHeader;
