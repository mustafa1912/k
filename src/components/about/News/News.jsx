import React from 'react'
import style_ar from './News.module.css'
import style_en from './News_en.module.css'
import { NavLink } from 'react-router-dom'
import img from '../../../assets/imgs/news-1.webp'
function News({ api, langState, t, i18n, news, classification }) {
    let style = langState ? style_ar : style_en
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
            {news.length !== 0 ?
                <section className={`${style.last_news} my-2 my-md-5 `}>
                    <div className="container">
                        <div className={`${style.last_news_content}`} >
                            <div className={`${style.last_news_title} mb-5`} >
                                <h2 className={`${style.title}`} >  {t('last-news')} </h2>
                            </div>
                            <div className="container p-0">
                                <div className="row mx-2 mx-md-0">
                                    {news.map((Element, index) => (
                                        index < 4 ?
                                            <div className={`${style.department} col-12 col-md-6 col-lg-3 mb-2`} key={index} >
                                                <div className='rounded shadow p-2' >
                                                    <NavLink to={`/news/${CatogreyName(Element.Classification_id)}/${Element.name_ar}`} >
                                                        <div className={`${style.news_img} position-relative `}>
                                                            <div className='overflow-hidden'>
                                                                {Element.photo ? (
                                                                    <img src={imgSrc(Element.photo)}
                                                                        className={`${style.img} rounded w-100`}
                                                                        alt={langState ? Element.name_ar : Element.name_en}
                                                                        title={langState ? Element.name_ar : Element.name_en} ></img>
                                                                ) :
                                                                    <img className={`${style.img} rounded w-100`} src={img}
                                                                        loading="lazy" alt="" />
                                                                }
                                                            </div>
                                                        </div>
                                                        <h5 className={`${style.con_title}`} >  {langState ? Element.name_ar : Element.name_en}    </h5>
                                                        <p className={`${style.desc}`}  > <div dangerouslySetInnerHTML={{ __html: langState ? Element.notes_ar : Element.notes_en }} />  </p>
                                                        <div className={`${style.readMore_btn}`} >
                                                            <button type='button' className={`${style.btn} btn px-4 `} >{t('more')}</button>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                            : ''
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

export default News
