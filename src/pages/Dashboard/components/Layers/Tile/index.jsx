import React from 'react';
import { TileLayer } from 'react-leaflet';
import { useContext } from 'react';

import { ThemeContext } from '../../../../../context/ThemeContext';

const Tile = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <TileLayer
      url={
        !isDarkMode
          ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png	'
      }
      attribution=""
      maxNativeZoom="19"
      minZoom="0"
      maxZoom="22"
    />
  );
};

export default Tile;
