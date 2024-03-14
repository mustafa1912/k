import React from 'react'
import style_ar from './workshops_Seminars.module.css'
import style_en from './workshops_Seminars_en.module.css'
function WorkshopsSeminars({ api, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
    return (
        <section className={`${style.Workshops_Seminars} py-5`}  >
            {data.map((Element, index) => (
                <div className={`${style.rows} row m-0 mb-3`} key={index} >
                    <div className='col-12 col-md-6 my-2'>
                        <h4 className={`${style.head_name} p-2 rounded `}> {langState ? Element.name_ar : Element.name_en}   </h4>
                        <h5 className={`${style.head_doctor} p-2 px-sm-4   rounded my-3`}> تحت اشراف الدكتور / {langState ? Element.doctors.name_ar : Element.doctors.name_en}       </h5>
                        <p className='text-justify'> {langState ? Element.details_ar : Element.details_en} </p>
                    </div>
                    <div className={`  col-12 col-md-6 my-2`} >
                        <div className={`${style.div_img}  `} >
                            {Element.photo && (
                                <img className={`${style.img} w-100 `} src={imgSrc(Element.photo)}
                                    alt="" />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section >
    )
}

export default WorkshopsSeminars
