import React, { useEffect, useState, } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe';
// Lazy-loaded components
import Question from '../../components/Student/question/question'
import Aside_FAQ from '../../components/aside/aside_FAQ'


function FAQ({ api, t, i18n, langState, units }) {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '   الأسئلة الشائعة  ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <div className='container'>
                <div className='row m-0'>
                    <Aside_FAQ />
                    <div className='col-sm-9 mt-2'>
                        <Question />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (FAQ)
