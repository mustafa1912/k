import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landscape from '../../components/News/landscape/landscape'
import Polices from '../../components/Student/Polices/Polices';
import Institute_sys from '../../components/Student/Institute_sys/Institute_sys';
import Institute_info from '../../components/Student/inst-system/Institute_info';
function Student() {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' خدمات الطلاب  ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Polices />
            <Institute_sys />
            <Institute_info />
        </React.Fragment>
    )
}

export default (Student)
