import React from 'react'
import style_ar from './Landsacpe.module.css'
import style_en from './Landsacpe_en.module.css'
import { Skeleton } from 'primereact/skeleton'
function Landsacpe({ t, i18n, langState, data, name }) {
    let style = i18n.language === 'ar' ? style_ar : style_en

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
            <section className={`mt-5`}>
                <section className={`${style.landscape} px-2 px-md-5`}>
                    <div className="container py-5">
                        {data ?
                            <h1 className={`${style.head} text-center mt-sm-5 mt-0`}>
                                <React.Fragment>
                                    {name && <span span className={style.text_name}> {degreeMapping[data.degree] || "أ /"}  </span>}  {data.name_ar}
                                </React.Fragment>
                            </h1>
                            :
                            <React.Fragment>
                                <Skeleton className="mb-4"></Skeleton>
                            </React.Fragment>
                        }
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Landsacpe
