import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux";
import {RequestPokemons,SearchPokemons} from "./reducer";
import thunkMiddleware from 'redux-thunk';
import { logger } from "redux-logger";
const rootReducer = combineReducers({RequestPokemons,SearchPokemons});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
   <Provider store={store} >
     <App/>
   </Provider>
,document.getElementById('root'));