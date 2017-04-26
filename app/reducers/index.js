import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import weather from './weather';
import loader from './loader';

const rootReducer = combineReducers({
    routing,
    weather,
    loader
});

export default rootReducer;
