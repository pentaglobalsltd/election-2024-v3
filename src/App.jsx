import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import { ThemeContext } from './context/ThemeContext';

import CustomLayout from './pages/Layout';

import store from './store';

import './global.scss';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <Provider store={store}>
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            token: {
              colorPrimary: '#5a5ab5',
              colorTextSecondary: '#812990',
              colorError: '#ff8399',
              colorWarning: '#f6941c',
              fontFamily: '"Roboto Slab", serif',
              isDarkMode,
            },
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<CustomLayout />} />
            </Routes>
          </BrowserRouter>
        </ConfigProvider>
      </Provider>
    </ThemeContext.Provider>
  );
}

export default App;
