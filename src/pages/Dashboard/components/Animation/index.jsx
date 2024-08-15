import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { getElectionAreas } from '../../../../staticData/ElectionArea';
import { isUnique } from '../../../../utilities/uniqe.js';

function Animation() {
  const _menu = useSelector((state) => state.menu);
  const { selectedMenu } = _menu;

  const electionAreas = getElectionAreas();
  const _divisions = [...electionAreas.map((area) => area.division)];
  const divisions = _divisions.filter((item, index, array) =>
    isUnique(array.slice(0, index), item),
  );

  const selectedDivisions = divisions.filter(
    (item) => Number(item.code) === Number(selectedMenu),
  );

  const selectedDivision =
    selectedDivisions && selectedDivisions.length ? selectedDivisions[0] : null;

  const map = useMap();

  useEffect(() => {
    if (selectedDivision && map) map.flyTo(selectedDivision.position);
  }, [selectedDivision]);

  return null;
}

export default Animation;
