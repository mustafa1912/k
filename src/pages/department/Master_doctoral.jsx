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
import Master from '../../components/Department/Tables/Master'
import TeamLeader from '../../components/Department/team_leader/team_leader'

function MasterDoctoral({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    let { name } = useParams();

    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // Use SWR for fetching boss data
    const { data: boss, error: bossError } = useSWR(
        datadepartment ? `${api}api/website/bossOfDepartment/${datadepartment.id}` : null,
        url => axios.get(url).then(res => res.data)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '  رسائل الماجستير والدكتوراه  ', description: `${datadepartment.notes}`, keywords: '....' });
    }, [api, name, datadepartment]);

    if (bossError) {
        console.error('Error fetching boss data:', bossError);
    }

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

                        {(bossError || !boss) && <SkeletonLoader />}
                        {boss && <Master {...commonProps} data={boss || []} />}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (MasterDoctoral)