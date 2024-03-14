import React from 'react'
import { Helmet } from "react-helmet";
function Seo({ dataSeo }) {
    return (
        <Helmet>
            <title>{dataSeo.title}</title>
            {/* <!-- Required meta tags --> */}
            {/* <!--   وصف الموقع  --> */}
            <meta name="description" content={dataSeo.description} />
            <meta name="keywords" content={dataSeo.keywords} />
            {/* <!-- Sharing on facebook --> */}
            <meta property="og:title" content={dataSeo.title} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://najezsoft.com" />
            <meta property="og:description" content={dataSeo.description} />
            <meta property="og:image" content="./images/nagez-final-22-23.webp" />
            <meta property="og:site_name" content={dataSeo.title} />
            <meta property="fb:app_id" content="" />
            {/* <!-- Sharing on Twitter --> */}
            <meta name="twitter:title" content={dataSeo.title} />
            <meta name="twitter:description" content={dataSeo.description} />
            <meta name="twitter:image" content="./images/nagez-final-22-23.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={dataSeo.title} />
            <meta name="twitter:site" content="https://najezsoft.com" />
        </Helmet>
    )
}

export default (Seo)
