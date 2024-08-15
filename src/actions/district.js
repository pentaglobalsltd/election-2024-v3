export const selectDistrict = (district) => (dispatch) => {
    dispatch({
      type: "SELECT_DISTRICT",
      data: district,
    });
  };
  