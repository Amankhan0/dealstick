import { SET_API_JSON, SET_API_DATA } from "../../Action/Api/ApiAction";

const initialState = {
    doc: null,
    json: {},
    timestamp: Date.now()
}

const ApiReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_API_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_API_JSON:
            return ({ ...state, json: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default ApiReducer;