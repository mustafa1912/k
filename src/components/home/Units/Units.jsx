import React from 'react'
import style_ar from './Units.module.css'
import style_en from './Units_en.module.css'
import { NavLink } from 'react-router-dom'
import img from '../../../assets/imgs/unit-1.webp'

function Units({ api, langState, t, i18n, units }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    return (
        <React.Fragment>
            <section className={`${style.units} mt-5`}>
                <div className="container">
                    <div className={`${style.unit_title} d-flex flex-column mb-2 mb-md-3`}>
                        <h2 className={`${style.title}  mx-auto `}>  {t('Units')}  </h2>
                        <p className={`${style.des} mx-auto `} >  {t('Units-p')} </p>
                    </div>
                    <div className="row align-items-center m-0">
                        {units.map((Element, index) => (
                            <div
                                className={`${style.item} tem col-12 col-md-3 d-flex flex-column align-items-center justify-content-center mb-3`} key={index}>
                                <NavLink to={`/unit/${Element.name_ar}`} className={`${style.btn} btn shadow w-100 pt-4`}>
                                    <div className={`${style.item_content}`}>
                                        {Element.photo ? (
                                            <img src={imgSrc(Element.photo)} className={`${style.img}`}
                                                alt={i18n.language === 'ar' ? Element.name_ar : Element.name_en}
                                                title={i18n.language === 'ar' ? Element.name_ar : Element.name_en} ></img>
                                        ) :
                                            <img className={`${style.img}`} src={img}
                                                loading="lazy" alt="" />
                                        }
                                    </div>
                                    <h5 className={`${style.head}  my-3 mt-md-4 `} > {langState ? Element.name_ar : Element.name_en}  </h5>
                                    <div className={`${style.readMore_btn}`} >
                                        <button type='button' className={`${style.btn} btn`}> {t('more')} </button>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Units
