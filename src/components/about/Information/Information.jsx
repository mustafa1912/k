import React from 'react'
import style_ar from './Information.module.css'
import style_en from './Information_en.module.css'
import { useTranslation } from 'react-i18next';
function Information() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.information} mb-5 pb-5`}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className={`${style.info_content}  `}  >
                                <p className={`${style.des}  `}>يلتزم المعهد باعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى
                                    العلوم الهندسية يلبى احتياجات سوق العمل وقادر على البحث العلمى لخدمة المجتمع وتنمية البيئة
                                    فى إطار القيم الأخلاقية اعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً
                                    ودولياً فى العلوم.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className={`${style.info_content}  `}  >
                                <p className={`${style.des}  `}>يلتزم المعهد باعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً ودولياً فى
                                    العلوم الهندسية يلبى احتياجات سوق العمل وقادر على البحث العلمى لخدمة المجتمع وتنمية البيئة
                                    فى إطار القيم الأخلاقية اعداد خريج مؤهل طبقاً للمعايير القومية والأكاديمية المرجعية محلياً
                                    ودولياً فى العلوم.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Information
