import React, { useEffect, useMemo, } from 'react'
import axios from 'axios';
import useSWR from 'swr';

import Seo from '../../seo/seo';
 // Lazy-loaded components
import Landsacpe from '../../components/contact/Landsacpe/Landsacpe'
import JobForm from '../../components/Job/JobForm'

function Job({ api, t, i18n, langState, textDescription, settiengs }) {
    const dataSeo = { title: ' طلب تقدم لوظيفة ', description: textDescription, keywords: '....' };
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    // Fetch mainClassification using useSWR
    const { data: DepartmentsAdministrative, error: DepartmentsAdministrativeError } = useSWR(`${api}api/website/DepartmentAdministrative`, fetchFromApi);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [api, DepartmentsAdministrative]);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landsacpe />
            {!DepartmentsAdministrativeError &&
                <JobForm dataSeo={dataSeo}{...commonProps} DepartmentsAdministrative={DepartmentsAdministrative} settiengs={settiengs} />
            }
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


export default (Job)
