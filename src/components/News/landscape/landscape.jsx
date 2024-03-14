import React from 'react'
import style_ar from './landscape.module.css'
import style_en from './landscape_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/header-1.webp';
function Landscape() {
    const { i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.landscape}`} >
                <div className={`${style.land_header}`} >
                    <img className={`${style.img} w-75`} src={img} alt="" />
                </div>
            </section>
        </React.Fragment>
    )
}

export default Landscape
