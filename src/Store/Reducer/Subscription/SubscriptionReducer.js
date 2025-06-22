import { SET_SUBSCRIPTION_DATA, SET_SUBSCRIPTION_JSON, SET_SUBSCRIPTION_FIELDS } from "../../Action/Subscription/SubscriptionAction";


const initialState = {
    doc: null,
    json:{page:1, limit:10, search:{}, pagination: true, single:false, populate:""},
    fields: [
        {
            _id: 0, title: 'Track Your Cargo', child: [
                { _id: 0, title: 'Trip Creation',  count: 0,serverKey:'trip', permission: [{ read: false, write: false }], active: true }
            ], active: true
        },
        {
            _id: 0, title: 'Track and Trace', child: [
                { _id: 0, title: 'Return Trip',serverKey:'trackandtrace', count: 0,permission: [{ read: false, write: false }], active: true },
            ], active: true
        },
        {
            _id: 0, title: 'E-Verify', child: [
                { _id: 0, title: 'Everify Trip',serverKey:'everify', count: 0,permission: [{ read: false, write: false }], active: true },
            ], active: true
        },
    ],
    timestamp: Date.now()
}

const SubscriptionReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUBSCRIPTION_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_SUBSCRIPTION_JSON:
            return ({ ...state, json: action.value, timestamp: Date.now() })
            case SET_SUBSCRIPTION_FIELDS:
            return ({ ...state, fields: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default SubscriptionReducer;