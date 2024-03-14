import React, { useEffect, useMemo, useState } from 'react'

import Seo from '../../seo/seo';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Aside from '../../components/Student/aside/aside'
import FormServices from '../../components/Department/Academic/Form_services'

function Services({ api, t, i18n, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '   جداول الميد ترم  ', description: textDescription, keywords: '....' })
    }, [textDescription]);
    return (
        <React.Fragment>
            <Seo {...commonProps} />
            <Landsacpe {...commonProps} api={api} t={t} i18n={i18n} langState={langState} data='' />
            <div className='container'>
                <div className='row m-0'>
                    <Aside />
                    <div className='col-sm-9 mt-2'>
                        <FormServices {...commonProps} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (Services)
