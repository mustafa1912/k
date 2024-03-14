import React, { useEffect, useMemo, useState, } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import AllDean from '../../components/Head_Department/All_dean/All_dean'


function Pdf({ api, t, i18n, langState, textDescription, settiengs }) {
    const { namePdf } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);
    const nameSection = t('administrative')

    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }
    const plans = {
        OrganizationalChart: { "name": t('Organizational Chart') },
        AdministrativeApparatus: { "name": t('Administrative apparatus') }
    };

    const data = plans[namePdf]; // Default to the committee plan if name is not found

    // Fetch Institute officials and department heads using useSWR
    const { data: InstituteOfficialsAndDepartmentHeads, error: officialsError } = useSWR(
        `${api}api/website/InstituteOfficialsAndDepartmentHeads`,
        fetchFromApi
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: data.name, description: textDescription, keywords: '....' });
    }, [data.name, textDescription]);


    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <section className='container' style={{}}>
                {settiengs[namePdf] &&
                    <iframe width="100%" height="800px" src={imgSrc(settiengs[namePdf])} alt={data.name} title={data.name} />
                }
            </section>
            {(officialsError || !InstituteOfficialsAndDepartmentHeads) && <SkeletonLoader />}
            {InstituteOfficialsAndDepartmentHeads && (
                <AllDean
                    {...commonProps}
                    langState={langState}
                    nameSection={nameSection}
                    data={InstituteOfficialsAndDepartmentHeads}
                    settiengs={settiengs}
                />
            )}
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
