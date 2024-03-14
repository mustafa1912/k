import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from'../../components/units/Landscape/Landscape' 
import Aside from'../../components/units/Aside/aside' 
import VisionMission from'../../components/Department/Vision_mission/Vision_mission' 
import Goals from'../../components/units/goals/goals' 


function Units({ api, t, i18n, units, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([])
    const { name } = useParams();
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    const NamePage = 'الوحدة '

    // data Unit
    const Unit = useMemo(() => {
        return units.find((unit) => unit.name_ar === name);
    }, [units, name]);

    // Fetch places using useSWR
    const { data: dataUnit, error: dataUnitError } = useSWR(() => Unit ? `${api}api/website/unit/${Unit.id}` : null, fetchFromApi);

    // useEffect fun
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: `${name}`, description: textDescription, keywords: '....' })
    }, [name, textDescription]);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
                 {(dataUnitError || !dataUnit) && <SkeletonLoader />}
                {dataUnit && <Landscape {...commonProps} dataUnit={dataUnit} />}

                <div className='container'>
                    <div className='row m-0'>
                        {(dataUnitError || !dataUnit) && <SkeletonLoader />}
                        {dataUnit && <Aside {...commonProps} dataUnit={dataUnit} />}

                        <div className='col-sm-9 mt-2'>
                            {(dataUnitError || !dataUnit) && <SkeletonLoader />}
                            {dataUnit &&
                                <React.Fragment>
                                    <VisionMission {...commonProps} data={dataUnit} NamePage={NamePage} />
                                    <Goals {...commonProps} dataUnit={dataUnit} />
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
         </React.Fragment>
    )
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

export default (Units)
