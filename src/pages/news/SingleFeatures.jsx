import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import ParagraphNews from '../../components/SingleNews/ParagraphNews/ParagraphNews'


function SingleFeatures({ api, t, i18n, langState, textDescription }) {
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    const namepage = 'singelFeatures';
    const { name } = useParams();
    const { id } = useParams();

    // Fetch features using useSWR
    const { data: features, error: featuresError } = useSWR(`${api}api/website/supFeatures/${id}`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: name, description: textDescription, keywords: '....' })
    }, [name, textDescription]);

    return (
        <div>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            {(featuresError || !features) && <SkeletonLoader />}
            {features && (
                <section className='container'>
                    <ParagraphNews dataSeo={dataSeo} {...commonProps} paragraph={features} namepage={namepage} />
                </section>
            )}
        </div>
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
export default (SingleFeatures)
