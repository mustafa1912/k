import React from 'react'
import style_ar from './Content.module.css'
import style_en from './Content_en.module.css'
import { useTranslation } from 'react-i18next';
function Map({ namePage }) {
    const { t, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <div className="row mx-0 my-3">
                <div className={`${namePage === "Home" ? 'col-12  ' : 'col-12 col-md-6 col-xl-5 col-xxl-4'}  `}>
                    <div className={`${style.find} pb-4 position-relative`}>
                        <h5 className={`${style.head_title}`} > {t('Find-Google')}  </h5>
                    </div>
                </div>
            </div>
            <div className={`${style.map_section} mb-md-5`}    >
                <div className={`${style.map_section} mb-md-5`} >
                    <iframe
                        title="Google Map"
                        style={{ border: 0, width: '100%', height: '450px' }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109311.16024941705!2d30.811045797265628!3d31.11046140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7ab8d5d25f91f%3A0x87d6fc29a313db38!2sHigher%20Institute%20of%20Engineering%20and%20Technology%20in%20Kafr%20El-Sheikh!5e0!3m2!1sen!2seg!4v1695816040821!5m2!1sen!2seg"
                        loading="lazy" // يُفضل استخدام "loading=async" هنا
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Map
