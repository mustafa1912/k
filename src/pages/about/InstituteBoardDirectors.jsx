import React, { useEffect, useMemo, } from 'react'
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landscape from '../../components/News/landscape/landscape'
import Board from '../../components/about/Board/Board'
import AllDean from '../../components/Head_Department/All_dean/All_dean'



function InstituteBoardDirectors({ api, t, i18n, langState, settiengs, textDescription }) {
    const dataSeo = { title: `${t('Institute Board of Directors')}`, description: textDescription, keywords: '....' };
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    const nameSection = `${t('administrative')}`;

    // Fetch Institute officials and department heads using useSWR
    const { data: dataBoard, error: dataBoardError } = useSWR(`${api}api/website/InstituteBoardDirectors`, fetchFromApi);
    //مسولين المغعد+ رؤساء الاقسام
    const { data: InstituteOfficialsAndDepartmentHeads, error: officialsAndHeadsError } = useSWR(`${api}api/website/InstituteOfficialsAndDepartmentHeads`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            {(dataBoardError || !dataBoard) && <SkeletonLoader />}
            {dataBoard && <Board {...commonProps} dataBoard={dataBoard} />}

            {(officialsAndHeadsError || !InstituteOfficialsAndDepartmentHeads) && <SkeletonLoader />}
            {InstituteOfficialsAndDepartmentHeads && (
                <AllDean {...commonProps} nameSection={nameSection} data={InstituteOfficialsAndDepartmentHeads} settiengs={settiengs} />
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

export default (InstituteBoardDirectors)
