import React from 'react'
import style_ar from './Gallery.module.css'
import style_en from './Gallery_en.module.css'

function Gallery({ t, i18n, langState, api, settiengs }) {
    let style = settiengs ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
    return (
        <React.Fragment>
            <section className={`${style.gallery}  my-3`}>
                <div className={`${style.gallery_title} text-center`}>
                    <h2 className={`${style.head}  mx-auto`}> {t('gallery-video')} </h2>
                </div>
                <div className={`${style.inner_banner}`}>
                    {settiengs.video && (
                        <video src={imgSrc(settiengs.video)} width="100%" height="100%" controls={true} autoPlay={true} loop={true} muted={true} />
                    )}
                    <div className={`${style.inner_ovelay} `}  >
                        <div className="row justify-content-center align-items-center">
                            <h2 className={`${style.title} `} > {t('name-site')} </h2>
                            <p className={`${style.des} text-center`}>  {t('News-Institute-p')} </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Gallery
