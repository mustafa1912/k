import React, { useState } from 'react'
import style_ar from './forms_services.module.css'
import style_en from './forms_services_en.module.css'
import { useTranslation } from 'react-i18next';
import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
function Form_num_id({ dataSeo }) {
    const [value, setValue] = useState('');

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
                                        <i className="pi pi-id-card"></i>
                                    </span>
                                    <InputText  className="p-inputtext-sm" value={value} onValueChange={(e) => setValue(e.value)} placeholder=" الرقم القومي " />                                </div>
                            </div>

                        </div>

                        <div className='text-center mt-3'>
                            <Button type="submit" label="  عرض " className='px-4' severity="info" size="small" />
                        </div>
                    </form>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Form_num_id
