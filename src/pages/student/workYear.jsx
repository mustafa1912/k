import React, { useEffect, useState, } from 'react'
// Seo
import Seo from '../../seo/seo';
 // Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Aside from '../../components/Student/aside/aside'
import Form_num_id from '../../components/Department/Academic/Form_num_id'


function WorkYear({ api, t, i18n, units, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '    درجات اعمال الفصل  ', description: textDescription, keywords: '....' })
    }, [textDescription]);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
                <Landsacpe dataSeo={dataSeo} api={api} t={t} i18n={i18n} langState={langState} data='' />
                <div className='container'>
                    <div className='row m-0'>
                        <Aside />
                        <div className='col-sm-9 mt-2'>
                            <Form_num_id dataSeo={dataSeo} />
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default (WorkYear)
