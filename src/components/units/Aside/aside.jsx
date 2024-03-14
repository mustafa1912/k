import React, { useState } from "react";

import style_ar from './../../aside/aside.module.css'
import style_en from './../../aside/aside_en.module.css'
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import img from '../../../assets/imgs/logo.webp';

function Aside_units({ api, t, i18n, langState, dataUnit }) {
    let style = langState ? style_ar : style_en

    return (
        <React.Fragment>
            <aside className={`${style.aside} col-sm-3 rounded py-3 mt-2`} >
                <img className={`${style.img}  w-100`} src={img}
                    alt="" />
                <ul>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}`} className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الرئيسية
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/ManagerDeputy`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            مدير ونائب الوحده
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/BoardStructure`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            مجلس ادارة الوحدة
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/${langState ? 'InternalRegulationFile_ar' : 'InternalRegulationFile_en'}`} className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            اللائحة الداخلية
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/${langState ? 'administrativeStructureFile_ar' : 'administrativeStructureFile_en'}`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الهيكل الادارى بالوحدة
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/BoardStructure`} className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            الدورات التدريبية
                        </NavLink>
                    </li>
                    {/* <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/BoardStructure`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            ملفات هامة
                        </NavLink>
                    </li> */}
                    {/*<li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/BoardStructure`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            محاضر وقررات
                        </NavLink>
                    </li> */}
                    {/* <li className='my-2'>
                        <NavLink to={`/unit/${dataUnit.name_ar}/BoardStructure`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            معايير الدراسة الذاتية
                        </NavLink>
                    </li> */}
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default Aside_units
