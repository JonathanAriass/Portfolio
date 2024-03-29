// 500 errors are handled both client-side and server-side by the Error component. If you wish to override it, define the file pages/_error.js

// pages/_error.js is only used in production. In dev you'll get an error with the call stack to know where the error originated from.

// Example of how to reuse this Error component: https://nextjs.org/docs/pages/building-your-application/routing/custom-error#reusing-the-built-in-error-page

function Error({ statusCode }) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'
            }
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode :
        404
    return { statusCode }
}

export default Error;