import React from 'react';
import Image from 'next/image';
import { Layout } from 'antd';
import logoSrc from '/assets/images/header/logo.svg';

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header style={{ backgroundColor: '#FFFFFF' }}>
      <Image src={logoSrc} alt="SILVIA" width={94} height={24} />
    </Header>
  );
};

export default MyHeader;
