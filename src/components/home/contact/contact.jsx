import React from 'react'
import style_ar from './contact_ar.module.css'
import style_en from './contact_en.module.css'

import { NavLink } from 'react-router-dom';

function Contact({ api, langState, t, i18n, importantLinks }) {
    let style = langState ? style_ar : style_en

    return (
        <React.Fragment>
            {/* {events.length !== 0 ? */}
            <section section className={`${style.events}`}  >
                <div className="container py-4">
                    <div className='row m-0'>
                        <div className='col-sm-6 my-2'>
                            <div className={`${style.feat_content} mb-5`}  >
                                <h2 className={`${style.feat_title} `}>  الاحداث    </h2>
                            </div>
                            <div style={{ maxWidth: '100%', height: '100%', margin: 'auto' }}>

                            </div>
                        </div>
                        <div className='col-sm-6 my-2'>
                            <div className=' '>
                                <div className={`${style.feat_content} mb-5`}  >
                                    <h2 className={`${style.feat_title} `}>  الروابط الهامة    </h2>
                                </div>
                                <div className='row m-0'>
                                    {importantLinks.map((Element, index) => (
                                        <div className='col-6 mb-3' key={index}>
                                            <NavLink to={Element.link} target='_blank' className='text-dark'   >
                                                <span className='btn btn-dark btn-sm'>
                                                    <i className="pi pi-link"></i>
                                                </span>
                                                <span className='mx-2'>
                                                    {langState ? Element.name_ar : Element.name_en}
                                                </span>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* : ''
            } */}
        </React.Fragment>
    )
}

export default Contact
