import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toBN } from 'react-en-bn';

import { notification, Table, Typography } from 'antd';

import { selectMenu } from '../../../../actions/menu';
import useDivisionVoteCount from '../../../../hooks/useDivisionVoteCount.js';

import { getElectionAreas } from '../../../../staticData/ElectionArea';
import { isUnique } from '../../../../utilities/uniqe.js';

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

const DivisionInfo = () => {
  const dispatch = useDispatch();

  const { divisionVoteCount, handleDivisionVoteCount } = useDivisionVoteCount();

  const _menu = useSelector((state) => state.menu);
  const { selectedMenu } = _menu;

  const electionAreas = getElectionAreas();
  const _divisions = [...electionAreas.map((area) => area.division)];
  const divisions = _divisions.filter((item, index, array) =>
    isUnique(array.slice(0, index), item),
  );

  const onClose = () => {
    handleDivisionVoteCount(null);
    dispatch(
      selectMenu({
        selectedMenu: -1,
      }),
    );
  };

  const [api, contextHolder] = notification.useNotification({ stack: false });

  const openNotification = (selectedDivision) => {
    api.open({
      message: selectedDivision ? selectedDivision.name : '',
      description: <Result data={divisionVoteCount || []} />,
      duration: null,
      onClose: onClose,
      role: 'status',
      placement: 'bottomLeft',
    });
  };

  const closeNotification = () => {
    handleDivisionVoteCount(null);
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
    if (selectedMenu && divisionVoteCount)
      setTimeout(() => openNotification(selectedDivision), 250);
  }, [divisionVoteCount, selectedMenu]);

  return <>{contextHolder}</>;
};
export default DivisionInfo;
