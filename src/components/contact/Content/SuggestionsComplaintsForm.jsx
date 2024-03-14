import React, { useState, useRef } from 'react'
import axios from 'axios';
import style_ar from './Content.module.css'
import style_en from './Content_en.module.css'
import InfoContact from './InfoContact';
import ReCAPTCHA from "react-google-recaptcha";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Toast } from 'primereact/toast';
import { Dropdown } from 'primereact/dropdown';

function SuggestionsComplaintsForm({ api, t, i18n, langState, settiengs, dataSeo, mainClassification }) {
    let style = langState ? style_ar : style_en
    const [verifyed, setVerifyed] = useState(false);
    const [name, stateName] = useState('');
    const [mail, stateMail] = useState('');
    const [subject, stateSubject] = useState('');
    const [message, stateMessage] = useState('');
    // القسم
    const [classificationId, setClassificationId] = useState('');
    const [selectedClassification, setSelectedClassification] = useState('');
    // الوظيفة
    const [allSubClassification, setAllSubClassification] = useState([]);
    const [subClassificationId, setSubClassificationId] = useState('');
    const [selectedSubClassification, setSelectedSubClassification] = useState('');


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
    const funClassification = async (e) => {
        setSelectedClassification(e.value);
        if (e.value) {
            setClassificationId(e.value.id);
            try {
                const { data: SubClassificationData } = await axios.get(`${api}api/website/SupComplaintsSuggestions/${e.value.id}`);
                setAllSubClassification(SubClassificationData);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const funSubClassification = (e) => {
        setSelectedSubClassification(e)
        if (e) { setSubClassificationId(e.id) }
    }

    // لما اختار القسم يظهر الاسم في الحقل
    const selectedOptionTemplate = (option, props) => (
        <div className="flex align-items-center">
            <div>{option ? langState ? option.name_ar : option.name_en : props.placeholder}</div>
        </div>
    );
    // يظهر اسم     
    const ClassificationOptionTemplate = (option) => (
        <div className="flex align-items-center">
            <div>{langState ? option.name_ar : option.name_en}</div>
        </div>
    );


    const handleRecaptchaChange = (value) => {
        // Handle the reCAPTCHA response (value)
        setVerifyed(true)
    };

    const objComplaintsSuggestion =
    {
        'name': name,
        'email': mail,
        'main_complaint_id': classificationId,
        'sup_complaint_id': subClassificationId,
        'subject': subject,
        'message': message,
        // 'term': 1,
        // 'year_id': 1,
    }

    const handleContent = (event) => {
        event.preventDefault();
        axios.post(api + 'api/website/ComplaintsSuggestion/store', objComplaintsSuggestion)
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
        setClassificationId('')
        setSelectedClassification('')
        setSubClassificationId('')
        setSelectedSubClassification('')
        stateMessage('')
        setVerifyed(false)
    }


    return (
        <React.Fragment>
            <Toast ref={toast} position="top-left" />
            <section className={`${style.contact_content} `}>
                <div className="row m-0">
                    <div className="col-12 col-md-6 my-3">
                        <InfoContact style={style} langState={langState} t={t} settiengs={settiengs} dataSeo={dataSeo} />
                    </div>
                    <div className="col-12 col-md-6 col-xxl-4">
                        <form action="" id="contact-form" className={style.forma} onSubmit={(event) => handleContent(event)} >
                            <div className="mb-3">
                                <InputText className={`p-inputtext-sm w-100  `} value={name} onChange={funName} placeholder=" اسم المستخدم " />
                            </div>
                            <div className="mb-3">
                                <InputText keyfilter="email" className={`p-inputtext-sm w-100  `} value={mail} onChange={funMail} placeholder="الايميل" />
                            </div>
                            <div className="mb-3">
                                <div className="p-inputgroup flex-1 my-2">
                                    <Dropdown value={selectedClassification} onChange={funClassification} options={mainClassification} optionLabel="name" placeholder=" اختر  التصنيف الرئيسي "
                                        filter valueTemplate={selectedOptionTemplate} itemTemplate={ClassificationOptionTemplate} showClear className={`p-inputtext-sm w-full md:w-14rem ${!selectedClassification ? ' p-invalid' : ''}`} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="p-inputgroup flex-1 my-2">
                                    <Dropdown value={selectedSubClassification} onChange={(e) => funSubClassification(e.value)} options={allSubClassification} optionLabel="name" placeholder=" اختر  التصنيف الفرعي   "
                                        filter valueTemplate={selectedOptionTemplate} itemTemplate={ClassificationOptionTemplate} showClear className={`p-inputtext-sm w-full md:w-14rem ${!selectedSubClassification ? ' p-invalid' : ''}`} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <InputText className={`p-inputtext-sm w-100 `} value={subject} onChange={funSubject} placeholder=" الموضوع   " />
                            </div>
                            <div className="mb-3">
                                <InputTextarea autoResize className={`p-inputtext-sm w-100 ${message.length === 0 ? ' p-invalid' : ''}`} required value={message} onChange={funMessage} placeholder="الرسالة" rows={5} cols={30} />
                            </div>
                            {/* Add your other form elements here */}
                            <ReCAPTCHA
                                sitekey="6LcbQmUpAAAAAJ2cFfxWezlebr1-aGCCDuiwSYIh"
                                onChange={handleRecaptchaChange} />
                            <div className="text-center my-2">
                                <button className={`${style.contactsubmit}  btn`} type="submit" form="contact-form"
                                    disabled={!verifyed}>ارسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default SuggestionsComplaintsForm
