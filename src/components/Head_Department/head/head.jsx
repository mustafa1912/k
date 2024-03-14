import React from 'react'
import style_ar from './head.module.css'
import style_en from './head_en.module.css'
import { NavLink } from 'react-router-dom';

function Head({ api, langState, messageDean, data, name, title }) {
    let style = langState ? style_ar : style_en

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }


    const degreeMapping = {
        1: langState ? "أ.د/" : "Mr. Dr/",
        2: langState ? "أ.م.د/" : "A.M.D/",
        3: langState ? "د/" : "D/",
        4: langState ? "م.م/" : "M.M/",
        5: langState ? "م/ " : "M/",
        6: langState ? "م/ " : "M/",
        7: langState ? "م.م/" : "M.M/",
    };


    return (
        <React.Fragment>
            <section className={`py-4 my-4`} >
                <div className='container'>
                    <div className='row m-0 align-items-center'>
                        <div className='col-12 col-md-6'>
                            <NavLink to={`/doctor/${data.name_ar}`}>
                                <h4 className={`mb-0`}> <span className={`${style.text_name}`}> {title} </span>   </h4>
                                <h3 className={`${style.head} mb-5`}> <span className={`${style.text_name}`}> {degreeMapping[data.degree] || "أ /"} </span> {langState ? data.name_ar : data.name_en} </h3>
                            </NavLink>
                            {name === "dean" ?
                                <>
                                    {/* كلمة العميد */}
                                    {messageDean &&
                                        <>
                                            <p className={`${style.des}`}> {langState ? messageDean.notes1_ar : messageDean.notes1_en} </p>
                                            <p className={`${style.des}`}> {langState ? messageDean.notes2_ar : messageDean.notes2_en} </p>
                                        </>
                                    }
                                </>
                                :
                                <>
                                    {/* كلمة الدكتور */}
                                    {data.websiteWords &&
                                        <p className={`${style.des}`}> {data.websiteWords} </p>
                                    }
                                </>
                            }

                        </div>
                        <div className='col-12 col-md-6'>
                            <NavLink to={`/doctor/${data.name_ar}`}>
                                {data.photo && (
                                    <img src={imgSrc(data.photo)}
                                        className={`${style.img} w-100 `}
                                        alt={langState ? data.name_ar : data.name_en}
                                        title={langState ? data.name_ar : data.name_en} ></img>
                                )}
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Head
