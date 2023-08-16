import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

// importing REDUX
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// adding REDUCERS
const pitcherList = (state = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'], action) => {
    console.log("in pitcherList()", action);
    if (action.type === 'ADD_PITCHER') {
        return [...state, action.payload];
    }
    return state;
}

const catcherList = (state = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'], action) => {
    console.log("in catcherList()", action);
    if (action.type === 'ADD_CATCHER') {
        return [...state, action.payload];
    }
    return state;
}

// creating store - need to wrap <App/> in Provider elements and add this store as a prop
const baseballStore = createStore(combineReducers({
    pitcherList,
    catcherList
}),
    // to log before/after state and action type in console
    applyMiddleware(
        logger
    )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={baseballStore}>
            <App />
        </Provider>
    </React.StrictMode>
);
