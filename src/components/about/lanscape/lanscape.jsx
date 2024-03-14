import React from 'react'
import style_ar from './lanscape.module.css'
import style_en from './lanscape_en.module.css'
function Lanscape({ t, i18n, langState, api, settiengs }) {
    let style = langState ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.about_lanscape} `}>
                <div className="container">
                    <div className={`${style.landscape} `} >
                        <div className="row justify-content-end">
                            <div className="col-12 col-md-5 ">
                                <div className={`${style.landscape_content} `}   >
                                    <h2 className={`${style.title} `} > {t('goals')} </h2>
                                    <p className={`${style.des} `}> {langState ? settiengs.name_ar : settiengs.name_en}  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.landscape_content_sm} d-none`}>
                    <h2>  {t('goals')} </h2>
                    <p className={`${style.des} `} > {t('goals-p')}    </p>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Lanscape
