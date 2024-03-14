import React from 'react';
import style from './opinions.module.css';
import { Skeleton } from 'primereact/skeleton';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Opinions = ({ api, t, langState, data }) => {
    // Function to get photo URL
    const imgSrc = (photo) => {
        return api + 'public//storage/' + photo.replace('public', '');
    };

    const options = {
        items: 4,
        loop: true,
        margin: 10,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: true, dots: false },
            600: { items: 3, nav: true, dots: false },
            1000: { items: 4, nav: true, dots: true }
        }
    };

    return (
        <section className={`${style.opinions}`}>
            <div className="container py-5">
                <div className="row m-0">
                    <div className={`${style.feat_content} pb-sm-0 pb-3`}>
                        <h2 className={`${style.feat_title}`}>  {t('Opinions')} </h2>
                    </div>
                    <div className={`${style.value_content} value_content mt-5`}>
                        <div className="row flex-row-reverse">
                            <OwlCarousel className={`${style.owl_news}  owl_news owl-theme`} {...options}>
                                {data.map((element, index) => (
                                    <div className="item" key={index}>
                                        <div className={`${style.slick_slide} ${style.item} ${style.slick_active}`} data-slick-index="4" aria-hidden="false" tabIndex="0" role="tabpanel" id="slick-slide14">
                                            <div className={`${style.testimonials_item} ${style.style8} ${index % 2 === 0 ? style.odd : ''} rounded`}>
                                                <div className={`${style.bottom_info} ${style.flex_middle}`}>
                                                    <div className={`${style.avarta}`}>
                                                        {element.students.photo ?
                                                            <img src={imgSrc(element.students.photo)} decoding="async" alt={langState ? element.students.name : element.students.nameEn} title={langState ? element.students.name : element.students.nameEn} />
                                                            :
                                                            <Skeleton shape="circle" size="3rem" />
                                                        }
                                                    </div>
                                                    <div className={`${style.info_testimonials}`}>
                                                        <h4 className={`${style.name_client}`}>{langState ? element.students.name : element.students.nameEn}</h4>
                                                        <div className={`${style.job}`}>{langState ? element.students.departments.name_ar : element.students.departments.name_en}</div>
                                                    </div>
                                                </div>
                                                {element.video && (
                                                    <div className='rounded mt-2'>
                                                        <iframe width="100%" height="200" frameborder="0" src={`https://www.youtube.com/embed/${element.video.split('/').pop()}?autoplay=0`} title={langState ? element.students.name : element.students.nameEn} alt={langState ? element.students.name : element.students.nameEn} allowfullscreen allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Opinions;
