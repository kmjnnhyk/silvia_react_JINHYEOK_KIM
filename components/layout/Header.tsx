import React from 'react';
import Image from 'next/image';
import { Avatar, Badge, Button, Layout } from 'antd';
import { MessageOutlined, BellOutlined } from '@ant-design/icons';
import NextImage from 'components/commons/NextImage';
import logoSrc from '/assets/images/header/logo.svg';
import profileImgSrc from '/assets/images/header/profile_image.jpeg';

const { Header } = Layout;

const MyHeader = () => {
  return (
    <>
      <Header
        className="auto-layout-space-between"
        style={{
          padding: '0 24px',
          backgroundColor: '#FFFFFF',
          boxShadow: 'inset 0px -1px 0px #F0F0F0',
        }}
      >
        <Image src={logoSrc} alt="SILVIA" width={94} height={24} />
        <div style={{ gap: '16px' }} className="auto-layout-space-between">
          <Button
            type="primary"
            icon={<MessageOutlined />}
            size="middle"
            style={{ backgroundColor: 'var(--color-geek-blue-600)', border: 'none' }}
          >
            상담 대기실 입장
          </Button>
          <Badge count={'N'} size={'small'} color={'#4D61FF'}>
            <BellOutlined style={{ fontSize: '28px' }} />
          </Badge>

          <Avatar size={32} src={<NextImage src={profileImgSrc} alt={'profile'} />} />
        </div>
      </Header>
    </>
  );
};

export default MyHeader;
