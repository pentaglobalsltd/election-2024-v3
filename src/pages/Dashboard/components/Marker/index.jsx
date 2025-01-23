import React from 'react';
import { TileLayer as LeafletTileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import CustomMarker from './CustomMarker';

import centers from '../../../../staticData/centers.json';

export const MarkerLayer = () => {
  return (
    <>
      <MarkerClusterGroup chunkedLoading spiderfyDistanceMultiplier={2}>
        {centers
          .filter((center) => center.settings_code === 111)
          .map((data, index) => {
            return data?.latitude && data?.longitude ? (
              <CustomMarker
                key={index}
                data={{
                  lat: data.latitude,
                  lng: data.longitude,
                  pavillion_name: data.center_name,
                }}
                isActive={false}
                isNews={true}
              />
            ) : null;
          })}
      </MarkerClusterGroup>
    </>
  );
};

// TileLayer component to render map base layer
export default function TileLayer() {
  return (
    <LeafletTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  );
}
