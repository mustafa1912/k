import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Aside from '../../components/Student/aside/aside'
import FormServices from '../../components/Department/Academic/Form_services'


function Section({ api, t, i18n, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' السكاشن  ', description: textDescription, keywords: '....' })
    }, [textDescription]);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />

            <Landsacpe dataSeo={dataSeo} api={api} t={t} i18n={i18n} langState={langState} data='' />
            <div className='container'>
                <div className='row m-0'>
                    <Aside />
                    <div className='col-sm-9 mt-2'>
                        <FormServices dataSeo={dataSeo} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (Section)
