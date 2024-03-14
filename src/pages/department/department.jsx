import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

import Seo from '../../seo/seo';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe';
import TeamLeader from '../../components/Department/team_leader/team_leader';
import LabWorkshops from '../../components/Department/LabWorkshops/LabWorkshops';
import Members from '../../components/Department/members/members';
import VisionMission from '../../components/Department/Vision_mission/Vision_mission';


function Department({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const Location = useLocation();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);
    const NamePage = t('Department')

    // data departments
    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // Fetch places using useSWR
    const { data: places, error: placesError } = useSWR(() => datadepartment ? `${api}api/website/places/${datadepartment.id}` : null, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: `${name}`, description: `${datadepartment.notes}`, keywords: '....' });
    }, [name, datadepartment]);

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {(!datadepartment) && <SkeletonLoader />}
            {datadepartment && <Landsacpe dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

            <div className='container'>
                <div className='row m-0'>
                    {/* Aside */}
                    {(!datadepartment) && <SkeletonLoader />}
                    {datadepartment && <Aside {...commonProps} data={datadepartment} />}
                    <div className='col-sm-9 mt-2'>
                        <Suspense fallback={<SkeletonLoader />}>
                            {(!datadepartment) && <SkeletonLoader />}
                            {datadepartment && <TeamLeader {...commonProps} data={datadepartment} />}
                            {(!datadepartment) && <SkeletonLoader />}
                            {datadepartment && <VisionMission {...commonProps} NamePage={NamePage} data={datadepartment} />}
                            {(placesError || !places) && <SkeletonLoader />}
                            {datadepartment && places && <Members {...commonProps} data={datadepartment} Location={Location} />}
                            {places && <LabWorkshops {...commonProps} data={places} />}
                        </Suspense>
                    </div>
                </div>
            </div>
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

export default (Department)
