const initialState = {
  selectedConstituency: null,
};

const constituencyAction = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_CONSTITUENCY': {
      return {
        ...state,
        selectedConstituency: action.data.selectedConstituency,
      };
    }

    default:
      return state;
  }
};

export default constituencyAction;
