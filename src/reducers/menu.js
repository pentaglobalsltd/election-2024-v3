import { defaultDivision } from "../const/defaultDivision";

const initialState = {
    selectedMenu : defaultDivision.DEFAULT
}

const menuAction = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_MENU": {
            return {
                ...state,
                selectedMenu:action.data.selectedMenu,
            };
        }

        default:
            return state;
    }
};

export default menuAction;