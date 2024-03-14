import React from "react";

import style_ar from './../aside/aside.module.css'
import style_en from './../aside/aside_en.module.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import img from '../../assets/imgs/logo.webp';

function Aside_FAQ() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <aside className={`${style.aside} col-sm-3 rounded py-3 mt-2`} >
                <img className={`${style.img}  w-100`} src={img} alt="Logo" />
                <ul>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الموقع العام
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الدورات التدريبية
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            التنسيق
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            المصروفات
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            المميزات
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الإنشاء والاعتماد
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            مجلس المعهد
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            قواعد عامة للقبول والتحويل للمعهد
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to='/FAQ' className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            طريقة التقديم بالمعهد
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default Aside_FAQ
