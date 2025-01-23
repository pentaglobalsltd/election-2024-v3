export const selectConstituency = (constituency) => (dispatch) => {
  dispatch({
    type: 'SELECT_CONSTITUENCY',
    data: constituency,
  });
};
