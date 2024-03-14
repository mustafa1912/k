import React, { useState } from "react";

import style_ar from './../../aside/aside.module.css'
import style_en from './../../aside/aside_en.module.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import img from '../../../assets/imgs/logo.webp';

function Aside({ pdf }) {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en


    return (
        <React.Fragment>
            <aside className={`${style.aside} col-sm-3 rounded py-3 mt-2`} >
                <img className={`${style.img}  w-100`} src={img}
                    alt="" />
                <ul>
                    {/* <li className='my-2'>
                        <NavLink to="/student" className={`${style.btn} btn p-2 w-100`}>     </NavLink>
                    </li> */}
                    <li className='my-2'>
                        <NavLink to="/student/webStudentGuides" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            دليل الطالب الجامعي
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webActivitiesAchievements" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            الانشطة والانجازات
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webExamRules" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            قواعد الامتحانات
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webUniversityStudentCharters" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            ميثاق الطالب الجامعي
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webAccreditations" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            الاعتماد
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webCommonQuestions" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            الأسئلة الشائعة
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webStudentsUnions" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            اتحاد الطالب
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webStudyTimePlans" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            الخطة الزمنية للدراسة
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/student/webStudentGuideQualitys" className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            دليل الطالب للجودة
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default Aside
