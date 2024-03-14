import React, { useEffect, useState } from 'react'
// Seo
import Seo from '../../seo/seo';
import Landscape from '../../components/library/Landscape/Landscape';
import FormBorrow from '../../components/library/form_borrow/form_borrow';

function AvailableForm() {
    const [dataSeo, setdataSeo] = useState([])
    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: '   طلب توفير كتاب   ', description: '....', keywords: '....' })
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            <Landscape />
            <FormBorrow />
        </React.Fragment>
    )
}

export default (AvailableForm)
