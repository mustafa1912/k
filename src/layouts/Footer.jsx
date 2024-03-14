import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'primereact/button';
import img from '../assets/imgs/logo.webp';

function Footer({ t, settiengs, langState, api }) {
    const [active, setActive] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', () => (
            window.scrollY > 100 ? setActive('active') : setActive('')
        ))
    }, []);
    const toUp = () => {
        window.scrollTo(0, 0);
    };


    // SocialMedia
    const SocialMediaIcon = ({ to, iconClass, SocialClass, target }) => (
        to && (
            <React.Fragment>
                <div className='col-6 my-2'>
                    <NavLink to={to} className={`icon Btn mx-2`} target="_blank">
                        <span className={`svgContainer`}  >
                            <i className={iconClass}></i>
                        </span>
                        <span className={`BG ${SocialClass}`}  ></span>
                    </NavLink>
                </div>
            </React.Fragment>
        )
    );

    return (
        <React.Fragment>
            <footer className="footer pt-5">
                <div className="foot-content mt-md-5 pt-md-5">
                    <div className="container pt-md-5 px-md-0">
                        <div className="row align-items-center m-0">
                            <div className="col-12 col-md-3 col-lg-6">
                                <div className="foot-title">
                                    <div className="d-flex align-items-center flex-column flex-lg-row mb-2">
                                        {settiengs.logo ? (
                                            <img src={api + 'public//storage/' + settiengs.logo.replace('public', '')}
                                                alt={langState ? settiengs.name_ar : settiengs.name_en}
                                                title={langState ? settiengs.name_ar : settiengs.name_en} ></img>
                                        ) :
                                            // لو مش موجوده هات الصوره الثابته
                                            <img src={img}
                                                alt={langState ? settiengs.name_ar : settiengs.name_en}
                                                title={langState ? settiengs.name_ar : settiengs.name_en}
                                            ></img>}
                                        <div>
                                            <h5> {langState ? settiengs.name_ar : settiengs.name_en} </h5>
                                            <p> {settiengs.mission} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="foot-links">
                                    <h4> {t('Quick links')}   </h4>
                                    <ul>
                                        <ul>
                                            <li>
                                                <i className="fa-solid fa-chevron-left"></i>
                                                <NavLink to='/' className="foot-link" rel="nofollow">   {t('Home')} </NavLink>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-left"></i>
                                                <NavLink to='/about' className="foot-link" rel="nofollow">   {t('About institute')}   </NavLink>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-left"></i>
                                                <NavLink to='/units' className="foot-link" rel="nofollow">   {t('Units')} </NavLink>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-left"></i>
                                                <NavLink to='/news' className="foot-link" rel="nofollow">   {t('News')} </NavLink>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-chevron-left"></i>
                                                <NavLink to='/contact' className="foot-link" rel="nofollow">  {t('Contact us')} </NavLink>
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="foot-contact">
                                    <h4>تواصل معنا</h4>
                                    <ul className="conatact-us-list">
                                        {settiengs.tel1 && (
                                            <li>
                                                <React.Fragment>
                                                    <span span > <i className="fa-brands fa-whatsapp"></i> </span>
                                                    <NavLink to={`https://wa.me/${settiengs.tel1}`} title={settiengs.tel1} target='_blank' rel="nofollow"> {settiengs.tel1}  </NavLink>
                                                </React.Fragment>
                                            </li>
                                        )}
                                        {settiengs.tel2 && (
                                            <li>
                                                <React.Fragment>
                                                    <span> <i className="fa-solid fa-phone"></i> </span>
                                                    <NavLink to={`tel:${settiengs.tel2}`} title={settiengs.tel1} rel="nofollow"> {settiengs.tel2}  </NavLink>
                                                </React.Fragment>
                                            </li>
                                        )}
                                        {settiengs.tel3 && (
                                            <li>
                                                <React.Fragment>
                                                    <span> <i className="fa-solid fa-phone"></i> </span>
                                                    <NavLink to={`tel:${settiengs.tel3}`} title={settiengs.tel1} rel="nofollow"> {settiengs.tel3}  </NavLink>
                                                </React.Fragment>
                                            </li>
                                        )}
                                        {settiengs.email && (
                                            <li>
                                                <React.Fragment>
                                                    <span> <i className="fa-solid fa-envelope"></i> </span>
                                                    <NavLink to={`mailto:${settiengs.email}`}
                                                        title={settiengs.email} rel="nofollow"> {settiengs.email}  </NavLink>
                                                </React.Fragment>
                                            </li>
                                        )}
                                        {settiengs.website && (
                                            <li>
                                                <React.Fragment>
                                                    <span> <i className="fa-solid fa-globe"></i></span>
                                                    <NavLink to='/' title={settiengs.website} rel="nofollow">  {settiengs.website} </NavLink>
                                                </React.Fragment>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-2">
                                <div className="foot-social">
                                    <h4> {t('Social Media')}  </h4>
                                    <div className="row m-0">
                                        <SocialMediaIcon to={settiengs.facebook} SocialClass={`facebook`} iconClass='fa-brands fa-square-facebook rounded' target="_blank" />
                                        <SocialMediaIcon to={settiengs.instagram} SocialClass={`instagram`} iconClass="  fa-brands fa-instagram rounded" target="_blank" />
                                        <SocialMediaIcon to={settiengs.twitter} SocialClass={`twitter`} iconClass="  fa-brands fa-twitter rounded" target="_blank" />
                                        <SocialMediaIcon to={settiengs.youtube} SocialClass={`youtube`} iconClass="  fa-brands fa-youtube rounded" target="_blank" />
                                        <SocialMediaIcon to={settiengs.tiktok} SocialClass={`tiktok`} iconClass="  fa-brands fa-tiktok rounded" target="_blank" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="allRight mt-3 pt-lg-4 pt-3 pb-2 text-center w-75 mx-auto border-top">
                            <p className=" mt-lg-1">   {t('copay')}
                                <NavLink to="https://najezsoft.com/ar" target="_blank" rel="nofollow">  {t('najezsoft')} </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
                <Button icon="pi pi-angle-double-up" rounded text raised severity="secondary" size='small' className={`btn-up ${active}`} onClick={() => toUp()} aria-label="Bookmark" />
            </footer>
        </React.Fragment>
    )
}

export default (Footer)     
