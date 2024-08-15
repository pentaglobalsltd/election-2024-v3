import React from 'react';
import { useContext } from 'react';

import { FloatButton } from 'antd';
import { MoonOutlined, BulbOutlined } from '@ant-design/icons';

import { ThemeContext } from '../../context/ThemeContext';

export const ThemeSwitch = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <FloatButton
      icon={isDarkMode ? <BulbOutlined /> : <MoonOutlined />}
      onClick={() => setIsDarkMode((prev) => !prev)}
    />
  );
};
