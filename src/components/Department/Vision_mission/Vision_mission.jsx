import React from 'react'
import style_ar from './Vision_mission.module.css'
import style_en from './Vision_mission_en.module.css'
function VisionMission({ api, t, i18n, langState, NamePage, data }) {
    let style = langState ? style_ar : style_en

    return (
        <React.Fragment>
            <section className={`${style.vision_mission} py-3`}>
                <div className="container">
                    <div className={`${style.vision} my-4 py-3 px-2`}>
                        <div className={`${style.head} d-flex align-items-center`}>
                            <i className="pi pi-eye"></i>
                            <h3> {t('Vision')} {NamePage}</h3>
                        </div>
                        <p>{langState ? data.vision_ar : data.vision_en}</p>
                    </div>
                    <div className={`${style.mission} my-4 py-3 px-2`}>
                        <div className={`${style.head} d-flex align-items-center`}>
                            <i className="pi pi-comment"></i>
                            <h3> {t('message')} {NamePage}</h3>
                        </div>
                        <p>{langState ? data.message_ar : data.message_en}</p>
                    </div>
                </div>
            </section>
        </React.Fragment>

    )
}

export default VisionMission
