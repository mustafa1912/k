import React, { useEffect, useMemo, useState } from 'react'
import { Panel } from 'primereact/panel';
import { NavLink } from "react-router-dom";
import { Button } from 'primereact/button';
// Seo
import Seo from '../../seo/seo';
 // Lazy-loaded components
import Aside from '../../components/services/aside/aside'
import Landsacpe from '../../components/Department/Landsacpe/Landsacpe'


function Survey({ api, t, i18n, langState, textDescription }) {
    const dataSeo = { title: ` الاستبيانات `, description: textDescription, keywords: '....' }
    const commonProps = useMemo(() => ({ api, t, i18n, langState, dataSeo }), [api, t, i18n, langState, dataSeo]);
    const data = { "name_ar": "  الاستبيانات  ", };

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
                        <Panel className='mb-3' header=" ما هيه الاستبيان؟  " >
                            <p>
                                الاستبيان: هو عبارة عن مجموعة من الأسئلة التي تدور حول الفاعلية التعليمية والخدمات المقدمة للطلاب، ويتم تنفيذه الكترونياً من خلال موقع المعهد، وهو استبيان مغلق ويحدد نوعية الإجابة من اختيار متعدد هو: (موافق تماماً، موافق، موافق إلى حد ما، غير موافق، غير موافق تماماً).
                            </p>
                        </Panel>
                        <Panel className='mb-3' header=" أهمية الاستبيان:  ">
                            <p>
                                إن الاستبيان يعتبر أداة من الأدوات المهمة التي تستخدم في عدة أمور هي:
                            </p>
                            <ol className='px-3'>
                                <li className='mb-2'>
                                    يساعد الاستبيان إدارة المعهد على جمع بيانات الدراسة المهمة والضرورية للفاعلية التعليمية.
                                </li>
                                <li className='mb-2'>
                                    إن البيانات التي يوفرها الاستبيان للدراسة تتميز بأنها أكثر موضوعية من البيانات التي يتم توفيرها بواسطة أدوات أخرى، لأنه عاجة ما يكون غير حامل لأسم المجيب عليه، وهذا من شأنه أن يحفز أفراد عينة الاستبيان على تقديم الاجابات الموثوقة التي تدعم نتائج الاستبيان دون حذر أو خوف أو تحفظ.
                                </li>
                                <li className='mb-2'>
                                    تستطيع إدارة المعهد من خلال الاستبيان جمع بيانات شاملة ووافية لأهداف ونتائج لقياس رضا الطلاب.
                                </li>
                                <li className='mb-2'>
                                    تستطيع إدارة المعهد من خلال الاستبيان تقديم إجابات عن جميع أسئلة الاستبيان بعد تحليلها واتخاذ الإجراءات التصحيحية اللازمة.
                                </li>
                            </ol>
                        </Panel>
                        <div className='d-flex justify-content-end'>
                            <NavLink to={`${api}student/result/survey`} target='_blank' >
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

export default (Survey)
