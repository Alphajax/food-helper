// import {createStore, applyMiddleware, compose} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import logger from "redux-logger";
// import rootReducer from "./reducers/rootReducer";
//
//
// const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(
//         thunk, logger
//     )
// ));
//
// export default store;

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk, logger),
    // other store enhancers if any
));

export default store;
