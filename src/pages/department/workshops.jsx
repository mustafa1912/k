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
import WorkshopsSeminars from '../../components/Workshops_Seminars/Workshops_Seminars'
import TeamLeader from '../../components/Department/team_leader/team_leader' 


function Workshops({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    let { name } = useParams();

    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // Use SWR for fetching workshops
    const { data: Workshops, error: workshopsError } = useSWR(
        datadepartment ? `${api}api/website/seminar/${datadepartment.id}` : null,
        url => axios.get(url).then(res => res.data)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' الندوات والورش  ', description: `${datadepartment.notes}`, keywords: '....' });
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
                        {(workshopsError || !Workshops) && <SkeletonLoader />}
                        {Workshops && <TeamLeader dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

                        {(workshopsError || !Workshops) && <SkeletonLoader />}
                        {Workshops && <WorkshopsSeminars dataSeo={dataSeo} {...commonProps} data={Workshops} />}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (Workshops)
