import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toBN } from 'react-en-bn';

import { ConfigProvider, notification, Table, Typography } from 'antd';

import { selectMenu } from '../../../../actions/menu';
import divisionVoteCounts from '../../../../staticData/divisionInfo.json';

import { getElectionAreas } from '../../../../staticData/ElectionArea';
import { isUnique } from '../../../../utilities/uniqe.js';

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

const DivisionInfo = () => {
  const dispatch = useDispatch();

  const _menu = useSelector((state) => state.menu);
  const { selectedMenu } = _menu;

  const electionAreas = getElectionAreas();
  const _divisions = [...electionAreas.map((area) => area.division)];
  const divisions = _divisions.filter((item, index, array) =>
    isUnique(array.slice(0, index), item),
  );

  const onClose = () => {
    dispatch(
      selectMenu({
        selectedMenu: -1,
      }),
    );
  };

  const [api, contextHolder] = notification.useNotification({ stack: false });

  const openNotification = (selectedDivision) => {
    if (!selectedDivision) return;
    const selectedDivisionCount = divisionVoteCounts?.filter(
      (item) => Number(item.code) === selectedDivision.code,
    );

    api.open({
      message: selectedDivision ? selectedDivision.name : '',
      description: <Result data={selectedDivisionCount || []} />,
      duration: null,
      onClose: onClose,
      role: 'status',
      placement: 'bottomLeft',
    });
  };

  const closeNotification = () => {
    api.destroy();
  };

  useEffect(() => {
    const selectedDivisions = divisions.filter(
      (item) => Number(item.code) === Number(selectedMenu),
    );

    const selectedDivision =
      selectedDivisions && selectedDivisions.length
        ? selectedDivisions[0]
        : null;

    closeNotification();
    if (selectedMenu && divisionVoteCounts)
      setTimeout(() => openNotification(selectedDivision), 250);
  }, [divisionVoteCounts, selectedMenu]);

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Notification: {
              zIndexPopup: 1050,
            },
          },
        }}
      >
        {contextHolder}
      </ConfigProvider>
    </>
  );
};
export default DivisionInfo;
