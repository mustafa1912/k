import React from 'react'
// import './style.css'
import style from './news.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';
import img from '../../../assets/imgs/news-1.webp';
function News({ api, langState, t, i18n, news, classification }) {
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
    const CatogreyName = (id) => {
        const data = classification.find((item) => item.id === id);
        if (data) return (data.name_ar)
    };



    const options = {
        items: 3,
        loop: true,
        margin: 10,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 3000, // Adjust animation speed if needed
        autoplayHoverPause: true, // Set to true to pause autoplay on hover
        easing: 'ease-in',
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            600: {
                items: 3,
                nav: true,
                dots: false,
            },
            1000: {
                items: 4,
                nav: true,
                dots: false,
            }
        },
    };

    return (

        <React.Fragment>
            {news.length !== 0 ?
                <section className={`${style.our_news} mt-3 pt-5`} >
                    <div className="row m-0 ">
                        <div className="col-12 col-md-4 col-lg-3 my-2">
                            <div className={`${style.news_title}`} >
                                <h4 className={`${style.title}`}  > {t('News-Institute')}     </h4>
                                <h3 className={`${style.head}`}  > {t('News-Institute-h')} </h3>
                                <p className={`${style.des}`}> {t('News-Institute-p')}    </p>
                                <div className={`${style.readMore_btn}`} >
                                    <NavLink to='/news' className={`${style.btn} btn`} > {t('blog')}  </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 my-2">
                            <div className={`${style.value_content} value_content`} >
                                <div className="row flex-row-reverse">
                                    <OwlCarousel className={`${style.owl_news}  owl_news owl-theme`} {...options}
                                    >
                                        {news.map((Element, index) => (
                                            <div className="item" key={index}>
                                                <div className={`${style.content} content`} >
                                                    <NavLink to={`/news/${CatogreyName(Element.Classification_id)}/${Element.name_ar}`} >
                                                        <div className={`${style.content_img} content_img`} >
                                                            {Element.photo ? (
                                                                <img src={imgSrc(Element.photo)}
                                                                    className={`${style.img} rounded w-100`}
                                                                    alt={langState ? Element.name_ar : Element.name_en}
                                                                    title={langState ? Element.name_ar : Element.name_en} loading='lazy'  ></img>
                                                            ) :
                                                                <img className={`${style.img} rounded w-100`} src={img}
                                                                    alt="" loading='lazy' />
                                                            }
                                                        </div>
                                                        <div className={`${style.content_info} content_info  p-3`} >
                                                            <h4 className={`${style.content_title} content_title`} > {langState ? Element.name_ar : Element.name_en}  </h4>
                                                            <div className={`${style.des} des`} >
                                                                <div dangerouslySetInnerHTML={{ __html: langState ? Element.notes_ar : Element.notes_en }} />
                                                            </div>
                                                        </div>
                                                        <div className={`${style.content_foot} content_foot border-top  d-flex justify-content-between  p-3`}>
                                                            <h6 className={`${style.footer} `} >   {t('no-comments')} </h6>
                                                            <h6 className={`${style.footer} `}> {Element.date}</h6>
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> : ''
            }
        </React.Fragment>
    )
}

export default News
