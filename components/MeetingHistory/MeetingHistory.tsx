import React, { useState } from 'react';
import { Button, Collapse, Space, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import {
  UploadOutlined,
  DownloadOutlined,
  DeleteOutlined,
  FilePdfOutlined,
  FileImageOutlined,
  MinusOutlined,
} from '@ant-design/icons';
import { MeetingProps } from 'types';

const { Panel } = Collapse;

interface IMeetingHistoryProps {
  data: Array<MeetingProps>;
}

const renderFileFormat = (format: Pick<MeetingProps, 'fileFormat'> & string) => {
  switch (format) {
    case 'pdf':
      return <FilePdfOutlined />;
    case 'image':
      return <FileImageOutlined />;
    case undefined:
      return <MinusOutlined />;
  }
};

const columns: ColumnsType<MeetingProps> = [
  {
    title: '상담 일자',
    dataIndex: 'date',
  },
  {
    title: '상담 시간',
    dataIndex: 'time',
  },
  {
    title: '상담명',
    dataIndex: 'title',
    width: '50%',
  },
  {
    title: '상담 레포트',
    dataIndex: 'fileFormat',
    render: (file) => renderFileFormat(file),
  },
  {
    title: '파일 크기',
    dataIndex: 'fileSize',
  },
];

const MeetingHistory = ({ data }: IMeetingHistoryProps) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Collapse defaultActiveKey={['1']} style={{ margin: '0 24px' }}>
      <Panel header="상담 기록 내역" key="1">
        <div>
          <div className="auto-layout-space-between" style={{ marginBottom: 16 }}>
            <span>
              상담 기록 수 &nbsp;<b>총 {selectedRowKeys.length}회</b>
            </span>

            <Space>
              <Button size="middle" icon={<UploadOutlined />}>
                올리기
              </Button>
              <Button size="middle" icon={<DownloadOutlined />}>
                내려받기
              </Button>
              <Button size="middle" icon={<DeleteOutlined />}>
                삭제
              </Button>
            </Space>
          </div>
          <Table
            size="small"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data.map((el, index) => ({ ...el, key: index }))}
            pagination={{ position: ['bottomCenter'], pageSize: 5 }}
          />
        </div>
      </Panel>
    </Collapse>
  );
};

export default MeetingHistory;
