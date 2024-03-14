import React, { useEffect, useMemo } from 'react'
import axios from 'axios';
import useSWR from 'swr';
// Seo
import Seo from '../../seo/seo';
// Lazy-loaded components
import Landsacpe from '../../components/contact/Landsacpe/Landsacpe'
import SuggestionsComplaintsForm from '../../components/contact/Content/SuggestionsComplaintsForm'


function SuggestionsComplaints({ api, t, i18n, langState, textDescription, settiengs }) {
    const dataSeo = { title: ' مقترحات وشكاوي ', description: textDescription, keywords: '....' }
    const commonProps = useMemo(() => ({ api, t, i18n, langState, settiengs }), [api, t, i18n, langState, settiengs]);
    // Fetch mainClassification using useSWR
    const { data: mainClassification, error: mainClassificationError } = useSWR(`${api}api/website/MainComplaintsSuggestions`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [api, mainClassification, textDescription]);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landsacpe />
            {!mainClassificationError &&
                <SuggestionsComplaintsForm  {...commonProps} dataSeo={dataSeo} mainClassification={mainClassification} />
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

export default SuggestionsComplaints
