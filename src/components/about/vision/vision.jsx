import React from 'react'
import style_ar from './vision.module.css'
import style_en from './vision_en.module.css'
function Vision({ t, i18n, langState, api, settiengs }) {
    let style = langState ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.vision_fluid} container-fluid  mb-4`} >
                <div className={`${style.vision}   `}>
                    <div className="row justify-content-end mb-md-5 mx-0">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className={`${style.vison_title} `}>
                                <h2 className={`${style.head}  position-relative my-2 mb-md-2 `}> {t('name-site')}</h2>
                                <p className={`${style.des} text-justify `}>
                                    {t('name-site-p')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.second_row} `}>
                        <div className={`${style.misions} row m-0 justify-content-end align-items-end p-0 row m-0 mt-sm-5 mt-0`}>
                            <div className={`${style.mision} rounded col-12 col-sm-12 col-md-6 col-lg-3`}  >
                                <div className={`${style.cir} `} ></div>
                                <h3 className="text-center my-4">  {t('create-institute')}    </h3>
                                <p className={`${style.des} `}>  {langState ? settiengs.establishment : settiengs.establishment}  </p>
                            </div>
                            <div className={`${style.mision} rounded col-12 col-sm-12 col-md-6 col-lg-3`}  >
                                <div className={`${style.cir} `} ></div>
                                <h3 className="text-center my-4"> {t('Vision-institute')}   </h3>
                                <p className={`${style.des} `}>  {langState ? settiengs.vision : settiengs.vision}  </p>
                            </div>
                            <div className={`${style.mision} rounded col-12 col-sm-12 col-md-6 col-lg-3`}  >
                                <div className={`${style.cir} `} ></div>
                                <h3 className="text-center my-4">   {t('message-institute')} </h3>
                                <p className={`${style.des} `}>  {langState ? settiengs.mission : settiengs.mission} </p>
                            </div>
                            <div className={`${style.mision} rounded col-12 col-sm-12 col-md-6 col-lg-3`}  >
                                <div className={`${style.cir} `} ></div>
                                <h3 className="text-center my-4"> {t('Goals-institute')}</h3>
                                <p className={`${style.des} `}>   {langState ? settiengs.goals : settiengs.goals} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </React.Fragment>
    )
}

export default Vision
