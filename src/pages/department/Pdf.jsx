import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

// Seo
import Seo from '../../seo/seo';
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';

function Pdf({ api, t, i18n, langState, departments }) {
    const { name, namePdf } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }


    const plans = {
        ResearchPlan: {
            "name_ar": " الخطة البحثية  ",
            "name_en": " Research plan ",
        },
        Internal_Regulation: {
            "name_ar": "  اللائحة الداخلية ",
            "name_en": " Internal Regulation ",
        },
        instituteRequirements: {
            "name_ar": "   متطلبات المعهد     ",
            "name_en": " Institute requirements ",
        },
        departmentRequirements: {
            "name_ar": "   متطلبات البرنامج   ",
            "name_en": " Program requirements  ",
        },
        programReport: {
            "name_ar": "  توصيف وتقرير البرنامج  ",
            "name_en": "   Program description and report ",
        },
        Department_handbook: {
            "name_ar": " كتيب قسم  ",
            "name_en": "  Department booklet ",
        },
        Section_Council: {
            "name_ar": " مجلس قسم ",
            "name_en": " Department Council ",
        },
        summerTraining: {
            "name_ar": "  التدريب الصيفى ",
            "name_en": "  summer training  ",
        },
    };

    const data = plans[namePdf]; // Default to the committee plan if name is not found

    // data departments
    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);


    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: data.name_ar, description: `${datadepartment.notes}`, keywords: '....' });
    }, [data.name_ar, datadepartment]);


    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {(!datadepartment) && <SkeletonLoader />}
            {datadepartment && <Landsacpe dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

            <div className='container'>
                <div className='row m-0'>
                    {/* Aside */}
                    {(!datadepartment) && <SkeletonLoader />}
                    {datadepartment && <Aside {...commonProps} data={datadepartment} />}
                    {/* end Aside  */}

                    <div className='col-sm-9 pt-3'>
                        <section className={`p-3`} style={{ backgroundColor: ' #f7f7f6' }}>
                            {(!datadepartment) && <SkeletonLoader />}
                            {datadepartment &&
                                <React.Fragment>
                                    <h5 className={`Tables_head__s4W3s p-2 rounded`}>
                                        ملف  {data.name_ar}
                                    </h5>
                                    {datadepartment[namePdf] &&
                                        <iframe width="100%" height="800px" src={imgSrc(datadepartment[namePdf])} />
                                    }
                                </React.Fragment>
                            }
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}



export default (Pdf);
