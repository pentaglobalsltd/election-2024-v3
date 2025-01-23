import React from 'react';
import { SVGOverlay } from 'react-leaflet';

import MapWrapper from './components/MapWrapper';
import Tile from './components/Layers/Tile';
import SVG from './components/Layers/SVG';
import VoteCountSummary from './components/VoteCountSummary';
import DivisionInfo from './components/DivisionInfo';
import DistrictInfo from './components/DistrictInfo';
import Animation from './components/Animation';
import { ThemeSwitch } from '../../components/ThemeSwitch';
import { MarkerLayer } from './components/Marker/index';
const bounds = [
  [26.74, 87],
  [20.6, 93.8],
];

const Dashboard = () => {
  return (
    <MapWrapper>
      <Animation />
      <MarkerLayer />
      <ThemeSwitch />
      <VoteCountSummary />

      <DivisionInfo />
      <DistrictInfo />

      <Tile />
      <SVGOverlay interactive={true} bounds={bounds}>
        <SVG />
      </SVGOverlay>
    </MapWrapper>
  );
};

export default Dashboard;
