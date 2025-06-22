import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { legacy_createStore as createStore,combineReducers ,applyMiddleware} from 'redux'
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk';
import SampleReducer from './Store/Reducer/Sample/SampleReducer';
import SidebarReducer from './Store/Reducer/Sidebar/SidebarReducer';
import ApiReducer from './Store/Reducer/Api/ApiReducer';
import SubscriptionReducer from './Store/Reducer/Subscription/SubscriptionReducer';
import PaginationReducer from './Store/Reducer/Pagination/PaginationReducer';
import NavigationAndFormReducer from './Store/Reducer/NavigationAndFormReducer/NavigationAndFormReducer';

const rootReducer = combineReducers({
  SampleReducer : SampleReducer,
  SidebarReducer : SidebarReducer,
  ApiReducer : ApiReducer,
  SubscriptionReducer : SubscriptionReducer,
  PaginationReducer : PaginationReducer,
  NavigationAndFormReducer : NavigationAndFormReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);