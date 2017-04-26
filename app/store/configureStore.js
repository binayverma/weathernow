import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default function configureStore() {
    const logger = createLogger({
        collapsed: true,
        predicate: () => process.env.NODE_ENV === 'development'
    });
    const middleware = applyMiddleware(thunkMiddleware, logger);
    return middleware(createStore)(rootReducer);
}
