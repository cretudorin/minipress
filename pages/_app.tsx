import React from 'react';
import { Footer } from '../components/Footer';
import '../styles/globals.css';
import Head from 'next/head'
import { Provider } from 'react-redux';
import store from '../redux/store';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <div className="wrapper">
                <Head>
                    <title>Shop</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
}

export default MyApp;