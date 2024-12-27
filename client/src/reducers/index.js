import { combineReducers } from "redux";
import Auth from './Auth';
import posts from './posts'
import foundations  from './foundations'

export default combineReducers({
    posts,
    Auth,
    foundations 
});