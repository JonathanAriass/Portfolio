import Navbar from './navbar'
import Footer from './footer'

import Head from 'next/head';

// Layout patter Next.js (https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts#layout-pattern)

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <title>Arias Portfolio</title>
                <meta name="description" content="Jonathan Arias porfolio Next.js app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );

}