import React from 'react';
import '@scripty/styles';
import { hot } from 'react-hot-loader/root';
import { Example } from './Example';
import imageStore from '../stores/imageStore';
import userStore from '../stores/userStore';
import { StoreProvider } from '@scripty/react-store';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

    let defaultStores = {
        imageStore,
        userStore,
    };

    return (
        <StoreProvider defaultStores={defaultStores}>
            <Router>
                <Example />
            </Router>
        </StoreProvider>
    );
};

export default hot(App);
