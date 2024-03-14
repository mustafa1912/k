import React from 'react'
import style_ar from './structure.module.css'
import style_en from './structure_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/member.webp'
function Structure() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.structure}  my-2 my-md-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className={`${style.members}`}>
                                <div className={`${style.member_img}`} >
                                    <img className="" src={img} alt="" />
                                    <img className="" src={img} alt="" />
                                    <img className={`${style.custom_transform}`} src={img} alt="" />
                                    <img className={`${style.custom_transform}`} src={img} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className={`${style.organ_structure}`} data-aos="fade-up" data-aos-duration="500">
                                <h2 className={`${style.title}`}  >الهيكل التنظيمي للمعهد</h2>
                                <p className={`${style.des}`}>يلتزم المعهد باعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى العلوم الهندسية يلبى احتياجات سوق العمل وقادر على البحث العلمى لخدمة المجتمع وتنمية البيئة فى إطار القيم الأخلاقية اعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى العلوم.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Structure
