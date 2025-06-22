import { SET_SIDEBAR,SET_THEME } from "../../Action/Sidebar/SidebarAciton";

const initialState = {
    doc: '',
    theme: null,
    timestamp: Date.now()
}

const SidebarReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SIDEBAR:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_THEME:
            return ({ ...state, theme: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default SidebarReducer;