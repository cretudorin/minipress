import React from 'react';
import { Footer } from '../src/components/Footer';
import '../styles/globals.css';
import Head from 'next/head'
import { Provider } from 'react-redux';
import Navbar from '../src/components/Navbar';
import store from '../src/redux/store';
import { Provider as AuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {

    return (
        <Provider store={store}>
            <AuthProvider session={pageProps.session}>
                <div className="wrapper">
                    <Head>
                        <title>Shop</title>
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    </Head>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </AuthProvider>
        </Provider>
    );
}

export default MyApp;