import React, { useState, useRef } from 'react'
import style_ar from './Content.module.css'
import style_en from './Content_en.module.css'
import ReCAPTCHA from "react-google-recaptcha";
import Map from './Map';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import InfoContact from './InfoContact';

function Content({ namePage, api, t, i18n, langState, settiengs, dataSeo }) {
    let style = langState ? style_ar : style_en
    let isHome = namePage === 'Home' ? true : false
    const [verifyed, setVerifyed] = useState(false);
    const [name, stateName] = useState('');
    const [mail, stateMail] = useState('');
    const [subject, stateSubject] = useState('');
    const [message, stateMessage] = useState('');
    // toast
    const toast = useRef(null);

    const funName = (e) => {
        stateName(e.target.value)
    }
    const funMail = (e) => {
        stateMail(e.target.value)
    }
    const funSubject = (e) => {
        stateSubject(e.target.value)
    }
    const funMessage = (e) => {
        stateMessage(e.target.value)
    }


    const handleRecaptchaChange = (value) => {
        // Handle the reCAPTCHA response (value)
        setVerifyed(true)
    };

    const objContent =
    {
        'name': name,
        'email': mail,
        'subject': subject,
        'message': message,
    }

    const handleContent = (event) => {
        event.preventDefault();
        axios.post(api + 'api/website/contactUs/form/store', objContent)
            // handle success
            .then(function (response) {
                const responseData = response.data
                if (responseData.success) {
                    //   لو الدنيا تمام
                    toast.current.show({ severity: 'success', summary: responseData.data, detail: responseData.message, life: 3000 })
                    refreshData()
                } else {
                    // لو في خطاء يطبع كل رسائل الخطاء
                    console.log(responseData.message)
                    Object.values(responseData.message).forEach((ele, index) => {
                        toast.current.show({ severity: 'error', summary: responseData.data, detail: Object.keys(responseData.message)[index] + " : " + ele, life: 4000 })
                    })
                }
            })
    }

    // علشان افضي الداتا بعد محفظ البانات
    const refreshData = () => {
        stateName('')
        stateMail('')
        stateSubject('')
        stateMessage('')
        setVerifyed(false)
    }


    return (
        <React.Fragment>
            <Toast ref={toast} position="top-left" />
            <section className={`${style.contact_content} `}>
                <div className="row m-0">
                    {/* لو في صفحة الرئسية تظهر الخريطة  */}
                    {isHome ?
                        <div className="col-12 col-md-6 ">
                            <Map namePage={namePage} />
                        </div> :
                        // غير كده اظهر البيانات العنوان و الميل و الفون 
                        <div className="col-12 col-md-6 my-3">
                            <InfoContact style={style} langState={langState} t={t} settiengs={settiengs} dataSeo={dataSeo} />
                        </div>
                    }
                    <div className="col-12 col-md-6 col-xxl-4">
                        {isHome ?
                            <div className={`${style.find} pb-4 position-relative my-3`}>
                                <h5 className={`${style.head_title}`}>  {t('Contact us')}   </h5>
                            </div>
                            : ''}
                        <form action="" id="contact-form" className={`${isHome ? '' : style.forma} `} onSubmit={(event) => handleContent(event)} >
                            <div className="mb-3">
                                {/*  " "  */}
                                <InputText className={`p-inputtext-sm w-100 ${name.length === 0 ? ' p-invalid' : ''}`} required value={name} onChange={funName} placeholder={t('user-name')} />
                            </div>
                            <div className="mb-3">
                                <InputText keyfilter="email" className={`p-inputtext-sm w-100 ${mail.length === 0 ? ' p-invalid' : ''}`} required value={mail} onChange={funMail} placeholder={t('mail')} />
                            </div>
                            <div className="mb-3">
                                <InputText className={`p-inputtext-sm w-100 ${subject.length === 0 ? ' p-invalid' : ''}`} required value={subject} onChange={funSubject} placeholder={t('subject')} />
                            </div>
                            <div className="mb-3">
                                <InputTextarea autoResize className={`p-inputtext-sm w-100 ${message.length === 0 ? ' p-invalid' : ''}`} required value={message} onChange={funMessage} placeholder={t('message')} rows={5} cols={30} />
                            </div>
                            {/* Add your other form elements here */}
                            <ReCAPTCHA
                                sitekey="6LcbQmUpAAAAAJ2cFfxWezlebr1-aGCCDuiwSYIh"
                                //  sitekey="6LfksBMpAAAAAN-3u-NaUqYTueREm-8nnmXwgwcN"
                                onChange={handleRecaptchaChange} />
                            <div className="text-center my-2">
                                <button className={`${style.contactsubmit}  btn`} type="submit" form="contact-form"
                                    disabled={!verifyed}> {t('send')} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Content
