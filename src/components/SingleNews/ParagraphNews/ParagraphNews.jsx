import React from 'react';
import style_ar from './ParagraphNews.module.css'
import style_en from './ParagraphNews_en.module.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function ParagraphNews({ api, langState, t, paragraph, namepage }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const options = {
        items: 1,
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
                items: 1,
                nav: true,
                dots: false,
            },
            1000: {
                items: 1,
                nav: true,
                dots: true,
            }
        },
    };



    return (
        <React.Fragment>
            <section className={`${style.section_hr}`} >
                <div className={`${style.hr} mb-3`}>
                    <div className="row m-0">
                        {paragraph.map((Element, index) => (
                            <div className={`"col-12 ${namepage === 'singelNews' ? 'col-md-12 ' : 'col-md-6 '} ${style.contant} mb-5 `} key={index}>
                                <div className='overflow-hidden'>
                                    <OwlCarousel className={`${style.owl_news} ${style.owl_theme} ${style.depart}  owl-theme`} {...options}>
                                        {Element.photos.map((ElePhoto, index) => (
                                            <div className={`${style.item} item`} key={index}>
                                                <img src={imgSrc(ElePhoto.photo)}
                                                    className={`${style.sec_img} w-100 `}
                                                    alt={langState ? Element.name_ar : Element.name_en}
                                                    title={langState ? Element.name_ar : Element.name_en}  >
                                                </img>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                                <div className={`${style.text_description} `}>
                                    {/* <h5 className={`${style.rounded_circle} `}>{index + 1} </h5> */}
                                    {/* <h5 className={`${style.sec_title_blog}  my-2`}> {langState ? Element.name_ar : Element.name_en} </h5> */}
                                    <p className={`${style.des} text-justify`}>
                                        <div dangerouslySetInnerHTML={{ __html: langState ? Element.notes_ar : Element.notes_en }} />
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ParagraphNews
