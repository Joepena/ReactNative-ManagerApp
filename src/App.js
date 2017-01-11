import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
