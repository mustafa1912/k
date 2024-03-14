import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landscape from '../../components/library/Landscape/Landscape';
import Information from '../../components/library/Information/information';

function Library() {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '  المكتبة   ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Information />
        </React.Fragment>
    )
}

export default (Library)
