import React, { useEffect, useMemo, } from 'react'
// Lazy-loaded components
import Seo from '../../seo/seo'
import Landsacpe from '../../components/contact/Landsacpe/Landsacpe'
import Content from '../../components/contact/Content/Content'
import Map from '../../components/contact/Content/Map'

function Contact({ api, t, i18n, langState, settiengs, textDescription }) {
    const dataSeo = { title: ' تواصل  معنا ', description: textDescription, keywords: '....' }
    const commonProps = useMemo(() => ({ api, t, i18n, langState, settiengs }), [api, t, i18n, langState, settiengs]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landsacpe />
            <Content {...commonProps} dataSeo={dataSeo} />
            <Map {...commonProps} />
        </React.Fragment>
    )
}

export default React.memo(Contact)
