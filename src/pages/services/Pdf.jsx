import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
// import GoogleDocsViewer from 'react-google-docs-viewer';
// Seo
import Seo from '../../seo/seo';
// Lazy-loaded components
import Aside from '../../components/services/aside/aside'
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'

function Pdf({ api, t, i18n, langState, textDescription }) {
    const { name } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    const plans = {
        affairsCommittee: {
            "name_ar": "  اللجنة المجتمعية الخاصة بتشكيل البيئة  ",
            "name_en": " Community committee for shaping the environment ",
        },
    };

    const data = plans[name]; // Default to the committee plan if name is not found

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: data.name_ar, description: textDescription, keywords: '....' });
    }, [data.name_ar, textDescription]);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landsacpe dataSeo={dataSeo} {...commonProps} data={data} />
            <div className='container'>
                <div className='row m-0'>
                    {/* Aside */}
                    <Aside {...commonProps} />
                    {/* end Aside */}
                    <div className='col-sm-9 mt-2'>
                        <section className={`p-3`} style={{ backgroundColor: ' #f7f7f6' }}>
                            {/* <GoogleDocsViewer width="100%" height="800px" title={langState ? data.name_ar : data.name_en}
                                alt={langState ? data.name_ar : data.name_en} fileUrl={require(`../../assets/pdf/${name}.pdf`)} /> */}
                            <iframe
                                src={`../../assets/pdf/${name}.pdf`}
                                style={{ width: '100%', height: '800px' }}
                                title={langState ? data.name_ar : data.name_en}
                                alt={langState ? data.name_ar : data.name_en}
                            >
                            </iframe>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default (Pdf);

