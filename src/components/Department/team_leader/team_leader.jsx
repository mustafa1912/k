import React from 'react'
import style_ar from './team_leader.module.css'
import style_en from './team_leader_en.module.css'
import 'primeicons/primeicons.css';
import { Skeleton } from 'primereact/skeleton';

function TeamLeader({ api, langState, data, t, i18n }) {
    let style = langState ? style_ar : style_en
    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
    return (
        <React.Fragment>
            <div className={`${style.landscape} landscape my-4 px-2 px-md-5`}>
                <div className=" ">
                    <div className="row m-0 justify-content-evenly align-items-center">
                        <div className="col-12 col-md-6">
                            <div className={`${style.land_info} `} >
                                {data.notes &&
                                    <p className={`${style.des} text-justify`}> {data.notes}  </p>
                                }
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-4">
                            <div className={`${style.land_img}   text-center`}>
                                {data.photo ?
                                    <img src={imgSrc(data.photo)}
                                        className={`${style.img} w-100 `}
                                        alt={langState ? data.name_ar : data.name_en}
                                        title={langState ? data.name_ar : data.name_en} ></img>
                                    : <Skeleton size="15rem"></Skeleton>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TeamLeader
