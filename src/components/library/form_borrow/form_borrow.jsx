import React, { useState } from 'react'
import style_ar from './form_borrow.module.css'
import style_en from './form_borrow_en.module.css'
import { useTranslation } from 'react-i18next';
import Links from '../links/links';
import { InputText } from 'primereact/inputtext';
 import { MultiSelect } from 'primereact/multiselect';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
 function FormBorrow() {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState('');
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: ' اسم الكتاب  ', code: 'NY' },
        { name: ' اسم الكتاب ', code: 'RM' },
        { name: ' اسم الكتاب ', code: 'LDN' },
        { name: ' اسم الكتاب ', code: 'IST' },
        { name: ' اسم الكتاب ', code: 'PRS' }
    ]; const [date, setDate] = useState(null);

    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en
    return (
        <React.Fragment>
            <section className={`${style.library_information} library_information my-5`}   >
                <div className="container">
                    <div className="row m-0 justify-content-evenly">
                        <div className="col-12 col-md-6">
                            <form>
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText className="p-inputtext-sm" placeholder=" الاسم " />
                                </div>
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-id-card"></i>
                                    </span>
                                    <InputText  className="p-inputtext-sm" value={value} onValueChange={(e) => setValue(e.value)} placeholder=" الرقم القومي " />
                                </div>
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-id-card"></i>
                                    </span>
                                    <InputText  className="p-inputtext-sm" value={value2} onValueChange={(e) => setValue2(e.value)} placeholder=" الرقم الاكاديمي  " />
                                </div>
                                <div className="p-inputgroup flex-1 my-2">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-book"></i>
                                    </span>
                                    <MultiSelect className="p-inputtext-sm w-full md:w-10rem" value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                                        filter placeholder="  اختر الكتاب " maxSelectedLabels={3} />
                                </div>
                                <div className='row m-0'>
                                    <div className='col-6 pe-0'>
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date} onChange={(e) => setDate(e.value)} placeholder=" من  " />
                                        </div>
                                    </div>
                                    <div className='col-6 ps-0'>
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-minus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date} onChange={(e) => setDate(e.value)} placeholder=" الي " />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-3'>
                                    <Button type="submit" label=" طلب استعارة " severity="info" />
                                </div>
                            </form>
                        </div>
                        <div className="col-12 col-md-4 px-4">
                            <Links />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default FormBorrow
