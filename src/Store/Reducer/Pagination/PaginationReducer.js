import { SET_PAGINATION_DATA } from "../../Action/Pagination/Pagination";

const initialState = {
    pagination : {page:1, limit : 10, totalRecords : null, totalPages : null },
    timestamp: Date.now()
}

const PaginationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PAGINATION_DATA:
            return ({ ...state, pagination: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default PaginationReducer;