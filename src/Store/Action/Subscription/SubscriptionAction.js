export const SET_SUBSCRIPTION_DATA = 'SET_SUBSCRIPTION_DATA'
export const SET_SUBSCRIPTION_JSON = 'SET_SUBSCRIPTION_JSON'
export const SET_SUBSCRIPTION_FIELDS = 'SET_SUBSCRIPTION_FIELDS'



export const setSubscriptionData = (data) => ({ type: SET_SUBSCRIPTION_DATA, value: data });
export const setSubscriptionJson = (data) => ({ type: SET_SUBSCRIPTION_JSON, value: data });
export const setSubscriptionFields = (data) => ({ type: SET_SUBSCRIPTION_FIELDS, value: data });



