import{combineReducers} from "redux";
import { studentReducer } from "../component/dusk/reducer";
const rootReducer = combineReducers({
  //quan ly cac child reducer
  //key : value
  studentReducer
});

export {rootReducer};