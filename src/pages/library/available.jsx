import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landscape from '../../components/library/Landscape/Landscape';
import Table_show from '../../components/library/table/table_show';

function Available() {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '  المكتبة   ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Table_show />
        </React.Fragment>
    )
}

export default (Available)