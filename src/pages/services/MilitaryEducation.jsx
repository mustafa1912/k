import React, { useEffect, useMemo } from 'react'
import { Panel } from 'primereact/panel';
import { NavLink } from "react-router-dom";
import { Button } from 'primereact/button';
// Seo
import Seo from '../../seo/seo';
// Lazy-loaded components
import Aside from '../../components/services/aside/aside'
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'


function MilitaryEducation({ api, t, i18n, textDescription, langState }) {
    const dataSeo = { title: ` التربيه العسكريه `, description: textDescription, keywords: '....' };
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);
    const data = { "name_ar": "  التربيه العسكريه  ", };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <React.Fragment>
            <Seo dataSeo={dataSeo} />
            {<Landsacpe dataSeo={dataSeo} {...commonProps} data={data} />}
            <div className='container'>
                <div className='row m-0'>
                    {/* Aside */}
                    <Aside {...commonProps} />
                    {/* end Aside  */}
                    <div className='col-sm-9 mt-2'>
                        <Panel className='mb-3' header=" أهداف التربية العسكرية " >
                            <ol className='px-3'>
                                <li className='mb-2'>
                                    تنمية روح الولاء والانتماء للوطن وترسيخ الروح الوطنية لدى الطلاب
                                </li>
                                <li className='mb-2'>
                                    تأهيل الطلاب بدنياً ونفسياً للاستعداد للانخراط فى الخدمة الوطنية طبقاً للمراحل التجنيدية المختلفة .
                                </li>
                                <li className='mb-2'>
                                    تعريف الطلاب بأهمية دراسة التاريخ العسكرى ، وذلك عن طريق محاضرات موثقة للتاريخ المشرف للعسكرية المصرية
                                </li>
                                <li className='mb-2'>
                                    تهيئة الطلاب للتأقلم على الحياة العسكرية مبكراً مما يساعدهم على الالتزام والانضباط الذاتى .
                                </li>
                                <li className='mb-2'>
                                    تنمية روح الفريق ، والعمل الجماعى فى مراحل التعليم الأولى والعروض العسكرية .
                                </li>
                                <li className='mb-2'>
                                    تنمية روح الإبداع والبحث العلمى ، وذلك من خلال البحوث الفكرية التى تقدم فى نهاية الدورات العسكرية
                                </li>
                                <li className='mb-2'>
                                    توعية الطلاب وتعريفهم بدور القوات المسلحة في أعمال التنمية داخل الدولة لدفع عجلة التنمية ومساعدة الاقتصاد المصري علي النهوض
                                </li>
                            </ol>
                        </Panel>
                        <Panel className='mb-3' header="  التعليمات والأوامر المستديمة لحضور دورات التربية العسكرية   ">
                            <ol className='px-3'>
                                <li className='mb-2'>
                                    الالتزام بتوقيتات إنعقاد الدورة .
                                </li>
                                <li className='mb-2'>
                                    تنفيذ الأوامر والتعليمات المستديمة الصادرة من إدارة التربية العسكرية بجامعة المنوفية وأي تعليمات أخري تصدر في حينه .
                                </li>
                                <li className='mb-2'>
                                    عدم حمل التليفون المحمول سواء مفتوحا أو مغلقا أثناء انعقاد الدورة .
                                </li>
                                <li className='mb-2'>
                                    حلاقة الذقن والشعر وارتداء بنطلون كحلي وقميص لبني .
                                </li>
                                <li className='mb-2'>
                                    عدم تخطي نسبة غياب 25% من الدورة وفي حالة تخطيها يتم إلغاء الدورة .
                                </li>
                                <li className='mb-2'>
                                    في حالة وجود أي أمراض مزمنة أو معدية تؤثر علي اللياقة الطبية للطالب وتمنعه من أداء التربية العسكرية (العملي - النظري) يجب على الطالب الحصول على شهادة من الادارة الطبية بادارة الجامعة تفيد بالحالة الصحية له ومدي لياقته الصحية .
                                </li>
                                <li className='mb-2'>
                                    عدم الالتزام بتنفيذ التعليمات السابقة يتم إلغاء الدورة وتعتبر مرة رسوب وفقا للائحة الصادرة من جامعة طنطا بذات الشأن .
                                </li>
                            </ol>
                        </Panel>
                        <div className='d-flex justify-content-end'>
                            <NavLink to={`${api}student`} target='_blank' >
                                <Button severity="info" size="small" text raised >
                                    <span className="fs-6 text-secondary" >   المزيد ... </span>
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default (MilitaryEducation)
