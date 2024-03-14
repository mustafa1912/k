import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/News/landscape/landscape'
import Head from '../../components/Head_Department/head/head'
import Contact from '../../components/Head_Department/contact/contact'
import AllDean from '../../components/Head_Department/All_dean/All_dean'



function Manger({ api, t, i18n, langState, settiengs, textDescription }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const nameSection = t('administrative');
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    // مسؤلين المعهد
    const { data: personsSittings } = useSWR(`${api}api/website/personsSittings`, fetchFromApi);
    // كلمة عميد المعهد
    const { data: messageDean } = useSWR(`${api}api/website/messageOfDeanInstitute`, fetchFromApi);
    //مسولين المغعد+ رؤساء الاقسام
    const { data: InstituteOfficialsAndDepartmentHeads, error: officialsAndHeadsError } = useSWR(`${api}api/website/InstituteOfficialsAndDepartmentHeads`, fetchFromApi);

    const doctorState = {
        'dean': { name: t('Dean of the Institute'), id: personsSittings && personsSittings.Dean_of_the_Institute },
        'Institute_agent': { name: t('Vice Dean of the Institute for Education and Student Affairs'), id: personsSittings && personsSittings.Institute_agent },
        'Acting_Institute_agent': { name: t('Vice Dean of the Institute for Community Service and Research Affairs'), id: personsSittings && personsSittings.Acting_Institute_agent },
        'Responsible_for_students': { name: t('Graduate Studies Coordinator'), id: personsSittings && personsSittings.Graduate_Studies_Coordinator },
    }[name];

    // الدكتور
    const { data: manger, error: mangerError } = useSWR(doctorState.id ? `${api}api/website/doctor/${doctorState.id}` : null, fetchFromApi);

    useEffect(() => {
        setdataSeo({ title: doctorState.name, description: textDescription, keywords: '....' });
        window.scrollTo(0, 0);
    }, [api, doctorState.name, textDescription]);


    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landsacpe {...commonProps} />
            {(mangerError || !manger) && <SkeletonLoader />}
            {manger && <Head {...commonProps} messageDean={messageDean} data={manger} name={name} title={doctorState.name}  />}
            {manger && <Contact {...commonProps} data={manger} />}
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
        if (url) {
            const response = await axios.get(url);
            return response.data;
        }
        return null;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

export default (Manger)
