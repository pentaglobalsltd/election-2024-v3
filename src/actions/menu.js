export const selectMenu = (menu) => (dispatch) => {
  dispatch({
    type: "SELECT_MENU",
    data: menu,
  });
};
