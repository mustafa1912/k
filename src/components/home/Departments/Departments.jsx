import React from 'react'
import style_ar from './Departments.module.css'
import style_en from './Departments_en.module.css'
import { NavLink, useLocation } from 'react-router-dom'

function Departments({ api, dataSeo, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en
    const Location = useLocation()
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    return (
        <React.Fragment>
            {data &&
                <section className={`${style.department}`}>
                    <div className="container">
                        {/* <div > */}
                        <div className={`${Location.pathname === '/about' ? style.department_content_about : ''} ${style.department_content} pt-4`} >
                            <div className="d-flex flex-column mb-5">
                                <h2 className={`${style.title} m-auto `}>
                                    {`${Location.pathname !== '/about' ? ` ${t('educational-programs')} ` : ` ${t('academic-degrees')} `} `}
                                </h2>
                            </div>
                            <div className="container p-0">
                                <div className="row mx-2 mx-md-0">
                                    {data.map((Element, index) => (
                                        <div className={`${style.department} col-12 col-md-6 col-lg-4  mb-2 mb-md-4`} key={index} >
                                            <NavLink to={Location.pathname !== '/about' ? `/department/${Element.name_ar}` : ''}>
                                                {Element.photo && (
                                                    <img src={imgSrc(Element.photo)}
                                                        alt={langState ? Element.name_ar : Element.name_en}
                                                        title={langState ? Element.name_ar : Element.name_en} ></img>
                                                )}
                                                <h3 className={`${style.title_department} mt-3 `}>
                                                    {Location.pathname !== '/about' ? ` ${t('program')} ` : ` ${t('Bachelor')} `}
                                                    {langState ? Element.name_ar : Element.name_en}
                                                </h3>
                                                {/* لو انت في صفحة عن المعهد انا مش محتاج الجزء ده  */}
                                                {Location.pathname !== '/about' ?
                                                    <React.Fragment>
                                                        {Element.notes && (
                                                            <p className={`${style.desc}`}> {Element.notes}  </p>
                                                        )}
                                                        <div className={`${style.readMore_btn}`} >
                                                            <span className={`${style.span} `} >
                                                                <NavLink to='/about' className={`${style.btn}`}>
                                                                </NavLink>
                                                            </span>
                                                        </div>
                                                    </React.Fragment>
                                                    : ''}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </React.Fragment>
    )
}

export default Departments  
