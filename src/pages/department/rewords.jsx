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
import TableRewords from '../../components/Department/Tables/Table_rewords'
import TeamLeader from '../../components/Department/team_leader/team_leader'


function Rewords({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);


    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // Use SWR for fetching rewords data
    const { data: rewords, error: rewordsError } = useSWR(
        datadepartment ? `${api}api/website/WebDepartmentPublishReword/${datadepartment.id}` : null,
        url => axios.get(url).then(res => res.data)
    );

    // console.log(rewords)
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' جوائز النشر ', description: `${datadepartment.notes}`, keywords: '....' })
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
                        {(!datadepartment) && <SkeletonLoader />}
                        {datadepartment && <TeamLeader dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

                        {(rewordsError || !rewords) && <SkeletonLoader />}
                        {rewords && <TableRewords dataSeo={dataSeo} {...commonProps} data={rewords} />}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default React.memo(Rewords)

