import React from 'react'
import style from './All_dean.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';
import img from '../../../assets/imgs/wired-outline-268-avatar-man.webp';
function All_dean({ api, langState, nameSection, t, i18n, data, settiengs }) {

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
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
                dots: true,
            }
        },
    };


    return (
        <React.Fragment>
            <section className={`${style.our_news} pt-3 my-4`}>
                <div className={`container-fluid`}>
                    <div className={`${style.news_title} p-md-3 p-xl-5`}>
                        <h3 className={`${style.title} pt-3`} > {nameSection} </h3>
                    </div>
                </div>
                <div className="mt-3">
                    <div className={`${style.department_content} ${style.gallery}`} >
                        <div className='row m-0'>
                            <div className='col-sm-3'>
                                <p className={`${style.des} pb-3`}>
                                    {settiengs.AcademicStructure}
                                </p>
                            </div>
                            <div className='col-sm-9'>
                                <OwlCarousel className={`${style.owl_news} ${style.owl_theme} ${style.depart}  owl-theme`} {...options}>
                                    {data.map((Element, index) => (
                                        Element && (
                                            <div className={`${style.item} item`} key={index}>
                                                <NavLink to={`/doctor/${Element[1]}`} className={`${style.link}`}>
                                                    <div className={`${style.content}`}>
                                                        <img className={`${style.img} w-100`}
                                                            src={Element[3] ? imgSrc(Element[3]) : img}
                                                            alt={langState ? Element[0] + Element[1] : Element[0] + Element[2]}
                                                            title={langState ? Element[0] + Element[1] : Element[0] + Element[2]} />
                                                        <div className={`${style.title_img} rounded p-2 `}>
                                                            <p className={`${style.head} text-end px-1 mb-1`}>{langState ? Element[0] + Element[1] : Element[0] + Element[2]}</p>
                                                            <p className={`${style.head} text-end px-1 mb-1`}>{Element[4]}</p>
                                                            <p className={`${style.head} text-end px-1 mb-1`}>{Element[5]}</p>
                                                            <p className={`${style.head} text-end px-1 mb-1`}>{Element[6]}</p>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card flex justify-content-center">
                </div>
            </section>
        </React.Fragment>
    )
}

export default All_dean
