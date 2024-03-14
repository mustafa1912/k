import React from 'react'
import useSWR from 'swr';
import axios from 'axios';
import style_ar from './Manger.module.css'
import style_en from './Manger_en.module.css'
function Manger({ api, langState, messageDean, t, i18n }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const fetcher = (url) => axios.get(url).then((response) => response.data);

    const { data: doctor } = useSWR(`${api}api/website/doctor/${messageDean.doctor_id}`, fetcher);

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
            <section className={`${style.manager}`} >
                <div className="">
                    {doctor &&
                        <div className="row mx-0 justify-content-between align-items-center">
                            <div className="col-12 col-md-9">
                                <div className={`${style.manager_content}`} >
                                    <h2 className={`${style.manger_title}`} >  {t('Dean of the Institute')} </h2>
                                    <h4 className={`${style.manager_name} mt-4`} >
                                        {degreeMapping[doctor.degree] || "أ /"} {langState ? doctor.name_ar : doctor.name_en}
                                    </h4>
                                    <p className={`${style.des}`}> {langState ? messageDean.notes1_ar : messageDean.notes1_en} </p>
                                    <p className={`${style.des}`}> {langState ? messageDean.notes2_ar : messageDean.notes2_en} </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-3 p-0">
                                <div className={`${style.manager_img}`}>
                                    {doctor.photo && (
                                        <img src={imgSrc(doctor.photo)}
                                            className={`${style.img} w-100`}
                                            alt={langState ? doctor.name_ar : doctor.name_en}
                                            title={langState ? doctor.name_ar : doctor.name_en} ></img>
                                    )}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default Manger
