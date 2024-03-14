import React, { useEffect, useMemo, useState, Suspense } from 'react'
import useSWR from 'swr';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe';
import InfoDoctor from '../../components/Department/doctor/InfoDoctor';

function Doctor({ api, t, i18n, departments, langState }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);

    // Use SWR for fetching doctor data
    const { data: doctor, error: doctorError } = useSWR(`${api}api/website/doctors`,
        url => axios.get(url).then(res => res.data.find(ele => ele.name_ar === name))
    );

    // Use SWR for fetching additional data related to the doctor
    // // ابحاث اعضاء هيئة التدريس
    const { data: searches, error: searchesError } = useSWR(
        doctor ? `${api}api/website/staff/Searches/${doctor.id}` : null, url => axios.get(url).then(res => res.data));
    // //  المؤهلات العلميه 
    const { data: qulification, error: qulificationError } = useSWR(
        doctor ? `${api}api/website/staff/Qulification/${doctor.id}` : null, url => axios.get(url).then(res => res.data));
    // //الخبرات العلميه 
    const { data: experience, error: experienceError } = useSWR(
        doctor ? `${api}api/website/staff/Experience/${doctor.id}` : null, url => axios.get(url).then(res => res.data));
    // // الانجازات التطبيقة
    const { data: achievement, error: achievementError } = useSWR(
        doctor ? `${api}api/website/staff/Achievement/${doctor.id}` : null, url => axios.get(url).then(res => res.data));
    // قسم الدكتور 
    const datadepartment = useMemo(() => {
        if (doctor) {
            return departments.find(ele => ele.id === doctor.department_id) || null;
        }
        return null;
    }, [doctor, departments]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: name, description: '....', keywords: '....' });
    }, [name]);

    if (doctorError || searchesError || qulificationError || experienceError || achievementError) {
        console.error('Error fetching data:', doctorError || searchesError || qulificationError || experienceError || achievementError);
        // Handle error as needed
    }

    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {(!datadepartment) && <SkeletonLoader />}
            {datadepartment && <Landsacpe dataSeo={dataSeo} {...commonProps} data={datadepartment} />}
            {(doctorError || !doctor) && <SkeletonLoader />}
            {(!datadepartment) && <SkeletonLoader />}
            <Suspense fallback={<SkeletonLoader />}>
                <InfoDoctor {...commonProps} data={doctor} datadepartment={datadepartment} searches={searches || []} qulification={qulification || []} experience={experience || []} achievement={achievement || []} />
            </Suspense>
        </React.Fragment>
    )
}

export default (Doctor)
