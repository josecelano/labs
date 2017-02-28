/**
 * Set up redux store and react-redux Provider in this file
 */
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appState from './reducer';
import TodoList from './TodoList';

const store = createStore(appState);

const App = (props) => {
    return (
        <Provider store={store}><TodoList/></Provider>
    )
}

export default App;
