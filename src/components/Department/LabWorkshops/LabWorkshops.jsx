import React from 'react'
import style from './LabWorkshops.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Skeleton } from 'primereact/skeleton';
function LabWorkshops({ api, t, langState, data }) {

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const options = {
        items: 2,
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
                items: 2,
                nav: true,
                dots: false,
            },
            1000: {
                items: 2,
                nav: true,
                dots: true,
            }
        },
    };

    return (
        <React.Fragment>
            <section className={`${style.our_news} `}>
                <div className="row m-0  mt-3">
                    <div className="col-12 col-md-4 col-lg-4 my-2">
                        <div className={`${style.news_title}`}>
                            <h3 className={`${style.title} `} > {t('lab-workshops')}  </h3>
                            <p className={`${style.des} `}>

                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-8 my-2">
                        <div className={`${style.department_content} ${style.gallery}`} >
                            <OwlCarousel className={`${style.owl_news} ${style.owl_theme} ${style.depart}  owl-theme`} {...options} >
                                {data.map((Element, index) => (
                                    <div className="item" key={index}>
                                        <div className={`${style.content} `}>
                                            {Element.photo ? (
                                                <img src={imgSrc(Element.photo)}
                                                    className={`${style.img} w-100 `}
                                                    alt={langState ? Element.name_ar : Element.name_en}
                                                    title={langState ? Element.name_ar : Element.name_en} ></img>
                                            ) : <Skeleton size="15rem"></Skeleton>}
                                            <div className={`${style.title_img} rounded p-2 `}>
                                                <p className={`${style.head} text-end px-1 mb-0`}> {langState ? Element.name : Element.name}   </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LabWorkshops
