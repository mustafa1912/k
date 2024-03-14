import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import style_ar from './contact.module.css'
import style_en from './contact_en.module.css'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';


function Contact({ api, t, i18n, langState, data, name }) {
    let style = langState ? style_ar : style_en
    const [visible, setVisible] = useState(false);

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    // SocialMedia
    const SocialMediaIcon = ({ to, iconClass, SocialClass, target }) => (
        to && (
            <NavLink to={to} className={`icon Btn mx-3`} target={target}>
                <span className={`svgContainer`}  >
                    <i className={iconClass}></i>
                </span>
                <span className={`BG ${SocialClass}`}  ></span>
            </NavLink>
        )
    );


    return (
        <section className='my-sm-0 my-md-5 py-4'>
            <div className='container'>
                <div className='row m-0 '>
                    <div className='col-12 col-md-6 d-flex justify-content-center flex-column' >
                        <h2 className={`${style.head} mb-6 pt-3`}>  {t('info')}   {name === 'dean' ? t('Dean of the Institute') : ''}    </h2>
                        <div className="flex justify-content-start align-items-center mt-4">
                            <SocialMediaIcon to={data.facebook} SocialClass={`facebook`} target='_blank' iconClass='fa-brands fa-square-facebook rounded' />
                            <SocialMediaIcon to={'https://wa.me/' + data.tel} SocialClass={`whatsapp`} target='_blank' iconClass="  fa-brands fa-whatsapp rounded" />
                            <SocialMediaIcon to={data.linkedIn} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-linkedin rounded" />
                            <SocialMediaIcon to={data.twitter} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-twitter rounded" />
                            <SocialMediaIcon to={'mailto:' + data.email} SocialClass={`mail`} iconClass="  fa-regular fa-solid fa-envelope rounded" />
                            <SocialMediaIcon to={data.instagram} SocialClass={`instagram`} target='_blank' iconClass="  fa-brands fa-instagram rounded" />
                            <SocialMediaIcon to={data.tiktok}
                                SocialClass={`tiktok`} target='_blank' iconClass="  fa-brands fa-tiktok rounded" />
                            {data.cv && (
                                <Button className='mx-1' label={`${t('cv')}`} severity="info" icon="pi pi-file-pdf" onClick={() => setVisible(true)} />
                            )}
                        </div>
                    </div>
                    <div className={`${style.col_contact} col-md-4 py-5 bg-dark rounded`}>
                        <h4 className='my-4'> {t('Contact us')}........  </h4>
                        {data.tel &&
                            <div className='d-flex m-0 my-4'>
                                <NavLink to={'tel' + data.tel}>
                                    <i className='pi pi-phone p-2'></i>
                                    <span>
                                        {data.tel}
                                    </span>
                                </NavLink>
                            </div>
                        }
                        {data.email &&
                            <div className='d-flex m-0 my-4'>
                                <NavLink to={'mailto:' + data.email}>
                                    <i className='pi pi-envelope p-2'></i>
                                    <span>
                                        {data.email}
                                    </span>
                                </NavLink>
                            </div>
                        }
                        {data.address &&
                            <div className='d-flex m-0 my-4'>
                                <NavLink to=''>
                                    <i className='pi pi-map-marker p-2'></i>
                                    <span>
                                        {data.address}
                                    </span>
                                </NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {data.cv && (
                <Dialog header={`${t('cv')}`} visible={visible} onHide={() => setVisible(false)}
                    className={`Dialog mt-3`} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                    <iframe width="100%" height="800px" src={imgSrc(data.cv)}
                        alt={langState ? data.name_ar : data.name_en} title={langState ? data.name_ar : data.name_en} />
                </Dialog>
            )}
        </section>
    )
}

export default Contact
