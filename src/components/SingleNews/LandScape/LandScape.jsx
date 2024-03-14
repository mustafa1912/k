import React from 'react'
import style_ar from './LandScape.module.css'
import style_en from './LandScape_en.module.css'
import { useTranslation } from 'react-i18next';
function LandScape({ api, langState, t, news }) {
    const { Translation, i18n } = useTranslation();
    let style = langState ? style_ar : style_en

    return (
        <React.Fragment>
            <section className={`${style.landscape}`} >
                <div className={`${style.land_content}  text-center d-flex align-items-center justify-content-center`}>
                    <h1 className={`${style.title}`} >أخبار المعهد المتداولة</h1>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LandScape
