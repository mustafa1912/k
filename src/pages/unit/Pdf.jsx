import React, { useEffect, useMemo, useState } from 'react';

import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Aside from '../../components/units/Aside/aside'


function Pdf({ api, t, i18n, langState, units, textDescription }) {
    const { name, namePdf } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    const plans = {
        InternalRegulationFile_ar: {
            "name": " اللائحة الداخلية ",
        },
        InternalRegulationFile_en: {
            "name": " Internal Regulation  ",
        },
        administrativeStructureFile_ar: {
            "name": " الهيكل الاداري    ",
        },
        administrativeStructureFile_en: {
            "name": " The administrative structure  ",
        },
    };

    const data = plans[namePdf];


    // data Unit
    const unit = useMemo(() => {
        return units.find((unit) => unit.name_ar === name);
    }, [units, name]);

    // Fetch places using useSWR
    const { data: dataUnit, error: dataUnitError } = useSWR(() => unit ? `${api}api/website/unit/${unit.id}` : null, fetchFromApi);


    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: data.name, description: textDescription, keywords: '....' });

    }, [data.name, textDescription]);


    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {(!unit) && <SkeletonLoader />}
            {unit && <Landsacpe dataSeo={dataSeo} {...commonProps} data={unit} />}
            <div className='container'>
                <div className='row m-0'>
                    {/* Aside */}
                    {(!unit) && <SkeletonLoader />}
                    {unit && <Aside {...commonProps} dataUnit={unit} />}
                    {/* end Aside  */}
                    <div className='col-sm-9 mt-2'>
                        <section className={`p-3`} style={{ backgroundColor: ' #f7f7f6' }}>
                            {(dataUnitError || !dataUnit) && <SkeletonLoader />}
                            {dataUnit &&
                                <React.Fragment>
                                    <h5 className={`Tables_head__s4W3s p-2 rounded`}>
                                        ملف  {data.name}
                                    </h5>
                                    {dataUnit[namePdf] &&
                                        <iframe width="100%" height="800px" src={imgSrc(dataUnit[namePdf])} />
                                    }
                                </React.Fragment>
                            }
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


// Function to fetch data using axios
const fetchFromApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

export default (Pdf);
