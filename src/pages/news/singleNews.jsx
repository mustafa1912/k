import React, { useEffect, useMemo, useState, } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// Lazy-loaded components
import LandScape from '../../components/SingleNews/LandScape/LandScape'
import SingleContent from '../../components/SingleNews/single-content/single_content'
import ParagraphNews from '../../components/SingleNews/ParagraphNews/ParagraphNews'
import Aside from '../../components/News/aside/aside'


function SingleNews({ api, t, i18n, langState, classification }) {
    const [dataSeo, setdataSeo] = useState([]);
    const { name } = useParams();
    const namepage = 'singelNews';
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);


    // Fetch news data using SWR
    const { data: dataNews, error: isErrorNews } = useSWR(`${api}api/website/news`, fetchFromApi);

    // Filter news based on the provided name
    const news = useMemo(() => {
        if (dataNews) return dataNews.find((item) => item.name_ar === name);
    }, [dataNews, name]);

    // Use SWR for fetching boss data
    const { data: paragraph, error: isErorParagraph } = useSWR(
        news ? `${api}api/website/allNews/${news.id}` : null,
        url => axios.get(url).then(res => res.data)
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        setdataSeo({ title: `${name}`, description: '....', keywords: '....' })
    }, [api, name]);



    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {news &&
                <React.Fragment>
                    <LandScape {...commonProps} />
                    <div className="container ">
                        <div className="row m-0">
                            <div className={`col-12 col-md-9 `}>
                                {/*  */}
                                {(isErrorNews || !dataNews) && <SkeletonLoader />}
                                {dataNews && (
                                    <SingleContent {...commonProps} news={news} />
                                )}

                                {(isErorParagraph || !paragraph) && <SkeletonLoader />}
                                {paragraph && (
                                    <ParagraphNews {...commonProps} paragraph={paragraph} namepage={namepage} />
                                )}

                            </div>
                            {/* siderbar */}
                            {(isErrorNews || !dataNews) && <SkeletonLoader />}
                            {dataNews && (
                                <Aside {...commonProps} news={dataNews} classification={classification} />
                            )}
                        </div>
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}



// Function to fetch data using axios
const fetchFromApi = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        throw error;
    }
};

export default (SingleNews)
