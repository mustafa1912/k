import React, { useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import style from './Landscape.module.css'
// import style_en from './Landscape_en.module.css'
import { NavLink } from 'react-router-dom'
import { Dialog } from 'primereact/dialog';
import { Skeleton } from 'primereact/skeleton';
import img from '../../../assets/imgs/home-land.webp';

function Landscape({ t, i18n, langState, api, settiengs, sliders }) {
    // let style = langState ? style_ar : style_en

    const [visible, setVisible] = useState(false);
    // get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const options = {
        loop: true,
        margin: 10,
        autoplay: true,
        dots: false,
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
        smartSpeed: 450,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            600: {
                items: 1,
                dots: true,
            }
        },
    };

    return (
        <React.Fragment>
            {sliders.length !== 0 ?
                <section  >
                    {/* {sliders.map((Element, index) => ( */}
                    <div className={`${style.landscape} `}  >
                        <div className={` ${style.direction}  row justify-content-between mx-0 align-items-center `}>
                            <div className="col-12 col-md-5 col-lg-4">
                                <div className={`${style.landscape_content}`}  >
                                    <div>
                                        <h2 className={`${style.home_title}`} > </h2>
                                        <p className={`${style.home_desc} text-justify`}> {settiengs.mission} </p>
                                    </div>
                                    <div className={`${style.read_mr}  row align-items-center mt-3`}>
                                        <div className='col-2 col-md-2 my-1'>
                                            {settiengs.youtube && (
                                                <button className='btn' onClick={() => setVisible(true)} target="_blank"><i className="fa-solid fa-play"></i></button>
                                            )}
                                        </div>
                                        <div className='col-10 col-md-4 my-1'>
                                            <NavLink to='/about' className={`${style.btn} mx-2 btn`} rel="nofollow"> {t('more')} </NavLink>
                                        </div>
                                        <div className='col-12 col-md-6 my-1'>
                                            <NavLink to='https://kfs.kfs-hiet.edu.eg/' target='_blank' className={`${style.btn_old} mx-2 btn`} rel="nofollow"> {t('last-site')} </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                                <OwlCarousel className={`${style.owl_news}  owl_news owl-theme`} {...options} >
                                    {sliders.map((Element, index) => (
                                        <div className={` item`} key={index} >
                                            <div className={`${style.landscape_img}`}>
                                                {Element.photo ? (
                                                    <img src={imgSrc(Element.photo)} className="w-100" loading='lazy'
                                                        alt={langState ? settiengs.name_ar : settiengs.name_en}
                                                        title={langState ? settiengs.name_ar : settiengs.name_en} ></img>
                                                ) :
                                                    <img className="w-100" src={img} alt="" loading="lazy" />
                                                }
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                    <Dialog header=" فيديو عن المعهد" visible={visible} onHide={() => setVisible(false)}
                        className={`Dialog mt-3`} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                        {settiengs.video && (
                            <video src={imgSrc(settiengs.video)} width="100%" height="100%" controls={true} autoPlay={true} loop={true} muted={true} />
                        )}
                    </Dialog>
                </section>
                :
                <div className={`${style.landscape} item`}   >
                    <div className={` ${style.direction}  row justify-content-between mx-0 align-items-center `}>
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className={`${style.landscape_content}`}  >
                                <div className='w-75 mt-2'>
                                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                                </div>
                                <div className={`${style.read_mr}  d-flex align-items-center mt-3`}>
                                    <Skeleton shape="circle" size="3rem"  ></Skeleton>
                                    <NavLink to='/about' className={`${style.btn} btn mx-1`} rel="nofollow">  {t('more')} </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 d-flex justify-content-center p-0" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`${style.landscape_img}`}>
                                <Skeleton size="15rem"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Landscape
