import React, { useEffect, useMemo } from 'react';
import axios from 'axios';
import useSWR from 'swr';

// Seo
import Seo from '../../seo/seo';

// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import Politics from '../../components/Politics/Politics'

function EvidenceAndPolicy({ api, t, i18n, langState, textDescription }) {
    const dataSeo = { title:  t('Documents-policies and mechanisms'), description: textDescription, keywords: '....' }
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    // Fetch last news using useSWR
    const { data: mechanismsPolicie, } = useSWR(`${api}api/website/MechanismsPolicie`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Politics {...commonProps} data={mechanismsPolicie} dataSeo={dataSeo} />
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

export default (EvidenceAndPolicy)
