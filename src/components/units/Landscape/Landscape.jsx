import React from 'react'
import style_ar from './Landscape.module.css'
import style_en from './Landscape_en.module.css'
import header_1 from '../../../assets/imgs/header-1.webp'
import units from '../../../assets/imgs/units-img.webp'
function Landscape({ api, t, i18n, langState, dataUnit }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    return (
        <React.Fragment>
            <section className={`${style.units}`}  >
                <div className={`${style.units_landscape}`}  >
                    <div className={`${style.land_header}`} >
                        <img className={`${style.img} w-100`} src={header_1} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 mx-auto">
                                {dataUnit.photo != null ? (
                                    <img src={imgSrc(dataUnit.photo)}
                                        alt={i18n.language === 'ar' ? dataUnit.name_ar : dataUnit.name_en}
                                        title={i18n.language === 'ar' ? dataUnit.name_ar : dataUnit.name_en}
                                        className={`${style.custom_img} w-100`}></img>
                                ) : <img className={`${style.custom_img} w-100`} src={units}
                                    alt="" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.units_info} container`} >
                    <div className="row">
                        <div className="col-12">
                            <h2 className={`${style.head}`}  >   {langState ? dataUnit.name_ar : dataUnit.name_en}   </h2>
                            <p className={`${style.des}`} > {langState ? dataUnit.notes_ar : dataUnit.notes_en} </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Landscape
