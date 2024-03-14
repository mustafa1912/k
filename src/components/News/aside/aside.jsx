import React from 'react'
import style from './aside.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'primereact/button'
import  img from '../../../assets/imgs/news-1.webp'

function Aside({ api, langState, t, news, classification }) {
    const navigate = useNavigate();
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }




    const CatogreyName = (id) => {
        const data = classification.find((item) => item.id === id);
        if (data) return (data.name_ar)
    };

    return (
        <React.Fragment>
            <aside className={`${style.category}  col-12 col-md-3 `}>
                <div className={`${style.sidebar_blog} p-2 mb-3`} data-aos="fade-up-right">
                    <div className="my-3">
                        <h4 className={`${style.title} mb-5`} > اخر أخبار المعهد</h4>
                        {news.map((Element, index) => (
                            <NavLink to={`/news/${CatogreyName(Element.Classification_id)}/${Element.name_ar}`} key={index} target="_blank">
                                {index <= 6 && (
                                    <div className={`${style.blogs} row mx-0 align-items-center`} title={langState ? Element.name_ar : Element.name_en}>
                                        <div className="col-4 p-0">
                                            {Element.photo ? (
                                                <img src={imgSrc(Element.photo)}
                                                    className={`${style.sidebar_img} w-100 `}
                                                    alt={langState ? Element.name_ar : Element.name_en}
                                                    title={langState ? Element.name_ar : Element.name_en} ></img>
                                            ) :
                                                <img className={`${style.sidebar_img} w-100 `} src={img}
                                                    loading="lazy" alt="" />
                                            }
                                        </div>
                                        <div className="col-8">
                                            <h6 className={`${style.title_blog}  mb-0`} title={langState ? Element.name_ar : Element.name_en} > {langState ? Element.name_ar : Element.name_en} </h6>
                                            <p className={`${style.cat_desc} mb-0`}> <div dangerouslySetInnerHTML={{ __html: langState ? Element.notes_ar : Element.notes_en }} /> </p>
                                        </div>
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className={`${style.sidebar_blog} p-2 mb-3`} data-aos="fade-up-right">
                    <div className="my-3">
                        <div className={`d-flex w-100 mb-5`}>
                            <h4 className={`${style.title}  `} >  التصنيفات </h4>
                            <Button icon='pi pi-refresh' className={`me-auto p-0`} onClick={() => (navigate('/news'))} size='small' severity="secondary" outlined />
                        </div>
                        <div className={` `}>
                            {classification.map((Element, index) => (
                                <NavLink to={`/news/${Element.name_ar}`} state={{ catogrey: Element.id }}
                                    key={index} className={`${style.tag} btn-sm `}>
                                    {langState ? Element.name_ar : Element.name_en}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    )
}

export default Aside
