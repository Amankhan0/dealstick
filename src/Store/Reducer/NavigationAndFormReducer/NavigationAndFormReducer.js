import { SET_NAVIGATION_JSON,SET_NAVIGATION_RESULT } from "../../Action/NavigationAndFormAction/NavigationAndFormAction";

const initialState = {
    navigationAndFormJson: {},
    navigationAndFormResult:null,
    timestamp: Date.now()
}

const NavigationAndFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NAVIGATION_JSON:
            return ({ ...state, navigationAndFormJson: action.value, timestamp: Date.now() })
            case SET_NAVIGATION_RESULT:
            return ({ ...state, navigationAndFormResult: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default NavigationAndFormReducer;