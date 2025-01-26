import React from 'react';
import { MapContainer, ZoomControl, ScaleControl } from 'react-leaflet';

import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { deviceDetecrByWidth } from '../../../../utilities/deviceWidth';

import './styles.scss';

const mapStyle = {
  minHeight: 'calc(100vh - 32px)',
  position: 'relative',
};

const MapWrapper = ({ children }) => {
  const windowWidth = useWindowDimensions().width;
  const _screenWidth = deviceDetecrByWidth(windowWidth);
  const screennWidth =
    _screenWidth === 'SmMobile' || _screenWidth === 'LgMobile'
      ? 'small'
      : _screenWidth === 'Tab' || _screenWidth === 'SmLaptop'
        ? 'mid'
        : 'large';

  return (
    <MapContainer
      center={[24, 90.399452]}
      zoom={screennWidth === 'small' ? 6 : screennWidth === 'mid' ? 7 : 7}
      style={mapStyle}
      maxZoom={13}
      zoomControl={false}
    >
      <ZoomControl position={'bottomleft'} />
      {children}
      <ScaleControl imperial={false} />
    </MapContainer>
  );
};

export default MapWrapper;
