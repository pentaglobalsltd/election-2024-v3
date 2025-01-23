import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toBN } from 'react-en-bn';

import { Table, Typography, Drawer } from 'antd';

import constituencyCounts from '../../../../staticData/constituencyInfo.json';
import './styles.scss';
import { selectConstituency } from '../../../../actions/constituency.js';

const { Text } = Typography;

const columns = [
  {
    title: 'পুরুষ ভোট',
    dataIndex: 'male_count',
    key: 'male_count',
    render: (value) => {
      return <Text>{toBN(value)}</Text>;
    },
  },
  {
    title: 'মহিলা ভোট',
    dataIndex: 'female_count',
    key: 'female_count',
    render: (value) => <Text>{toBN(value)}</Text>,
  },
  {
    title: 'হিজড়া ভোট',
    dataIndex: 'hijra_count',
    key: 'hijra_count',
    render: (value) => <Text>{toBN(value)}</Text>,
  },
];

const Result = ({ data }) => {
  return (
    <Table
      size="small"
      bordered
      dataSource={data}
      columns={columns}
      pagination={false}
      scroll={{
        x: 250,
        y: 150,
      }}
    />
  );
};

const ConstituencyInfo = () => {
  const dispatch = useDispatch();

  const _selectedConstituency = useSelector((state) => state.constituency);
  const { selectedConstituency } = _selectedConstituency || {};

  const [selectedConstituencyCount, setSelectedConstituencyCount] =
    useState(null);

  const onClose = () => {
    dispatch(
      selectConstituency({
        selectedConstituency: null,
      }),
    );
  };

  useEffect(() => {
    if (selectedConstituency && selectedConstituency?.code) {
      const data = constituencyCounts.filter(
        (constituency) =>
          constituency.settings_code === selectedConstituency.code,
      );

      setSelectedConstituencyCount(data);
    }
  }, [selectedConstituency]);

  return (
    <Drawer
      title={selectedConstituency ? selectedConstituency.name : ''}
      placement="right"
      closable={false}
      onClose={onClose}
      open={selectedConstituency}
      key="Constituency"
      width={300}
    >
      <>
        {selectedConstituency ? (
          <svg
            version="1.1"
            x="0px"
            y="0px"
            viewBox={'0 0 300 400'}
            className="svg__district"
          >
            <g
              id={`${selectedConstituency.name}`}
              key={`${selectedConstituency.name}`}
              className={`svg__seat `}
            >
              {selectedConstituency.component}
            </g>
          </svg>
        ) : null}
        <Result data={selectedConstituencyCount || []} />
      </>
    </Drawer>
  );
};
export default ConstituencyInfo;
