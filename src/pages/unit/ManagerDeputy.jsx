import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/units/Landscape/Landscape'
import Aside from '../../components/units/Aside/aside'
import Board from '../../components/units/Board/Board'


function ManagerDeputy({ api, t, i18n, units, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([])
    const { name } = useParams();
    const doctorKind = [0, 1];
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    // data Unit
    const Unit = useMemo(() => {
        return units.find((unit) => unit.name_ar === name);
    }, [units, name]);

    // Fetch places using useSWR
    const { data: dataUnit, error: dataUnitError } = useSWR(() => Unit ? `${api}api/website/unit/${Unit.id}` : null, fetchFromApi);
    // Fetch places using useSWR
    const { data: unitDoctors, error: unitDoctorsError } = useSWR(() => Unit ? `${api}api/website/unitDoctors/${Unit.id}` : null, fetchFromApi);

    // useEffect fun
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ` مدير ونائب ${name} `, description: textDescription, keywords: '....' })
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
                        {(unitDoctorsError || !unitDoctors) && <SkeletonLoader />}
                        {unitDoctors &&
                            <Board {...commonProps} dataBoard={unitDoctors} doctorKind={doctorKind} />
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

export default (ManagerDeputy)
