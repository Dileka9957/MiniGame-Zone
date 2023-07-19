import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import authReducer from './reducers/authReducer';
import gameReducer from './reducers/gameReducer';
// ==============================|| COMBINE REDUCER ||============================== //

// const reducer = combineReducers({
//     customization: customizationReducer
// });

export default combineReducers({ customization: customizationReducer, authReducer, gameReducer });
