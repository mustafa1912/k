import React from 'react'
import style_ar from './Landsacpe.module.css'
import style_en from './Landsacpe_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/header-1.webp';
function Landsacpe() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.landscape}  px-2 px-md-5`}>
                <div className={`${style.land_header} `} >
                    <div className={`${style.contact_overlay} `} >
                        <img  className={`${style.img} w-100 `} src={img} alt="" />
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Landsacpe
