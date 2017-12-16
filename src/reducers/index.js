import { combineReducers } from 'redux';
import usereducer from "./users";







const rootReducer = combineReducers({

    users:usereducer


});

export default rootReducer;
