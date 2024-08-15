import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toBN } from 'react-en-bn';

import { Table, Typography, Drawer } from 'antd';

import { selectDistrict } from '../../../../actions/district.js';
import useDistrictVoteCount from '../../../../hooks/useDistrictVoteCount.js';

import './styles.scss';

const { Text } = Typography;

const columns = [
  {
    title: 'মার্কা',
    dataIndex: 'symbol_bn',
    key: 'symbol_bn',
    render: (value) => <Text>{toBN(value)}</Text>,
  },
  {
    title: 'ভোট সংখ্যা',
    dataIndex: 'count',
    key: 'count',
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

const DistrictInfo = () => {
  const dispatch = useDispatch();

  const { districtVoteCount, handleDistrictVoteCount } = useDistrictVoteCount();

  const _selectedDistrict = useSelector((state) => state.district);
  const { selectedDistrict } = _selectedDistrict || {};
  const { seats, viewBox } = selectedDistrict || {};

  const onClose = () => {
    handleDistrictVoteCount(null);
    dispatch(
      selectDistrict({
        selectedDistrict: null,
      }),
    );
  };

  return (
    <Drawer
      title={selectedDistrict ? selectedDistrict.name : ''}
      placement="right"
      closable={false}
      onClose={onClose}
      open={selectedDistrict}
      key="DIstrict"
    >
      <>
        <svg
          version="1.1"
          x="0px"
          y="0px"
          viewBox={viewBox ? `${viewBox}` : '0 0 300 400'}
          className="svg__district"
        >
          {seats ? (
            seats.map((seat) => {
              return (
                <g
                  id={`${seat.name}`}
                  key={`${seat.name}`}
                  className={`svg__seat `}
                >
                  {seat.component}
                </g>
              );
            })
          ) : (
            <></>
          )}
        </svg>
        <Result data={districtVoteCount || []} />
      </>
    </Drawer>
  );
};
export default DistrictInfo;
