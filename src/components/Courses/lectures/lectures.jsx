import React, { useState } from 'react'
import style_ar from './lectures.module.css'
import style_en from './lectures_en.module.css'
import { Dialog } from 'primereact/dialog';
import { TabView, TabPanel } from 'primereact/tabview';
import axios from 'axios';
import book from '../../../assets/imgs/wired-outline-112-book.gif';
import book1 from '../../../assets/imgs/wired-outline-112-book (1).gif';
import clock from '../../../assets/imgs/wired-outline-45-clock-time.gif';
import chart from '../../../assets/imgs/wired-outline-153-bar-chart.gif';

function Lectures({ api, langState, data, groupedData, t, i18n }) {
    let style = langState ? style_ar : style_en
    const [visible, setVisible] = useState(false);
    const [subjectData, setsubjectData] = useState([]);

    const getSubjectData = (id) => {
        // SWR hooks for fetching department and subjects data
        axios.get(`${api}api/website/subject/${id}`)
            .then(function (response) {
                // handle success
                setsubjectData(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <React.Fragment>
            {data.length > 0 &&
                <section className={`${style.bg_section} my-4`}>
                    <div className="card">
                        <TabView className=''>
                            {groupedData.map((ElementgroupedData, index) => (
                                <TabPanel header={ElementgroupedData} key={index} className='px-0'>
                                    <div className='row m-0'>
                                        {data.map((Element, dataIndex) => (
                                            ElementgroupedData === Element.total_subject_estimates.name && (
                                                <div className='col-12 col-md-3 my-3' key={dataIndex}>
                                                    <div className={`${style.card_lecture} ${dataIndex % 2 !== 0 ? style.sec : ''} position-relative text-center p-2`} onClick={() => { getSubjectData(Element.id); setVisible(true) }} >
                                                        <span className={`${style.icon} rounded p-2`}>
                                                            <img
                                                                className={`${style.img} `} src={dataIndex % 2 !== 0 ? book1 : book} alt="" />
                                                        </span>
                                                        <h6 className={`${style.head} mt-3`}>
                                                            {langState ? Element.name : Element.nameEn}
                                                        </h6>
                                                        <span
                                                            className={`${style.hours} position-absolute top-0 start-0 translate-middle bg-danger border border-light text-light rounded-circle`}>
                                                            {Element.hours}
                                                        </span>
                                                        <button className={`${style.btn} btn btn-sm btn-outline-secondary p-2 w-100`} onClick={() => { getSubjectData(Element.id); setVisible(true) }}>عرض المزيد
                                                        </button>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </TabPanel>
                            ))}
                        </TabView>
                    </div>
                    <div className="flex justify-content-center"  >
                        <Dialog header={(langState ? subjectData.name : subjectData.nameEn)} visible={visible} onHide={() => setVisible(false)} className={`Dialog mt-3`}
                            breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                            <div className="card card-success mb-3">
                                <div className="card-header bg-success text-light">
                                    <h6 className="card-title mb-0"> بيانات اساسية </h6>
                                </div>
                                <div className="card-body p-2">
                                    <p> {subjectData.content} </p>
                                    <div className="row m-0">
                                        {[
                                            { label: 'كود المقرر', icon: 'wired-outline-742-code.gif', value: subjectData.code },
                                            { label: 'نوع المقرر', icon: 'wired-outline-112-book (1).gif', value: subjectData.term === '0' ? 'ممتدة' : subjectData.term === '1' ? 'ترم أول' : 'ترم ثاني' },
                                            { label: 'مادة لديها معمل', icon: 'wired-outline-1221-test-tubes.gif', value: subjectData.lab === 1 && 'معمل' },
                                            { label: 'نوع المادة', icon: 'wired-outline-112-book (2).gif', value: subjectData.human === 1 && 'إنسانية' },
                                            { label: 'نوع المادة', icon: 'wired-outline-970-video-conference.gif', value: subjectData.online === 0 && '' },
                                        ].map((item, index) => (
                                            item.value && (
                                                <div className="col-12 col-md-4 my-3" key={index}>
                                                    <div className={`${style.card_lecture} ${item.label === 'نوع المادة' && style.sec} position-relative text-center p-2`}>
                                                        <span className={`${style.icon} rounded p-2 my-2`}>
                                                            <img className={`${style.img_modal} `} src={`../../../assets/imgs/${item.icon}`} alt="" />
                                                            {/*   <img className={`${style.img_modal} `} src={require(`../../../assets/imgs/${item.icon}`)} alt="" /> */}
                                                        </span>
                                                        <h6 className={`mt-2`}>{item.label}</h6>
                                                        <h6 className={`mb-0`}>{item.value}</h6>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {(subjectData.term === '0' || subjectData.term === '1') &&
                                <div className="card card-info mb-3">
                                    <div className="card-header bg-info text-light">
                                        <h6 className="card-title mb-0"> بيانات الترم الاول  </h6>
                                    </div>
                                    <div className="card-body p-2">
                                        <div className='row m-0'>
                                            <div className='col-12 col-md-4 my-3'   >
                                                <div className={`${style.card_lecture} ${style.sec} position-relative text-center p-2`}   >
                                                    <span className={`${style.icon} rounded p-2 my-2`}>
                                                        <img className={`${style.img_modal} `} src={clock}
                                                            alt="" />
                                                    </span>
                                                    <h6 className={`mt-2`} > عدد الساعات الترم الاول </h6>
                                                    <h6 className={`mb-0`} > {subjectData.hours} </h6>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-4 my-3'   >
                                                <div className={`${style.card_lecture} position-relative text-center p-2`}   >
                                                    <span className={`${style.icon} rounded p-2 my-2`}>
                                                        <img className={`${style.img_modal} `} src={chart}
                                                            alt="" />
                                                    </span>
                                                    <h6 className={`mt-2`}> درجات الترم الاول </h6>
                                                    <h6 className={`mb-0`}> {parseFloat(subjectData.yearWork) + parseFloat(subjectData.quizzes) + parseFloat(subjectData.expOral) + parseFloat(subjectData.finalExam)} </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {(subjectData.term === '0' || subjectData.term === '2') &&
                                <div className="card card-warning mb-3">
                                    <div className="card-header bg-warning">
                                        <h6 className="card-title mb-0"> بيانات الترم الثاني  </h6>
                                    </div>
                                    <div className="card-body p-2">
                                        <div className='row m-0'>
                                            <div className='col-12 col-md-4 my-3'   >
                                                <div className={`${style.card_lecture}  position-relative text-center p-2`}   >
                                                    <span className={`${style.icon} rounded p-2 my-2`}>
                                                        <img className={`${style.img_modal} `} src={clock}
                                                            alt="" />
                                                    </span>
                                                    <h6 className={`mt-2`} > عدد الساعات الترم الثاني </h6>
                                                    <h6 className={`mb-0`} >   {subjectData.hours2}  </h6>
                                                </div>
                                            </div>
                                            <div className='col-12 col-md-4 my-3'   >
                                                <div className={`${style.card_lecture} ${style.sec} position-relative text-center p-2`}   >
                                                    <span className={`${style.icon} rounded p-2 my-2`}>
                                                        <img className={`${style.img_modal} `} src={chart}
                                                            alt="" />
                                                    </span>
                                                    <h6 className={`mt-2`} > درجات الترم الثاني </h6>
                                                    <h6 className={`mb-0`}> {parseFloat(subjectData.yearWork2) + parseFloat(subjectData.quizzes2) + parseFloat(subjectData.expOral2) + parseFloat(subjectData.finalExam2)} </h6>                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </Dialog>
                    </div>
                </section>
            }
        </React.Fragment>
    )
}


export default Lectures
