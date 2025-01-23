import React, { useMemo } from 'react';
import { Marker } from 'react-leaflet';
import L from 'leaflet';

import TempleIcon from './../../../../images/temple.png';
import NewsIcon from './../../../../images/temples.png';
import TemplesIcon from './../../../../images/news.png';
import ShadowIcon from './../../../../images/shadow.png';

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

  return data?.lat && data?.lng ? (
    <Marker
      position={[data.lat, data.lng]}
      title={data.pavillion_name || '...'}
      icon={customIcon}
    ></Marker>
  ) : (
    <></>
  );
};

export default React.memo(CustomMarker);
