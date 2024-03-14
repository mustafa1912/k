import React from 'react'

import style_ar from './InfoDoctor.module.css'
import style_en from './InfoDoctor_en.module.css'
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { Chip } from 'primereact/chip';
import { NavLink } from 'react-router-dom';
import { Button } from 'primereact/button';
import SkeletonLoader from '../../../pages/Loader/SkeletonLoader';

function InfoDoctor({ api, t, langState, data, datadepartment, searches, qulification, experience, achievement }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const degreeMapping = {
        1: langState ? "أ.د/" : "Mr. Dr/",
        2: langState ? "أ.م.د/" : "A.M.D/",
        3: langState ? "د/" : "D/",
        4: langState ? "م.م/" : "M.M/",
        5: langState ? "م/ " : "M/",
        6: langState ? "م/ " : "M/",
        7: langState ? "م.م/" : "M.M/",
    };

    // SocialMedia
    const SocialMediaIcon = ({ to, iconClass, SocialClass, target }) => (
        to && (
            <div className='col-4 my-2'>
                <NavLink to={to} className={`icon Btn mx-2`} target={target}>
                    <span className={`svgContainer`}  >
                        <i className={iconClass}></i>
                    </span>
                    <span className={`BG ${SocialClass}`}  ></span>
                </NavLink>
            </div>
        )
    );

    const customizedTimeline = (markerBgColor, contentFn, items) => (
        <Timeline value={items} align="left" className="customized-timeline my-3" marker={customizedMarker(markerBgColor)} content={contentFn} />
    );

    const customizedMarker = (backgroundColor) => (
        <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1 p-2 rounded" style={{ backgroundColor }}>
            <i className='pi pi-check'></i>
        </span>
    );

    const customizedContentTimeline = (item, title, detailsFn) => (
        <Card className='my-2'>
            <div className='row m-0 mt-3'>
                <div className='col-12 col-md-8 p-md-0'>
                    <p className='m-0'>
                        <span className='des'>{item.name}</span> {detailsFn(item)}
                    </p>
                </div>
                <div className='col-12 col-md-4 p-md-0 text-start'>
                    <span className='text-secondary'>{item.yearName}</span>
                    <i className='pi pi-calendar-times mx-1'></i>
                </div>
            </div>
        </Card>
    );

    const qulificationDetails = (item) => `${item.university}`;
    const experienceDetails = (item) => `${item.faculty}`;
    const achievementDetails = (item) => `${item.yearName} - ${item.side}`;




    return (
        <React.Fragment>
            <section className={` p-2 py-3 my-4`}>
                <div className="container">
                    <div className='row m-0'>
                        <div className='col-12 col-md-3'>
                            {(!data || !datadepartment) && <SkeletonLoader />}
                            {data && datadepartment &&
                                <React.Fragment>
                                    <div className="card p-2 mb-2" >
                                        {data.photo && (
                                            <img src={imgSrc(data.photo)}
                                                indicatorIcon='pi pi-search'
                                                alt={langState ? data.name_ar : data.name_en}
                                                title={langState ? data.name_ar : data.name_en}
                                                preview className={`${style.img_doctor}  m-auto w-100`} />
                                        )}
                                        <div className='my-3'>
                                            <h5 className='text-center'> <span>  {degreeMapping[data.degree] || "أ /"}</span> {langState ? data.name_ar : data.name_en} </h5>
                                            <p className='text-secondary text-center mb-1'>
                                                <React.Fragment>
                                                    {langState ? datadepartment.name_ar : datadepartment.name_en}
                                                </React.Fragment>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card p-2 mb-2" >
                                        <Chip label=" كلمة عنى " icon="pi pi-file mx-1" className='w-auto' />
                                        <p className='text-secondary mb-1'> {langState ? data.websiteWords : data.websiteWords}   </p>
                                    </div>
                                    <div className="card p-2 mb-2" >
                                        <Chip label=" البيانات الشخصية " icon="pi pi-link mx-1" className='w-auto' />
                                        <div className='row m-0 mt-2'>
                                            <SocialMediaIcon to={data.facebook} SocialClass={`facebook`} target='_blank' iconClass='fa-brands fa-square-facebook rounded' />
                                            <SocialMediaIcon to={'https://wa.me/' + data.tel} SocialClass={`whatsapp`} target='_blank' iconClass="  fa-brands fa-whatsapp rounded" />
                                            <SocialMediaIcon to={data.linkedIn} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-linkedin rounded" />
                                            <SocialMediaIcon to={data.twitter} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-twitter rounded" />
                                            <SocialMediaIcon to={'/mailto:' + data.email} SocialClass={`mail`} iconClass="  fa-regular fa-solid fa-envelope rounded" />
                                            <SocialMediaIcon to={data.instagram} SocialClass={`instagram`} target='_blank' iconClass="  fa-brands fa-instagram rounded" />
                                            <SocialMediaIcon to={data.tiktok} SocialClass={`tiktok`} target='_blank' iconClass="  fa-brands fa-tiktok rounded" />
                                        </div>
                                    </div>
                                    {data.cv &&
                                        <div className="card p-2 mb-2" >
                                            <Chip label=" السيرة الذاتية " icon="pi pi-file-pdf mx-1" className='w-auto' />
                                            <div className='mt-3'>
                                                <NavLink to={api + 'public//storage/' + data.cv.replace('public', '')} download={`${langState ? data.name_ar : data.name_en}.pdf`} target='_blank'>
                                                    <Button icon="pi pi-download mx-1" label=" السيرة الذاتية " severity="secondary" className='px-4' size='small' />
                                                </NavLink>
                                            </div>
                                        </div>
                                    }
                                </React.Fragment>
                            }
                        </div>
                        <div className='col-12 col-md-9'>
                            {(!data || !data) && <SkeletonLoader />}
                            {data &&
                                <div className="card">
                                    <TabView >
                                        {(qulification.length > 0 || experience.length > 0 || achievement.length > 0) &&
                                            <TabPanel header="البيانات الأساسية " leftIcon="pi pi-user mx-2">
                                                {qulification.length > 0 && customizedTimeline('#9C27B0', (item) => customizedContentTimeline(item, 'المؤهلات العلمية', qulificationDetails), qulification)}
                                                {experience.length > 0 && customizedTimeline('#0ea5e9', (item) => customizedContentTimeline(item, 'الخبرات العلمية', experienceDetails), experience)}
                                                {achievement.length > 0 && customizedTimeline('#673AB7', (item) => customizedContentTimeline(item, 'الإنجازات التطبيقية', achievementDetails), achievement)}
                                            </TabPanel>
                                        }
                                        {(searches.length > 0) &&
                                            <TabPanel header=" الأبحاث" leftIcon="pi pi-file mx-2">
                                                {searches.map((Element, index) => (
                                                    <Panel className='mb-2 dir-ltr' toggleable header={Element.name_en} key={index}>
                                                        <p className="text-start"> {Element.summary_en} </p>
                                                        {Element.authors &&
                                                            <Chip label={Element.authors} icon="pi pi-book mx-1" className='w-auto mx-2 my-1' />
                                                        }
                                                        {Element.link_search_gate1 &&
                                                            <NavLink to={Element.link_search_gate1}>
                                                                <Chip label=' Google Scholar' icon="pi pi-link mx-1" className='w-auto mx-2 my-1' />
                                                            </NavLink>
                                                        }
                                                        {Element.link_search_gate2 &&
                                                            <NavLink to={Element.link_search_gate12}>
                                                                <Chip label='link search gate ' icon="pi pi-link mx-1" className='w-auto mx-2 my-1' />
                                                            </NavLink>
                                                        }
                                                        {Element.publishingHouse &&
                                                            <Chip label={Element.publisherSide} icon="pi pi-home mx-1" className='w-auto mx-2 my-1' />
                                                        }
                                                        {Element.yearOfPublication &&
                                                            <Chip label={Element.yearOfPublication} icon="pi pi-calendar-times mx-1" className='w-auto mx-2 my-1' />
                                                        }
                                                    </Panel>
                                                ))}
                                            </TabPanel>
                                        }
                                        {data.cv &&
                                            <TabPanel header=" السيرة الذاتية " leftIcon="pi pi-file-pdf mx-2">
                                                <iframe width="100%" height="800px" src={imgSrc(data.cv)} />
                                            </TabPanel>
                                        }
                                    </TabView>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default InfoDoctor
