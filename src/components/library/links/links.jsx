import React from 'react'
import style_ar from './links.module.css'
import style_en from './links_en.module.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
function Links() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <div className='row m-0 links'>
                <NavLink to='/library' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-book"></i>
                    </span>
                    <h5 className='mt-3'>  الكتب المتاحه </h5>
                </NavLink>
                <NavLink to='/' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-book-bookmark"></i>
                    </span>
                    <h5 className='mt-3'>  الكتب الالكترونية </h5>
                </NavLink>
                <NavLink to='/' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-cloud-arrow-up"></i>
                    </span>
                    <h5 className='mt-3'>   دور النشر </h5>
                </NavLink>
                <NavLink to='/borrow' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-copy"></i>
                    </span>
                    <h5 className='mt-3'>  طلب استعارة </h5>
                </NavLink>
                <NavLink to='/' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-book-open"></i>
                    </span>
                    <h5 className='mt-3'>  طلب توفير كتاب </h5>
                </NavLink>
                <NavLink to='/' className={`${style.border_links} py-3 col-sm-6 rounded text-center my-sm-0 my-1 `} >
                    <span >
                        <i className="fa-solid fa-book"></i>
                    </span>
                    <h5 className='mt-3'>  الكتب </h5>
                </NavLink>
            </div>
        </React.Fragment>
    )
}

export default Links
