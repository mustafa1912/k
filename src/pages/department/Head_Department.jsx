import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Head from '../../components/Head_Department/head/head'
import TeamLeader from '../../components/Department/team_leader/team_leader'

function HeadDepartment({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' رئيس القسم ', description: `${datadepartment.notes}`, keywords: '....' });
    }, [api, name, datadepartment]);


    // Use SWR for fetching boss data
    const { data: boss, error: bossError } = useSWR(
        datadepartment ? `${api}api/website/bossOfDepartment/${datadepartment.id}` : null,
        url => axios.get(url).then(res => res.data)
    );


    if (bossError) {
        console.error('Error fetching boss data:', bossError);
    }

    const { data: doctor, error: doctorError } = useSWR(
        boss ? `${api}api/website/doctor/${boss.doctor_id}` : null,
        url => axios.get(url).then(res => res.data)
    );


    console.log(doctor)
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
                        {(bossError || !boss) && <SkeletonLoader />}
                        {boss && <TeamLeader dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

                        {(doctorError || !doctor) && <SkeletonLoader />}
                        {doctor && <Head {...commonProps} data={doctor} />}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (HeadDepartment)