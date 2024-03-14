import React, { useMemo, useState } from 'react'
import style from './AllNews.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { Paginator } from 'primereact/paginator';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton } from 'react-share';
import Aside from '../aside/aside';
import { useEffect } from 'react';
import img from '../../../assets/imgs/news-1.webp';


function AllNews({ api, langState, i18n, t, news, classification, dataCatogrey }) {
    const location = useLocation();
    const [AllNews, stateAllNews] = useState([news])
    const [arrayLength, setArrayLength] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(6);
    const currentUrl = location.pathname
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };


    // التصنيفات 
    useEffect(() => {
        if (!news) return; // Return early if news data is not available yet

        let filteredData = news;
        if (dataCatogrey && dataCatogrey.id) {
            filteredData = news.filter(item => item.Classification_id === dataCatogrey.id);
        }

        const filteredLength = filteredData.length;
        setArrayLength(filteredLength);

        const slicedData = filteredData.slice(first, first + rows);
        stateAllNews(slicedData);
    }, [location.state, news, first, rows, dataCatogrey]);



    const shareTitle = langState ? news.name_ar : news.name_en;
    const shareMedia = news.photo && imgSrc(news.photo);
    const shareQuote = langState ? news.notes_ar : news.notes_en;


    return (
        <React.Fragment>
            <section className={`${style.lastestNews}`} >
                <div className="container">
                    <div className={`${style.news_title} mb-2 mb-md-5`}>
                        <h2 className={`${style.title}`} > أحدث الاخبار</h2>
                    </div>
                    <div className="row m-0">
                        <div className={`${style.news} col-12 col-md-9  row m-0`}>
                            {AllNews.map((Element, index) => (
                                <div className={`col-12 col-md-6  mb-3`} data-aos="fade-up-left" key={index}>
                                    <div className={`${style.news_content}  ${style.new}`} data-aos="fade-up-left"  >
                                        <NavLink to={`/news/${dataCatogrey.name_ar}/${Element.name_ar}`} >
                                            <div className={`${style.myImg}  mb-3`}>
                                                {Element.photo ? (
                                                    <img src={imgSrc(Element.photo)}
                                                        className={`${style.main_img}  w-100 `}
                                                        alt={langState ? Element.name_ar : Element.name_en}
                                                        title={langState ? Element.name_ar : Element.name_en} ></img>
                                                ) :
                                                    <img className={`${style.main_img}  w-100 `} src={img}
                                                        loading="lazy" alt="" />
                                                }
                                            </div>
                                        </NavLink>
                                        <NavLink to={`/news/${dataCatogrey.name_ar}/${Element.name_ar}`} >
                                            <div className={`${style.myInfo} p-2`}>
                                                <h4 className={`${style.head}`} >  {langState ? Element.name_ar : Element.name_en} </h4>
                                                <p className={`${style.desc} mb-3 `}>
                                                    <div dangerouslySetInnerHTML={{ __html: langState ? Element.notes_ar : Element.notes_en }} />
                                                    {/* <ReactMarkdown> {langState ? Element.notes_ar : Element.notes_en} </ReactMarkdown> */}
                                                </p>
                                            </div>
                                        </NavLink>
                                        <div className="d-flex justify-content-between w-100 p-2 pb-3">
                                            <div className="row justify-content-between align-items-end content">
                                                <div className={`${style.icons} d-flex justify-content-center`}>
                                                    {/* <FacebookShareButton url={currentUrl} title={langState ? Element.name_ar : Element.name_en} media={Element.photo && imgSrc(Element.photo)} quote={langState ? Element.name_ar : Element.name_en} rel='nofollow' target="_blank"
                                                        className={`icon Btn mx-2`} >
                                                        <span className={`svgContainer`}  >
                                                            <i className='fa-brands fa-square-facebook rounded text-light'></i>
                                                        </span>
                                                        <span className={`BG facebook`}  ></span>
                                                    </FacebookShareButton>
                                                    <TwitterShareButton url={currentUrl} title={langState ? Element.name_ar : Element.name_en} media={Element.photo && imgSrc(Element.photo)} quote={langState ? Element.name_ar : Element.name_en} rel='nofollow' target="_blank"
                                                        className={`icon Btn mx-2`} >
                                                        <span className={`svgContainer`}  >
                                                            <i className='fa-brands fa-twitter rounded text-light'></i>
                                                        </span>
                                                        <span className={`BG twitter`}  ></span>
                                                    </TwitterShareButton>
                                                    <WhatsappShareButton url={currentUrl} title={langState ? Element.name_ar : Element.name_en} media={Element.photo && imgSrc(Element.photo)} quote={langState ? Element.name_ar : Element.name_en} rel='nofollow' target="_blank"
                                                        className={`icon Btn mx-2`} >
                                                        <span className={`svgContainer`}  >
                                                            <i className='fa-brands fa-whatsapp rounded text-light'></i>
                                                        </span>
                                                        <span className={`BG whatsapp`}  ></span>
                                                    </WhatsappShareButton>
                                                    <LinkedinShareButton url={currentUrl} title={langState ? Element.name_ar : Element.name_en} media={Element.photo && imgSrc(Element.photo)} quote={langState ? Element.name_ar : Element.name_en} rel='nofollow' target="_blank"
                                                        className={`icon Btn mx-2`} >
                                                        <span className={`svgContainer`}  >
                                                            <i className='fa-brands fa-linkedin rounded text-light'></i>
                                                        </span>
                                                        <span className={`BG twitter`}  ></span>
                                                    </LinkedinShareButton> */}
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
                                            <div className={`${style.readMore_btn}`}>
                                                <NavLink to={`/news/${dataCatogrey.name_ar}/${Element.name_ar}`} className={`${style.btn} btn`}  >اقرا المزيد</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {arrayLength >= 6 ?
                                <Paginator first={first} rows={rows} totalRecords={Math.ceil(arrayLength) + 0} onPageChange={onPageChange} /> : ''}
                        </div>
                        {/* siderbar */}
                        <Aside {...commonProps} news={news} classification={classification} dataCatogrey={dataCatogrey} />
                    </div>
                </div>
            </section >
        </React.Fragment>
    )
}

export default AllNews 
