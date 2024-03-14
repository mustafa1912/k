import React from 'react'
import style_ar from './Polices.module.css'
import style_en from './Polices_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/polices.webp';
function Polices() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.polices}  my-2`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <ul>
                                <li className={`${style.li}`} data-aos="fade-up" data-aos-duration="1000">
                                    <i className={`${style.icon} fa-regular fa-square-check`}></i>
                                    <p className={`${style.des}`} >سياسات القبول بالمعهد</p>
                                </li>
                                <li className={`${style.li}`} data-aos="fade-up" data-aos-duration="1000">
                                    <i className={`${style.icon} fa-regular fa-square-check`}></i>
                                    <p className={`${style.des}`} >الشُعب التى يقبلها المعهد</p>
                                </li>
                                <li className={`${style.li}`} data-aos="fade-up" data-aos-duration="1000">
                                    <i className={`${style.icon} fa-regular fa-square-check`}></i>
                                    <p className={`${style.des}`} >شروط قيد الطالب بالمعهد</p>
                                </li>
                                <li className={`${style.li}`} data-aos="fade-up" data-aos-duration="1000">
                                    <i className={`${style.icon} fa-regular fa-square-check`}></i>
                                    <p className={`${style.des}`} >الاوراق المطلوبة</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <div data-aos="zoom-in" data-aos-duration="1000">
                                <img  className="w-100" src={img} alt="" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Polices
