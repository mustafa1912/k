import React from 'react'
import style_ar from './Features.module.css'
import style_en from './Features_en.module.css'
import { NavLink } from 'react-router-dom';
import { Skeleton } from 'primereact/skeleton';

function Features({ api, langState, features, t, i18n }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    return (
        <React.Fragment>
            {features.length !== 0 ?
                <section section className={`${style.features}`}  >
                    <div className="container">
                        <div className="row my-4 m-0" >
                            <div className="col-12 col-md-3 mb-4">
                                <div className={`${style.feat_content}`}  >
                                    <h2 className={`${style.feat_title} `}> {t('Features-Institute')} </h2>
                                    <p> {t('Features-Institute-p')}  </p>
                                    <div className={`${style.readMore_btn} `} >
                                        <span className={`${style.span} `} >
                                            <NavLink to='/about' className={`${style.btn}`}>
                                            </NavLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className={`${style.icon_content}  row m-0 align-items-center `}>
                                    {features.map((Element, index) => (
                                        <div className='col-12 col-md-4 col-ld-3 mb-3' key={index}>
                                            <NavLink to={`/features/${Element.id}/${Element.name_ar}`} className=' '>
                                                <div className={`${style.shadow_features}  ${index % 2 === 0 ? style.even : ''}  rounded p-2`}  >
                                                    <div className={`${style.div_img}  `}>
                                                        {Element.photo ? (
                                                            <img src={imgSrc(Element.photo)} className={style.img}
                                                                alt={langState ? Element.name_ar : Element.name_en}
                                                                title={langState ? Element.name_ar : Element.name_en} ></img>
                                                        ) :
                                                            <Skeleton shape="circle" size="3rem"></Skeleton>}
                                                    </div>
                                                    <h5 className={`${style.icon_title} mt-3`}  > {langState ? Element.name_ar : Element.name_en}  </h5>
                                                    <p> {langState ? Element.notes_ar : Element.notes_en}  </p>
                                                </div>
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                : ''
            }
        </React.Fragment>
    )
}

export default Features
