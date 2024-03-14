import React from 'react'
import style_ar from './goals.module.css'
import style_en from './goals_en.module.css'
function Goals({ api, t, i18n, langState, dataUnit }) {
    let style = langState ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.admin_department}  my-4`}>
                <div className="container">
                    <div className={`${style.admin_department_title} `} data-aos="zoom-in-up" data-aos-duration="500">
                        <h2 className={`${style.title} `}>   اهداف   {langState ? dataUnit.name_ar : dataUnit.name_en}    </h2>
                        <p className='mt-4 text-justify'> {langState ? dataUnit.notes_ar : dataUnit.notes_en} </p>
                    </div>
                    <div className="row m-0 mt-3">
                        <div className={`${style.list}   `} data-aos="fade-up" data-aos-duration="1000">
                            <i className={`${style.icon} fa-solid fa-square-check`}></i>
                            <p className={`${style.des} text-justify`} >   {langState ? dataUnit.goals_ar : dataUnit.goals_ar}    </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Goals
