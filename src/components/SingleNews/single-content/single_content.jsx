import React from 'react'
import style_ar from './single_content.module.css'
import style_en from './single_content_en.module.css'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import { Skeleton } from 'primereact/skeleton';
import { useLocation } from 'react-router-dom';
// ... (imports remain the same)

function Single_content({ api, langState, t, news }) {
    let style = langState ? style_ar : style_en
    const location = useLocation()
    const currentUrl = location.pathname

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const shareTitle = langState ? news.name_ar : news.name_en;
    const shareMedia = news.photo && imgSrc(news.photo);
    const shareQuote = langState ? news.notes_ar : news.notes_en;

    return (
        <React.Fragment>
            <section className={`${style.single_content} py-2 `} >
                <div className="container">
                    <div className="row m-0 justify-content-between my-5">
                        <div className="col-12 col-md-4" data-aos="fade-up" data-aos-duration="500">
                            <div className={`${style.single_img} mb-2 mb-md-0`}>
                                {news.photo ? (
                                    <img src={imgSrc(news.photo)}
                                        className={`${style.img} px-2 w-100`}
                                        alt={langState ? news.name_ar : news.name_en}
                                        title={langState ? news.name_ar : news.name_en} ></img>
                                ) :
                                    <Skeleton size="10rem"></Skeleton>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-8" data-aos="fade-up" data-aos-duration="500">
                            <div className={`${style.single_info}`} >
                                <h3 className={`${style.title} mx-auto rounded`}> {langState ? news.name_ar : news.name_en} </h3>
                                <p className={`${style.desc}`} > <div dangerouslySetInnerHTML={{ __html: langState ? news.notes_ar : news.notes_en }} />    </p>
                            </div>
                            <div className="row m-0 content w-100 mt-3 p-2 pb-3">
                                <div className={`${style.icons} d-flex justify-content-end`}>
                                    <FacebookShareButton url={currentUrl} title={shareTitle} quote={shareQuote} media={shareMedia} hashtag="#example" className='icon Btn mx-2'>
                                        <span className='svgContainer'>
                                            <i className='fa-brands fa-square-facebook rounded text-light'></i>
                                        </span>
                                        <span className='BG facebook'></span>
                                    </FacebookShareButton>

                                    <TwitterShareButton url={currentUrl} title={shareTitle} quote={shareQuote} media={shareMedia} hashtag="#example" className='icon Btn mx-2' >
                                        <span className='svgContainer'>
                                            <i className='fa-brands fa-twitter rounded text-light'></i>
                                        </span>
                                        <span className='BG twitter'></span>
                                    </TwitterShareButton>

                                    <WhatsappShareButton url={currentUrl} title={shareTitle} quote={shareQuote} separator=':: ' media={shareMedia} className='icon Btn mx-2' >
                                        <span className='svgContainer'>
                                            <i className='fa-brands fa-whatsapp rounded text-light'></i>
                                        </span>
                                        <span className='BG whatsapp'></span>
                                    </WhatsappShareButton>

                                    <LinkedinShareButton url={currentUrl} title={shareTitle} summary={shareQuote} source={shareTitle} media={shareMedia} className='icon Btn mx-2' >
                                        <span className='svgContainer'>
                                            <i className='fa-brands fa-linkedin rounded text-light'></i>
                                        </span>
                                        <span className='BG facebook'></span>
                                    </LinkedinShareButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}


export default Single_content
