import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectDistrict } from '../../../../../actions/district';

import { getElectionAreas } from '../../../../../staticData/ElectionArea';

import './styles.scss';
import { selectMenu } from '../../../../../actions/menu';

const SVG = () => {
  const dispatch = useDispatch();

  const _menu = useSelector((state) => state.menu);
  const { selectedMenu } = _menu || {};

  const _selectedDistrict = useSelector((state) => state.district);
  const { selectedDistrict } = _selectedDistrict || {};
  const { code: selectedDistrictCode } = selectedDistrict || {};

  const handleSelectedDistrict = (divisionCode, district) => {
    if (divisionCode !== Number(selectedMenu)) {
      dispatch(selectMenu({ selectedMenu: null }));
    }
    dispatch(selectDistrict({ selectedDistrict: district }));
  };

  const electionAreas = getElectionAreas();

  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 800 1000"
      className="bangladesh"
    >
      {electionAreas.map((area, index) => {
        return (
          <g
            key={index}
            className={`svg__division ${Number(selectedMenu) === Number(area.division.code) ? 'svg__division-active' : ''} ${Number(selectedDistrictCode) === Number(area.district.code) ? 'svg__district-active' : ''}`}
            tabIndex={100}
            onClick={() => {
              handleSelectedDistrict(area.division.code, area.district);
            }}
          >
            {area.district.component}
          </g>
        );
      })}
    </svg>
  );
};

export default SVG;
