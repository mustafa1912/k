import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import TableImportant1 from '../../components/Department/Tables/Table_important1'
import TableImportant2 from '../../components/Department/Tables/Table_important2'


function Important({ api, t, i18n, textDescription, units, langState }) {
    const { name } = useParams();
    const [dataSeo, setDataSeo] = useState({ title: '', description: '', keywords: '' });
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    const plans = useMemo(() => ({
        applications: { name_ar: "نموذج الهامة", name_en: "Important model", url: "FormsAndApplications" },
        sites: { name_ar: "المواقع الهامة", name_en: "Important Sites", url: "importantSites" },
        Protocols: { name_ar: "بروتوكولات تعاون", name_en: "FormsAnd Applications", url: "WebCooperationProtocols" },
        Conferences: { name_ar: "المؤتمرات العلمية", name_en: "Scientific conferences", url: "WebScientificConferences" }
    }), []);

    const data = plans[name] || plans.applications;

    const { data: important, error: importantError } = useSWR(`${api}api/website/${data.url}`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
        setDataSeo({ title: data.name_ar, description: textDescription, keywords: '....' });
    }, [data, textDescription]);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            {(importantError) && <SkeletonLoader />}
            {important && (name === 'Protocols' || name === 'Conferences') ? (
                <TableImportant1 dataSeo={dataSeo} {...commonProps} data={important} />
            ) :
                <TableImportant2 dataSeo={dataSeo} {...commonProps} data={important} />
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

export default (Important)
