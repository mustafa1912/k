import React, { useState } from 'react'
import style_ar from './forms_services.module.css'
import style_en from './forms_services_en.module.css'
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
// import './../../../Schedule.css'
// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function FormServices({ dataSeo }) {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = [
        { name: '  الهندسة الكيميائية ', code: 'AU' },
        { name: '  الهندسة المعمارية ', code: 'BR' },
        { name: '  الهندسة المدنية ', code: 'CN' },
        { name: '  العلوم الأساسية ', code: 'EG' }
    ];
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };

    const data = [
        {
            Id: 1,
            Subject: 'Meeting',
            StartTime: new Date(2023, 11, 15, 10, 0),
            EndTime: new Date(2023, 11, 15, 12, 30),
        },
        {
            Id: 1,
            Subject: 'اجتماع مهم',
            StartTime: new Date(2023, 10, 16, 10, 0),
            EndTime: new Date(2023, 10, 16, 12, 0),
        },
        {
            Id: 2,
            Subject: 'ورشة العمل',
            StartTime: new Date(2023, 10, 17, 13, 0),
            EndTime: new Date(2023, 10, 17, 15, 0),
        },
    ];

    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.landscape}`}>
                <div className="container ">
                    <h2 className='text-center my-3'> {dataSeo.title} </h2>
                    <form>
                        <div className="row m-0">
                            <div className="col-sm-4">
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder=" اختر القسم "
                                        filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="p-inputtext-sm w-full md:w-14rem" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder=" اختر الفرقه   "
                                        filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="p-inputtext-sm w-full md:w-14rem" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="  اختر الفصل الدراسي "
                                        filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="p-inputtext-sm w-full md:w-14rem" />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <Button type="submit" label="  عرض " className='px-4' severity="info" size="small" />
                        </div>
                    </form>
                    {/* <ScheduleComponent
                        selectedDate={new Date(2023, 10, 16, 10, 0)}
                        eventSettings={{ dataSource: data, }} >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    </ScheduleComponent> */}
                </div>
            </section>

        </React.Fragment>
    )
}

export default FormServices
