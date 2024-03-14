import React from 'react'
import style_ar from './Landscape.module.css'
import style_en from './Landscape_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/library.png';

function Landscape() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.library}`} >
                <div className={`container`} >
                    <div className={`${style.library_info}`}  >
                        <div className="row align-items-center pt-3">
                            <div className="col-12 col-md-4">
                            </div>
                            <div className="col-12 col-md-8">
                                <h2 className={`${style.title} mt-4`}>مكتبة المعهد</h2>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-4">
                                <img className={`${style.custom_img} w-100`} src={img}
                                    alt="" />
                            </div>
                            <div className="col-12 col-md-8">
                                <p className='py-4 mb-0'>تختص وحدة تكنولوجيا المعلومات الادارية باعداد البرامج والتطبيقات التي تختص بميكنة جميع اعمال
                                    المعهد الكترونيا وفقا لخطط سنويا يتم تحديدها بالاتفاق مع ادارة المعهد </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Landscape
