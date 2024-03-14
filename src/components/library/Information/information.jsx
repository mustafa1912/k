import React from 'react'
import style_ar from './information.module.css'
import style_en from './information_en.module.css'
import { useTranslation } from 'react-i18next';
import img from '../../../assets/imgs/library pic.png';
import Links from '../links/links';
function Information() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.library_information} library_information my-5`}   >
                <div className="container">
                    <div className="row m-0 justify-content-evenly">
                        <div className="col-12 col-md-6">
                            <div className={`${style.lib_img} position-relative`}>
                                <img src={img} className={`${style.img} rounded w-100`} alt="" />
                            </div>
                            <p className='text-justify my-3'>
                                تضم مكتبة المعهد العديد من الكتب فى جميع التخصصات الخاصة بجميع اقسام المعهد من كتب فى الهندسة المدنية والهندسة المعمارية والهندسة الكيميائية تضم مكتبة المعهد العديد من الكتب فى جميع التخصصات الخاصة بجميع اقسام المعهد من كتب فى الهندسة المدنية والهندسة المعمارية والهندسة الكيميائية
                            </p>
                        </div>
                        <div className="col-12 col-md-4 px-4">
                            <Links />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Information
