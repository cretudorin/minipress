import React from 'react';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <div className="wrapper">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;