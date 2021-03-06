import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const logger = createLogger();

    const store = NODE_ENV === 'production' ?
        createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk)
        ) :
        createStore(
            rootReducer,
            initialState,
            applyMiddleware(thunk, logger)
        );

    return store;
}
