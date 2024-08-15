const initialState = {
    selectedDistrict : null
}

const districtAction = (state=initialState, action) => {
    switch(action.type){
        case "SELECT_DISTRICT":{
            return{
                ...state,
                selectedDistrict: action.data.selectedDistrict
            }
        }

        default:
            return state;
    }
}

export default districtAction