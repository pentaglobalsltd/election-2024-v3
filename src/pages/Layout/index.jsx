import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';

import Dashboard from '../Dashboard/index';

import { selectMenu } from '../../actions/menu.js';

import { isUnique } from '../../utilities/uniqe.js';
import { layoutStruct, siderStruct, contentStruct } from './struct';

import { getElectionAreas } from '../../staticData/ElectionArea.jsx';
import { icons } from '../../staticData/iconMap.jsx';

import { defaultDivision } from '../../const/defaultDivision.js';
import './styles.scss';

const electionAreas = getElectionAreas();
const _divisions = [...electionAreas.map((area) => area.division)];
const divisions = _divisions.filter((item, index, array) =>
  isUnique(array.slice(0, index), item),
);

const { Sider, Content } = Layout;

const CustomLayout = () => {
  const dispatch = useDispatch();

  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const items = [
    ...[
      {
        name: 'সমগ্র বাংলাদেশ',
        code: defaultDivision.DEFAULT,
      },
      ...divisions,
    ].map((item) =>
      getItem(
        item.name,
        item.code,
        icons[item.code] ? (
          <img
            src={icons[item.code]}
            alt="menu icon"
            width={24}
            height={24}
            className="menu__icon"
          />
        ) : (
          <></>
        ),
      ),
    ),
  ];

  const handleClickOnMenuItem = (e) => {
    dispatch(
      selectMenu({
        selectedMenu: e.key,
      }),
    );
  };

  let torender = null;
  torender = <Dashboard />;

  return (
    <Layout {...layoutStruct}>
      <Sider {...siderStruct}>
        <Menu mode="inline" items={items} onClick={handleClickOnMenuItem} />
      </Sider>
      <Layout>
        <Content {...contentStruct}>{torender}</Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
