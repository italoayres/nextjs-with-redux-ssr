import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
// import store from '../redux/store';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';


class MyApp extends App {

    store = createStore(rootReducer);

    render() {
        //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const {Component, pageProps} = this.props;

        return (
            <Provider store={this.store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}

export default MyApp

