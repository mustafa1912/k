import React from 'react'
import style_ar from './Institute_info.module.css'
import style_en from './Institute_info_en.module.css'
import { useTranslation } from 'react-i18next';
function Institute_info() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.inst_info}`} >
                <div className="container">
                    <div className={`${style.information}`} >
                        <div className={`${style.info_content} ${style.first}`}  >
                            <i className={`${style.icon} fa-regular fa-file-lines`}></i>
                            <p className={`${style.des}`} >يدرس طلاب المعهد الملتحقين بالدراسة قبل العام الدراسى 2022 بنظام الفصلين الدراسيين طبقاً للائحة
                                المعهد والمعتمدة من وزارة التعليم العالى فى 2018. مده الدراسة لنيل درجه البكالوريوس خمس سنوات
                                دراسيه تبدء بفرقه اعدادية عامة لجميع الطلاب ويكون التخصص بعدها.</p>
                        </div>
                        <div className={`${style.info_content} ${style.second}`}  >
                            <i className={`${style.icon} fa-solid fa-user-plus`}></i>
                            <p className={`${style.des}`} >يدرس طلاب المعهد الملتحقين بالدراسة قبل العام الدراسى 2022 بنظام الفصلين الدراسيين طبقاً للائحة
                                المعهد والمعتمدة من وزارة التعليم العالى فى 2018. مده الدراسة لنيل درجه البكالوريوس خمس سنوات
                                دراسيه تبدء بفرقه اعدادية عامة لجميع الطلاب ويكون التخصص بعدها.</p>
                        </div>
                        <div className={`${style.info_content} ${style.third}`}  >
                            <i className={`${style.icon} fa-regular fa-message`}></i>
                            <p className={`${style.des}`} >يدرس طلاب المعهد الملتحقين بالدراسة قبل العام الدراسى 2022 بنظام الفصلين الدراسيين طبقاً للائحة
                                المعهد والمعتمدة من وزارة التعليم العالى فى 2018. مده الدراسة لنيل درجه البكالوريوس خمس سنوات
                                دراسيه تبدء بفرقه اعدادية عامة لجميع الطلاب ويكون التخصص بعدها.</p>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Institute_info
