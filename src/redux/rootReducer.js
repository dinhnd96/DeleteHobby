import { combineReducers } from "redux";
import hobbyReducer from "./Hobby/HobbyReducer";
const rootReducer = combineReducers({ hobby: hobbyReducer });
export default rootReducer;
