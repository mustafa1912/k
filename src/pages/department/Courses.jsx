import React, { useEffect, useMemo, useState, } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import Aside from '../../components/Department/aside/aside';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'
import Lectures from '../../components/Courses/lectures/lectures'
import TeamLeader from '../../components/Department/team_leader/team_leader'

function CoursesPage({ api, t, i18n, departments, langState }) {
    const { name } = useParams();
    const [dataSeo, setdataSeo] = useState([]);
    const [datadepartment, setDatadepartment] = useState([]);
    const [groupedData, setGroupedData] = useState([]);
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);

    // Memoized departmentData using useMemo
    const departmentData = useMemo(() => {
        return departments.find((department) => department.name_ar === name);
    }, [departments, name]);

    // SWR hooks for fetching department and subjects data
    const { data: subjectsData, error: subjectsError } = useSWR(departmentData ? `${api}api/website/departmentSubjects/${departmentData.id}` : null, fetcher);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' المقررات الدراسية والمتطلبات ', description: `${datadepartment.notes}`, keywords: '....' });

        // Set department data
        if (departmentData) {
            setDatadepartment(departmentData);
        }

        // Set unique subjects data
        if (subjectsData) {
            const uniqueSubjects = [...new Set(subjectsData.map(element => element.total_subject_estimates.name))];
            setGroupedData(uniqueSubjects);
        }
    }, [api, departmentData, subjectsData, name, datadepartment]);

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
                        <TeamLeader {...commonProps} data={datadepartment} />
                        {(subjectsError || !subjectsData) && <SkeletonLoader />}
                        {subjectsData ?
                            <Lectures {...commonProps} data={subjectsData} groupedData={groupedData} /> : (<SkeletonLoader />)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

// SWR fetcher function for general data fetching
const fetcher = async (url) => {
    const response = await Axios.get(url);
    return response.data;
};

export default (CoursesPage)    
