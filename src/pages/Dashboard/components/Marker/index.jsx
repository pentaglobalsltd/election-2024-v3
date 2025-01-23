import React, { useEffect, useState } from 'react';
import { TileLayer as LeafletTileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useSelector } from 'react-redux';

import CustomMarker from './CustomMarker';

const generateUrl = (number) =>
  `../../../../staticData/centers/center_wise_voter_with_location_${number}.json`;

export const MarkerLayer = () => {
  const [jsonData, setJsonData] = useState(null);
  const _selectedConstituency = useSelector((state) => state.constituency);
  const { selectedConstituency } = _selectedConstituency || {};

  const loadJsonFile = async (number) => {
    try {
      const jsonModule = await import(generateUrl(number));

      setJsonData(jsonModule.default);
    } catch (error) {
      console.error(`Error loading data_${number}.json:`, error);
      setJsonData(null);
    }
  };

  useEffect(() => {
    if (selectedConstituency?.code) loadJsonFile(selectedConstituency.code);
  }, [selectedConstituency]);

  return (
    <>
      <MarkerClusterGroup chunkedLoading spiderfyDistanceMultiplier={2}>
        {jsonData?.map((data, index) => {
          return data?.latitude !== 'NaN' && data?.longitude !== 'NaN' ? (
            <CustomMarker
              key={index}
              data={data}
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
