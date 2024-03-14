import React, { useEffect, useMemo, useState, Suspense } from 'react'
import { useParams, useLocation } from 'react-router-dom';
// Seo
import Seo from '../../seo/seo';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe';
import Members from '../../components/Department/members/members';
import TeamLeader from '../../components/Department/team_leader/team_leader';

function Doctors({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState({});
    const { name } = useParams();
    const Location = useLocation();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    const datadepartment = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const seoData = Location.pathname.includes('doctors')
            ? { title: 'أعضاء هيئة التدريس المعينين بالقسم', description: `${datadepartment.notes}`, keywords: '....' }
            : { title: 'أعضاء هيئة التدريس معاونة', description: `${datadepartment.notes}`, keywords: '....' };

        setdataSeo(seoData);
    }, [name, Location, datadepartment]);



    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <React.Fragment>
                {(!datadepartment) && <SkeletonLoader />}
                {datadepartment && <Landsacpe dataSeo={dataSeo} {...commonProps} data={datadepartment} />}

                <div className='container'>
                    <div className='row m-0'>
                        {/* Aside */}
                        {(!datadepartment) && <SkeletonLoader />}
                        {datadepartment && <Aside {...commonProps} data={datadepartment} />}
                        {/* end Aside  */}

                        <div className='col-sm-9 mt-2'>
                            <Suspense fallback={<SkeletonLoader />}>
                                {(!datadepartment) && <SkeletonLoader />}
                                {datadepartment && <TeamLeader {...commonProps} data={datadepartment} />}

                                {(!datadepartment) && <SkeletonLoader />}
                                {datadepartment && <Members {...commonProps} data={datadepartment} Location={Location} />}
                            </Suspense>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    )
}

export default (Doctors)
