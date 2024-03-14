import React, { useEffect, useMemo, } from 'react'
import useSWR from 'swr';
import axios from 'axios';

import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import Lanscape from '../../components/about/lanscape/lanscape'
import Vision from '../../components/about/vision/vision'
import Gallery from '../../components/about/Gallery/Gallery'
import News from '../../components/about/News/News'
import AcademicDegrees from '../../components/home/Departments/Departments'
import AllDean from '../../components/Head_Department/All_dean/All_dean'



function About({ api, t, i18n, langState, textDescription, settiengs, departments, classification }) {
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    const dataSeo = { title: t('About institute'), description: textDescription, keywords: '....' };
    const nameSection = t('administrative')

    // Fetch last news using useSWR
    const { data: news, error: newsError } = useSWR(`${api}api/website/lastNews`, fetchFromApi);

    // Fetch Institute officials and department heads using useSWR
    const { data: InstituteOfficialsAndDepartmentHeads, error: officialsError } = useSWR(`${api}api/website/InstituteOfficialsAndDepartmentHeads`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Gallery {...commonProps} langState={langState} settiengs={settiengs} />
            <Lanscape {...commonProps} langState={langState} settiengs={settiengs} />
            <Vision {...commonProps} langState={langState} settiengs={settiengs} />
            <AcademicDegrees  {...commonProps} langState={langState} data={departments} />
            {(officialsError || !InstituteOfficialsAndDepartmentHeads) && <SkeletonLoader />}
            {InstituteOfficialsAndDepartmentHeads && (
                <AllDean {...commonProps} langState={langState} nameSection={nameSection} data={InstituteOfficialsAndDepartmentHeads} settiengs={settiengs} />
            )}
            {(newsError || !news) && <SkeletonLoader />}
            {news && <News {...commonProps} langState={langState} news={news} classification={classification} />}
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

export default (About)
