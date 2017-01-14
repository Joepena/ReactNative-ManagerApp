import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAmwnvxNetPpaQqmRzEE8q-42w1BPPVZfA',
            authDomain: 'manager-91213.firebaseapp.com',
            databaseURL: 'https://manager-91213.firebaseio.com',
            storageBucket: 'manager-91213.appspot.com',
            messagingSenderId: '692300208591'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
