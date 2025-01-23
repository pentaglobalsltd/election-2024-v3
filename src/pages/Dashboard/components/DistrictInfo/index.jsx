import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toBN } from 'react-en-bn';

import { Table, Typography, Drawer } from 'antd';

import { selectDistrict } from '../../../../actions/district.js';
import districtCounts from '../../../../staticData/districtInfo.json';
import './styles.scss';
import { selectConstituency } from '../../../../actions/constituency.js';
import ConstituencyInfo from '../ConstituencyInfo/index.jsx';
import { BarChart } from '../BarChart/index.jsx';

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

const DistrictInfo = () => {
  const dispatch = useDispatch();

  const _selectedDistrict = useSelector((state) => state.district);
  const { selectedDistrict } = _selectedDistrict || {};
  const { seats, viewBox } = selectedDistrict || {};
  const [selectedDistrictCount, setSelectedDistrictCount] = useState(null);

  const onClose = () => {
    dispatch(
      selectDistrict({
        selectedDistrict: null,
      }),
    );
  };

  const handleSelectedConstituency = (seat) => {
    dispatch(selectConstituency({ selectedConstituency: seat }));
  };

  useEffect(() => {
    if (selectedDistrict && selectedDistrict?.code) {
      const data = districtCounts.filter(
        (district) => district.zilla_code === selectedDistrict.code,
      );

      setSelectedDistrictCount(data);
    }
  }, [selectedDistrict]);

  return (
    <Drawer
      title={selectedDistrict ? selectedDistrict.name : ''}
      placement="right"
      closable={true}
      maskClosable={false}
      onClose={onClose}
      open={selectedDistrict}
      key="DIstrict"
      mask={false}
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
                  className={`svg__seat`}
                  onClick={() => handleSelectedConstituency(seat)}
                >
                  {seat.component}
                </g>
              );
            })
          ) : (
            <></>
          )}
        </svg>
        {selectedDistrictCount?.[0] ? (
          <BarChart data={selectedDistrictCount?.[0] || []} />
        ) : null}
        <Result data={selectedDistrictCount || []} />
      </>
      <ConstituencyInfo />
    </Drawer>
  );
};
export default DistrictInfo;
