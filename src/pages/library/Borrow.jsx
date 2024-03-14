import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landscape from '../../components/library/Landscape/Landscape';
import Form_borrow from '../../components/library/form_borrow/form_borrow';

function Borrow() {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: ' طلب استعارة  ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <Form_borrow />
        </React.Fragment>
    )
}

export default (Borrow)
