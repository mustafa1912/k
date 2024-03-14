import React from "react";

import style_ar from './../../aside/aside.module.css'
import style_en from './../../aside/aside_en.module.css'
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';
import logo from '../../../assets/imgs/logo.webp';

function Aside({ api, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en


    return (
        <React.Fragment>
            <aside className={`${style.aside} col-sm-3 rounded py-3 mt-2`} >
                <img className={`${style.img}  w-100`} src={logo}
                    alt="" />
                <ul>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}`} className={`${style.btn} btn p-2 w-100`}>   {t('department')}  {data.name_ar}     </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/head_Department`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-user"></i>} className="ms-2" severity="info">  </Badge>
                            {t('department-head')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/doctors`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-users"></i>} className="ms-2" severity="info"></Badge>
                            {t('department-teacher')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/AssistantDoctor`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-users"></i>} className="ms-2" severity="info"></Badge>
                            {t('department-assistant')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/Courses`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            {t('department-Courses')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/workshops`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-briefcase"></i>} className="ms-2" severity="info"></Badge>
                            {t('Seminars-Seminars')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/master_doctoral`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-regular fa-clipboard"></i>} className="ms-2" severity="info"></Badge>
                            {t('Master-doctoral')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/search_project`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-magnifying-glass"></i>} className="ms-2" severity="info"></Badge>
                            {t('search_project')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/scientific_trips`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-plane"></i>} className="ms-2" severity="info"></Badge>
                            {t('scientific_trips')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/rewords`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-trophy"></i>} className="ms-2" severity="info"></Badge>
                            {t('rewords')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/decisions`} className={`${style.btn} btn p-2 w-100`}>
                            <Badge value={<i className="fa-solid fa-laptop-file"></i>} className="ms-2" severity="info"> </Badge>
                            {t('decisions')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/ResearchPlan`} className={`${style.btn} btn p-2 w-100`}      >
                            <Badge value={<i className="fa-regular fa-file-lines"></i>} className="ms-2" severity="info"></Badge>
                            {t('ResearchPlan')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/Internal_Regulation`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-regular fa-file-pdf"></i>} className="ms-2" severity="info"></Badge>
                            {t('Internal_Regulation')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/departmentRequirements`} className={`${style.btn} btn p-2 w-100`}    >
                            <Badge value={<i className="fa-solid fa-school"></i>} className="ms-2" severity="info"></Badge>
                            {t('instituteRequirements')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/programReport`} className={`${style.btn} btn p-2 w-100`}    >
                            <Badge value={<i className="fa-solid fa-diagram-project"></i>} className="ms-2" severity="info"></Badge>
                            {t('departmentRequirements')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/programReport`} className={`${style.btn} btn p-2 w-100`}    >
                            <Badge value={<i className="fa-solid fa-file-pdf"></i>} className="ms-2" severity="info"></Badge>
                            {t('programReport')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/Department_handbook`} className={`${style.btn} btn p-2 w-100`}   >
                            <Badge value={<i className="fa-solid fa-book"></i>} className="ms-2" severity="info"></Badge>
                            {t('Department_handbook')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/Section_Council`} icon="pi pi-check" className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-users-gear"></i>} className="ms-2" severity="info"></Badge>
                            {t('Section_Council')}
                        </NavLink>
                    </li>
                    <li className='my-2'>
                        <NavLink to={`/department/${data.name_ar}/summerTraining`} className={`${style.btn} btn p-2 w-100`}  >
                            <Badge value={<i className="fa-solid fa-umbrella-beach"></i>} className="ms-2" severity="info"></Badge>
                            {t('summerTraining')}
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </React.Fragment>
    )
}

export default Aside
