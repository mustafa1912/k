import React from 'react'
import style from './counter.module.css'
function Counter({ api, langState, t, i18n, data, nameSection }) {

    const counters = [
        { icon: nameSection ? 'fa-solid fa-people-group' : 'fa-solid fa-graduation-cap', value: nameSection ? '200K' : data.length > 0 ? data[0].SC : '', title: nameSection ? `${t('vist-home')}` : `${t('students-registered')}` },
        { icon: nameSection ? 'fa-solid fa-globe' : 'fa-solid fa-person-chalkboard', value: nameSection ? '200K' : data.length > 0 ? data[2].D1C : '', title: nameSection ? `${t('vist-new')}` : `${t('Teaching Staff')}` },
        { icon: nameSection ? 'fa-solid fa-users' : 'fa-solid fa-chalkboard-user', value: nameSection ? '200K' : data.length > 0 ? data[3].D2C : '', title: nameSection ? `${t('vist-current')}` : `${t('Auxiliary  Staff')}` },
        { icon: nameSection ? 'fa-solid fa-users-viewfinder' : 'fa-solid fa-graduation-cap', value: nameSection ? '200K' : data.length > 0 ? 4001 + data[1].GC : '', title: nameSection ? `${t('vist-today')}` : `${t('Graduates')}`   },
    ];

    return (
        <React.Fragment>
            <section className={`${style.counter}`}>
                <div className={`${style.counter_overlay}`}>
                    <div className="container">
                        <div className="row justify-content-center align-items-start my-2 mt-md-5 mx-1 mx-md-0 py-4">
                            {counters.map((counter, index) => (
                                <div key={index} className={`${style.counter_content} col-6 col-md-3 mb-4`}>
                                    <i className={`${style.icon} ${counter.icon}`}></i>
                                    <h5 className={`${style.num}`}>{counter.value}</h5>
                                    <h6 className="title">{counter.title}</h6>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Counter      
