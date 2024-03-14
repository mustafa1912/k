import React, { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import AllNews from '../../components/News/AllNews/AllNews'


function News({ api, t, i18n, langState, textDescription, classification }) {
    const { category } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    const dataCatogrey = useMemo(() => {
        if (category)
            return classification.find((item) => item.name_ar === category);
        else
            return classification;
    }, [classification, category]);

    const { data: dataNews, error: isErrorNews } = useSWR(`${api}api/website/news`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: `${category ? ` أخبار ${category} ` : 'الأخبار'}`, description: textDescription, keywords: '....' });
    }, [category, textDescription]);


    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            {/*  */}
            {(isErrorNews || !dataNews) && <SkeletonLoader />}
            {dataNews && (
                <AllNews {...commonProps} news={dataNews} classification={classification} dataCatogrey={dataCatogrey} />
            )}
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

export default React.memo(News)
