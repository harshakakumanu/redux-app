/**
 * Created by harshakakumanu on 2017-01-10.
 */
import {combineReducers} from 'redux';
import  courses from './courseReducer';


const rootReducer = combineReducers({
    courses
});

export default rootReducer;
