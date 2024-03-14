import React, { useEffect, useRef } from 'react'
import style_ar from './events_ar.module.css'
import style_en from './events_en.module.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { NavLink } from 'react-router-dom';
import { Skeleton } from 'primereact/skeleton';

function Events({ api, langState, t, i18n, importantLinks, data }) {
    let style = langState ? style_ar : style_en
    const calendarRef = useRef(null);

    useEffect(() => {
        if (calendarRef.current) {
            const calendar = calendarRef.current.getApi();

            // Sample events
            const events = data.map((Element) => ({
                title: langState ? Element.name_ar : Element.name_en,
                start: Element.date,
                end: Element.link,
            }));

            // Remove existing events before adding the new ones
            calendar.removeAllEvents();
            // Add events to the calendar
            calendar.addEventSource(events);

        }
    }, [data, langState]);

    return (
        <React.Fragment>
            {/* {events.length !== 0 ? */}
            <section section className={`${style.events}`}  >
                <div className="container py-4">
                    <div className='row m-0'>
                        <div className='col-sm-6 my-2'>
                            <div className={`${style.feat_content} mb-5`}  >
                                <h2 className={`${style.feat_title} `}>   {t('events')}    </h2>
                            </div>
                            <div style={{ maxWidth: '100%', height: '100%', margin: 'auto' }}>
                                <FullCalendar
                                    ref={calendarRef}
                                    plugins={[dayGridPlugin, listPlugin]}
                                    initialView="dayGridMonth"
                                    events={[]} // The events will be added dynamically in useEffect
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,listWeek,listDay',
                                    }}
                                />
                            </div>
                        </div>
                        <div className='col-sm-6 my-2'>
                            <div className=' '>
                                <div className={`${style.feat_content} mb-5`}  >
                                    <h2 className={`${style.feat_title} `}>  {t('Important-links')}      </h2>
                                </div>
                                <div className='row m-0'>
                                    {importantLinks && (
                                        importantLinks.map((Element, index) => (
                                            <div className='col-sm-6 mb-3' key={index}>
                                                <NavLink to={Element.link} target='_blank' className='text-dark'>
                                                    {Element.logo ? (
                                                        <img src={api + 'public//storage/' + Element.logo.replace('public', '')}
                                                            className={`${style.img}`}
                                                            alt={langState ? Element.name_ar : Element.name_en}
                                                            title={langState ? Element.name_ar : Element.name_en} ></img>
                                                    ) :
                                                        <Skeleton shape="circle" size="2rem" className="mr-2 d-inline-block "></Skeleton>
                                                    }
                                                    <span className='mx-2'>
                                                        {langState ? Element.name_ar : Element.name_en}
                                                    </span>
                                                </NavLink>
                                            </div>
                                        ))
                                    )}
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

export default Events
