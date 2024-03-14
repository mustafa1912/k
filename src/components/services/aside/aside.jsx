import React from "react";

import style_ar from './../../aside/aside.module.css'
import style_en from './../../aside/aside_en.module.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import img from '../../../assets/imgs/logo.webp';

function AsideCommunity({ pdf }) {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en

    return (
        <React.Fragment>
            <aside className={`${style.aside} col-sm-3 rounded py-3 mt-2`} >
                <img className={`${style.img}  w-100`} src={img}
                    alt="" />
                <ul>

                    <li className='my-2'>
                        <NavLink to="/services/Suggestions and complaints" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            مقترحات وشكاوي
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/services/MilitaryEducation" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            التربية العسكرية
                        </NavLink>
                    </li>
                    {/* <li className='my-2'>
                        <NavLink to="/services/achievments" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            التدريب الصيفي
                        </NavLink>
                    </li> */}
                    <li className='my-2'>
                        <NavLink to="/services/survey" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            الاستبيانات
                        </NavLink>
                    </li>
                    {/* <li className='my-2'>
                        <NavLink to="/services/achievments" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            نماذج الاستمارات
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to="/services/achievments" className={`${style.btn} btn p-2 w-100 `}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"> </Badge>
                            النتيجة
                        </NavLink>
                    </li> */}
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default AsideCommunity
