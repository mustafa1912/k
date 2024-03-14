import React, { useEffect, useMemo, useState, Suspense } from 'react'
import useSWR from 'swr';
import axios from 'axios';

// Seo
import Seo from '../../seo/seo';
import SkeletonLoader from '../Loader/SkeletonLoader';
// components
// Lazy-loaded components
import Landscape from '../../components/home/Landscape/Landscape';
import AllDean from '../../components/Head_Department/All_dean/All_dean';
import Manger from '../../components/home/Manger/Manger';
import Counter from '../../components/home/counter/counter';
import Departments from '../../components/home/Departments/Departments';
import Features from '../../components/home/Features/Features';
import News from '../../components/home/news/news';
import Units from '../../components/home/Units/Units';
import Events from '../../components/home/events/events';
import Opinions from '../../components/home/opinions/opinions';
import Content from '../../components/contact/Content/Content';

function Home({ api, t, i18n, langState, textDescription, settiengs, departments, units, classification }) {
    const [viewDepartments, setdviewDepartments] = useState([])
    const commonProps = useMemo(() => ({ api, t, i18n, langState }), [api, t, i18n, langState]);
    const dataSeo = { title: ` ${t('Home')}`, description: textDescription, keywords: '....' };
    const namePage = 'Home';
    const nameSection = `${t('administrative')}`

    // Fetch sliders using useSWR
    const { data: sliders, error: slidersError } = useSWR(`${api}api/website/sliders`, fetchFromApi);
    // Fetch sliders using useSWR
    const { data: InstituteOfficialsAndDepartmentHeads, error: InstituteOfficialsAndDepartmentHeadsError } = useSWR(`${api}api/website/InstituteOfficialsAndDepartmentHeads`, fetchFromApi);
    // Fetch message of the dean using useSWR
    const { data: messageDean, error: messageDeanError } = useSWR(`${api}api/website/messageOfDeanInstitute`, fetchFromApi);
    // Fetch webCounts using useSWR
    const { data: webCounts, error: webCountsError } = useSWR(`${api}api/website/webCounts`, fetchFromApi);
    // Fetch Opinion using useSWR
    const { data: Opinion, error: OpinionError } = useSWR(`${api}api/website/Students/Opinion`, fetchFromApi);
    // Fetch features using useSWR
    const { data: features, error: featuresError } = useSWR(`${api}api/website/features`, fetchFromApi);
    // Fetch events   using useSWR
    const { data: events, error: eventsError } = useSWR(`${api}api/website/events`, fetchFromApi);
    // Fetch important links using useSWR
    const { data: importantLinks, error: importantLinksError } = useSWR(`${api}api/website/importantLinks`, fetchFromApi);
    // Fetch last news using useSWR
    const { data: news, error: newsError } = useSWR(`${api}api/website/lastNews`, fetchFromApi);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Use filter to filter items where program is equal to 0
        const filteredDepartments = departments.filter(item => item.program === 1);
        setdviewDepartments(filteredDepartments);
    }, [departments]);



    return (
        <div>
            <Seo dataSeo={dataSeo} />
            <Suspense fallback={<SkeletonLoader />}>
                {(slidersError || !sliders) && <SkeletonLoader />}
                {sliders && (
                    <Landscape {...commonProps} settiengs={settiengs} sliders={sliders} />
                )}
                {(InstituteOfficialsAndDepartmentHeadsError || !InstituteOfficialsAndDepartmentHeads) && <SkeletonLoader />}
                {InstituteOfficialsAndDepartmentHeads && (
                    <AllDean {...commonProps} nameSection={nameSection} data={InstituteOfficialsAndDepartmentHeads} settiengs={settiengs} />
                )}
                {/*  */}
                {(messageDeanError || !messageDean) && <SkeletonLoader />}
                {messageDean && (
                    <Manger api={api} t={t} i18n={i18n} langState={langState} messageDean={messageDean} />
                )}
                {/*  */}
                {(webCountsError || !webCounts) && <SkeletonLoader />}
                {webCounts && (
                    <Counter {...commonProps} data={webCounts} />
                )}
                <Departments {...commonProps} data={viewDepartments} />
                {/*  */}
                {(OpinionError || !Opinion) && <SkeletonLoader />}
                {Opinion && (
                    <Opinions {...commonProps} data={Opinion} />
                )}
                {/*  */}
                {(featuresError || !features) && <SkeletonLoader />}
                {features && (
                    <Features {...commonProps} features={features} />
                )}
                {/* */}
                {(newsError || !news) && <SkeletonLoader />}
                {news && (
                    <News api={api} t={t} i18n={i18n} langState={langState} news={news} classification={classification} />
                )}
                {/*  */}
                <Units {...commonProps} units={units} />
                <Counter {...commonProps} nameSection={nameSection} />

                {((importantLinksError && eventsError) || (!importantLinks && !events)) && <SkeletonLoader />}
                {importantLinks && events && (
                    <Events {...commonProps} importantLinks={importantLinks} data={events} />
                )}
                <Content {...commonProps} namePage={namePage} langState={langState} />
            </Suspense>
        </div>
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
export default (Home) 
