import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import useSWR from 'swr';
import axios from 'axios';

import style_ar from '../../components/Student/pdf/pdf.module.css'
import style_en from '../../components/Student/pdf/pdf_en.module.css'
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Aside from '../../components/Student/aside/aside'
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'

function Pdf({ api, t, i18n, langState, textDescription }) {
    let style = i18n.language === 'ar' ? style_ar : style_en
    const { name } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const plans = {
        webStudentGuides: {
            "name_ar": " دليل الطالب  ",
            "name_en": " Student Guide ",
        },
        webActivitiesAchievements: {
            "name_ar": "   الانشطة والانجازات  ",
            "name_en": "  Activities and achievements  ",
        },
        webExamRules: {
            "name_ar": "   قواعد الامتحانات  ",
            "name_en": " Exam rules  ",
        },
        webUniversityStudentCharters: {
            "name_ar": "   ميثاق الطالب الجامعي ",
            "name_en": " University student charter  ",
        },
        webAccreditations: {
            "name_ar": "  الاعتماد",
            "name_en": " Accreditation ",
        },
        webCommonQuestions: {
            "name_ar": "  الأسئلة الشائعة  ",
            "name_en": " common questions ",
        },
        webStudentsUnions: {
            "name_ar": " اتحاد الطلاب ",
            "name_en": " students Union  ",
        },
        webStudyTimePlans: {
            "name_ar": "  الخطة الزمنية الدراسية  ",
            "name_en": " Study time plan ",
        },
        webStudentGuideQualitys: {
            "name_ar": "  دليل الطالب للجودة ",
            "name_en": " Student guide to quality ",
        },
    };

    const data = plans[name]; // Default to the committee plan if name is not found

    // Fetch dataStudent using useSWR
    const { data: dataStudent, error: dataStudentError } = useSWR(`${api}api/website/${name}`, fetchFromApi);

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
                        {(dataStudentError || !dataStudent) && <SkeletonLoader />}
                        {dataStudent && (
                            dataStudent.map((Element, index) => (
                                <section className={`${style.section_student} mb-3 p-3`} style={{ backgroundColor: ' #f7f7f6' }} key={index}>
                                    <div className='row m-0'>
                                        <div className={`col-12 col-sm-12 ${Element.photo && ' col-md-8'}`} >
                                            <Panel className='mb-2' header={langState ? ' نبذه تعريفية ' : ' Introduction '} >
                                                <p className='mt-2 text-justify'>
                                                    {langState ? Element.notes_ar : Element.notes_en}
                                                </p>
                                            </Panel>
                                        </div>
                                        <div className={`col-12 col-sm-12 ${Element.photo && ' col-md-4'}`} >
                                            {Element.photo && (
                                                <React.Fragment>
                                                    <div className={`${style.card}`}   >
                                                        <div className={`${style.image} ${style.image1}`} style={{ backgroundImage: `url(${imgSrc(Element.photo)})` }} ></div>
                                                    </div>
                                                    <svg>
                                                        <filter id="wavy1">
                                                            <feTurbulence x="0" y="0" baseFrequency="0.2" numOctaves="5" seed="0"></feTurbulence>
                                                            <feDisplacementMap in="SourceGraphic" scale="1" />
                                                        </filter>
                                                    </svg>
                                                </React.Fragment>
                                            )}
                                        </div>
                                    </div>
                                    <div >
                                        <h5 className={`${style.head_name}  p-2 rounded `}>
                                            الملف
                                        </h5>
                                        <iframe width="100%" height="800px" src={imgSrc(Element.file)} />
                                    </div>
                                </section>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

// Function to fetch data using axios
const fetchFromApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

export default (Pdf);
