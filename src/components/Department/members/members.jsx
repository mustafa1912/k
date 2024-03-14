import React, { useEffect, useRef, useState } from 'react'
import useSWR from 'swr';
import style_ar from './members.module.css'
import style_en from './members_en.module.css'
import { Paginator } from 'primereact/paginator';
import { NavLink } from 'react-router-dom';
import img from '../../../assets/imgs/wired-outline-268-avatar-man.webp';

function Members({ api, t, i18n, langState, data, namePage, Location }) {
    let style = langState ? style_ar : style_en
    const apiUrl = `${api}api/website/staff/Departments/${data.id}`;
    const [arrayLength, setArrayLength] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const sectionRef = useRef(null); // Ref for the section to scroll to
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);


    const onPageChange = (event) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section     
        setFirst(event.first);
        setRows(event.rows);
    };

    const fetcher = async (url) => {
        const response = await fetch(url);
        return response.json();
    };

    const { data: staffMembers } = useSWR(apiUrl, fetcher);


    //  get url photo
    const imgSrc = (photo) => {
        return (api + 'public//storage/' + photo.replace('public', ''))
    }

    // SocialMedia
    const SocialMediaIcon = ({ to, iconClass, SocialClass, target }) => (
        to && (
            <div className={`col-4 col-sm-4 col-md-2 my-2`}>
                <NavLink to={to} className={`icon Btn`} target={target}>
                    <span className={`svgContainer`}  >
                        <i className={iconClass}></i>
                    </span>
                    <span className={`BG ${SocialClass}`}  ></span>
                </NavLink>
            </div>
        )
    );

    useEffect(() => {
        if (staffMembers && staffMembers.length > 0) {
            const isDoctorPage = Location.pathname.includes('doctors');
            const isAssistantDoctorPage = Location.pathname.includes('AssistantDoctor');
            // Filter condition using a ternary operator
            // علشان احدد أعضاء هيئة التدريس معاونة || الدكاتره المعنين و المعار بس )(kind )
            const filterCondition = isDoctorPage
                ? (item) => item.kind === '1' && (item.type === 1 || item.type === 2)
                : isAssistantDoctorPage
                    ? (item) => item.kind === '2'
                    : (item) => (item.kind === '1' && (item.type === 1 || item.type === 2)) || item.kind === '2';

            const filteredData = staffMembers.filter(filterCondition);
            setArrayLength(filteredData.length);
            setDoctors(filteredData.slice(first, first + rows));
        }
    }, [Location, staffMembers, first, rows]);


    const degreeMapping = {
        1: langState ? "أ.د/" : "Mr. Dr/",
        2: langState ? "أ.م.د/" : "A.M.D/",
        3: langState ? "د/" : "D/",
        4: langState ? "م.م/" : "M.M/",
        5: langState ? "م/ " : "M/",
        6: langState ? "م/ " : "M/",
        7: langState ? "م.م/" : "M.M/",
    };

    return (
        <React.Fragment>
            <section className={`${style.members} p-2 py-3 my-4`} ref={sectionRef}>
                <div className={`${style.member_title} mx-auto text-center pb-4`}>
                    <h2 className={`${style.head} `} >
                        {Location.pathname.includes('doctors') ? t('department-teacher') : t('department-assistant')}
                    </h2>
                </div>
                <div className="container px-0 px-sm-2">
                    <div className="row m-0 mt-5">
                        {doctors.map((Element, index) => (
                            <div className={`${style.member_content} row align-items-center m-0 position-relative right my-3`} key={index}>
                                <div className={`${style.member_info} col-12 col-md-9`} >
                                    <NavLink to={`/doctor/${Element.name_ar}`} >
                                        <h4 className={`${style.name_title}`}>
                                            {degreeMapping[Element.degree] || "أ /"} {langState ? Element.name_ar : Element.name_en}
                                        </h4>
                                        <p className={`${style.des}`}> {Element.websiteWords} </p>
                                    </NavLink>
                                    <div className="row m-0">
                                        <SocialMediaIcon to={Element.facebook} SocialClass={`facebook`} target='_blank' iconClass='fa-brands fa-square-facebook rounded' />
                                        <SocialMediaIcon to={'https://wa.me/' + Element.tel} SocialClass={`whatsapp`} target='_blank' iconClass="  fa-brands fa-whatsapp rounded" />
                                        <SocialMediaIcon to={Element.linkedIn} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-linkedin rounded" />
                                        <SocialMediaIcon to={Element.twitter} SocialClass={`twitter`} target='_blank' iconClass="  fa-brands fa-twitter rounded" />
                                        <SocialMediaIcon to={'mailto:' + Element.email} SocialClass={`mail`} iconClass="  fa-regular fa-solid fa-envelope rounded" />
                                        <SocialMediaIcon to={Element.instagram} SocialClass={`instagram`} target='_blank' iconClass="  fa-brands fa-instagram rounded" />
                                        <SocialMediaIcon to={Element.tiktok} SocialClass={`tiktok`} target='_blank' iconClass="  fa-brands fa-tiktok rounded" />
                                    </div>
                                    <hr></hr>
                                </div>
                                <div className={`${style.member_img} col-12 col-md-3`} >
                                    <NavLink to={`/doctor/${Element.name_ar}`} >
                                        {Element.photo ? (
                                            <img src={imgSrc(Element.photo)}
                                                className={`${style.img} w-100`}
                                                alt={langState ? Element.name_ar : Element.name_en}
                                                title={langState ? Element.name_ar : Element.name_en} ></img>
                                        ) :
                                            <img src={img}
                                                className={`${style.img} w-100`}
                                                alt={langState ? Element.name_ar : Element.name_en}
                                                title={langState ? Element.name_ar : Element.name_en} ></img>
                                        }
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                    </div>
                    {arrayLength >= 10 ? <Paginator first={first} rows={rows} totalRecords={Math.ceil(arrayLength) + 0} onPageChange={onPageChange} /> : ''}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Members
