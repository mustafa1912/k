import React, { useEffect, useMemo, useState, } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import TeamLeader from '../../components/Department/team_leader/team_leader'
import WorkshopsSeminars from '../../components/Workshops_Seminars/Workshops_Seminars'

function ScientificTrips({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // Use SWR for fetching trip data
    const { data: trip, error: tripError } = useSWR(
        datadepartment ? `${api}api/website/trip/${datadepartment.id}` : null,
        url => axios.get(url).then(res => res.data)
    );

    // console.log(trip)
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' الرحلات العلميه ', description: `${datadepartment.notes}`, keywords: '....' })
    }, [api, name, datadepartment]);


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
                    {/* end Aside  */}

                    <div className='col-sm-9 mt-2'>
                        {(tripError || !trip) && <SkeletonLoader />}
                        {trip && <TeamLeader dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

                        {(tripError || !trip) && <SkeletonLoader />}
                        {trip && <WorkshopsSeminars dataSeo={dataSeo} {...commonProps} data={trip} />}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (ScientificTrips)
