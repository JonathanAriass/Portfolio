import Layout from "../components/layout/layout";

import 'bootstrap/dist/css/bootstrap.css';
import "../styles/global.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {

    // Bootstrap setup
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}