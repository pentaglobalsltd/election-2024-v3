import React, { useMemo } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { toBN } from 'react-en-bn';
import { Table, Typography } from 'antd';

import TempleIcon from './../../../../images/temple.png';
import NewsIcon from './../../../../images/temples.png';
import TemplesIcon from './../../../../images/news.png';
import ShadowIcon from './../../../../images/shadow.png';

const { Text } = Typography;

const columns = [
  {
    title: 'পুরুষ ভোটার',
    dataIndex: 'male_count',
    key: 'male_count',
    render: (value) => {
      return <Text>{toBN(value)}</Text>;
    },
  },
  {
    title: 'মহিলা ভোটার',
    dataIndex: 'female_count',
    key: 'female_count',
    render: (value) => <Text>{toBN(value)}</Text>,
  },
  {
    title: 'হিজড়া ভোটার',
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
    />
  );
};

const CustomMarker = ({ data, isActive, isNews }) => {
  const customIcon = useMemo(
    () =>
      new L.Icon({
        iconUrl: isNews ? NewsIcon : isActive ? TemplesIcon : TempleIcon,
        shadowUrl: ShadowIcon,
        iconSize: [41, 41],
        iconAnchor: [12, 56],
        popupAnchor: [1, -41],
        shadowSize: [81, 41],
        shadowAnchor: [31, 31],
      }),
    [isActive],
  );

  return data?.latitude && data?.longitude ? (
    <Marker
      position={[data.latitude, data.longitude]}
      title={data.pavillion_name || '...'}
      icon={customIcon}
    >
      {isNews ? (
        <Tooltip
          direction="top"
          offset={[0, -40]}
          opacity={1}
          permanent={false}
        >
          <Text strong>{data.center_name}</Text>
          <Result data={[data]} />
        </Tooltip>
      ) : (
        <></>
      )}
    </Marker>
  ) : (
    <></>
  );
};

export default React.memo(CustomMarker);
