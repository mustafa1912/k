import React from 'react'
import { NavLink } from 'react-router-dom'

function InfoContact({ style, t, settiengs, dataSeo }) {
    return (
        <React.Fragment>
            <div className={`${style.title}`}>
                <h2 className={`${style.head}`} >
                    {dataSeo.title}
                </h2>
            </div>
            <div className={`${style.info} d-flex align-items-center `}>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                    <h6>  {t('address')}  </h6>
                    <p className={`${style.des}`}>
                        <NavLink to="https://maps.app.goo.gl/Zipnzg7uyAab9Ey38" className="w-100" target="_blank"
                            title={settiengs.address} rel="nofollow"> {settiengs.address} </NavLink>
                    </p>
                </div>
            </div>
            <div className={`${style.info} d-flex align-items-center `}>
                <i className="fa-regular fa-envelope"></i>
                <div>
                    <h6> {t('mail')}  </h6>
                    <p className={`${style.des}`}>
                        <NavLink title={settiengs.email} to={`mailto:${settiengs.email}`} rel="nofollow"> {settiengs.email} </NavLink>
                    </p>
                </div>
            </div>
            <div className={`${style.info} d-flex align-items-center `}>
                <i className="fa-solid fa-phone"></i>
                <div>
                    <h6> {t('phone')} </h6>
                    <p className={`${style.des}`}>
                        <NavLink to={`tel:+${settiengs.tel1}`} title={settiengs.tel1} rel="nofollow">{settiengs.tel1}</NavLink>
                        <NavLink to={`tel:+${settiengs.tel2}`} title={settiengs.tel2} rel="nofollow">{settiengs.tel2}</NavLink>
                        <NavLink to={`tel:+${settiengs.tel3}`} title={settiengs.tel3} rel="nofollow">{settiengs.tel3}</NavLink>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default InfoContact
