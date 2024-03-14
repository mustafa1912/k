import React from 'react'
import style_ar from './Institute_sys.module.css'
import style_en from './Institute_sys_en.module.css'
import { useTranslation } from 'react-i18next';
import inst_system_1 from '../../../assets/imgs/inst-system-1.webp';
import inst_system_2 from '../../../assets/imgs/inst-system-2.webp';
function Institute_sys() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.inst_system}  my-2`}>
                <div className="container">
                    <div className={`${style.inst_title}  `}>
                        <h2>نظام الدراسة بالمعهد العالي للهندسة</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7" data-aos="zoom-in" data-aos-duration="500">
                            <img className={`${style.img} w-100 mb-2 mb-md-0 `} src={inst_system_1}
                                alt="" loading="lazy" />
                        </div>
                        <div className={`${style.img} col-12 col-md-5`} data-aos="zoom-in" data-aos-duration="1000">
                            <img className="w-100" src={inst_system_2} alt=""
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Institute_sys
