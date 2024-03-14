import React from 'react'
import style_ar from './Services.module.css'
import style_en from './Services_en.module.css'
function Services({ t, i18n, langState, api }) {
    let style = langState ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.services} mt-5`}  >
                <div className="container">
                    <div className="row justify-content-around mx-1 mx-md-0">
                        <div className={`${style.services_content} mb-sm-0 mb-3 rounded col-12 col-md-3 p-2 px-3 `} >
                            <i className={`${style.icon} fa-solid fa-helmet-safety`}></i>
                            <h4>  الأقسام العلمية  </h4>
                            <p className={`${style.des} text-justify`}>يلتزم المعهد بإعداد خريجين متخصصين ومكتسبين للمهارات والجدارات</p>
                        </div>
                        <div className={`${style.services_content} mb-sm-0 mb-3 rounded col-12 col-md-3 p-2 px-3 `} >
                            <i className={`${style.icon} fa-solid fa-wheat-awn `}></i>
                            <h4>   أخبار المعهد </h4>
                            <p className={`${style.des} text-justify`}>يلتزم المعهد بإعداد خريجين متخصصين ومكتسبين للمهارات والجدارات</p>
                        </div>
                        <div className={`${style.services_content} mb-sm-0 mb-3 rounded col-12 col-md-3 p-2 px-3 `} >
                            <i className={`${style.icon} fa-solid fa-screwdriver-wrench`}></i>
                            <h4> خدمات عامة و رقمية </h4>
                            <p className={`${style.des} text-justify`}>يلتزم المعهد بإعداد خريجين متخصصين ومكتسبين للمهارات والجدارات</p>
                        </div>
                    </div>
                    <div className={`${style.services_info}`} >
                        <p className={`${style.des} mt-sm-5 mt-0`}>يلتزم المعهد باعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى العلوم
                            الهندسية يلبى احتياجات سوق العمل وقادر على البحث العلمى لخدمة المجتمع وتنمية البيئة فى إطار القيم
                            الأخلاقية اعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى العلوم.</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services
