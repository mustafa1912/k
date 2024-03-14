import React, { useRef, useState } from 'react'
import style_ar from './JobForm.module.css'
import style_en from './JobForm_en.module.css'
import InfoContact from '../contact/Content/InfoContact';
import { TabView, TabPanel } from 'primereact/tabview';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { InputMask } from 'primereact/inputmask';
import { Toast } from 'primereact/toast';

function JobForm({ dataSeo, api, t, i18n, langState, DepartmentsAdministrative, settiengs }) {
    let style = langState ? style_ar : style_en

    const [activeIndex, setActiveIndex] = useState(0);
    const [name, stateName] = useState('');
    const [birthDateChoose, setBirthDateChoose] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [residence, setResidence] = useState('');
    const [nationalID, setNationalID] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [bachelorshDateChoose, setBachelorshDateChoose] = useState('');
    const [bachelorshDate, setBachelorshDate] = useState('');
    const [university, setUniversity] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [appreciation, setAppreciation] = useState('');
    const [messageAddress1, setMessageAddress1] = useState('');
    const [date1Choose, setDate1Choose] = useState('');
    const [date1, setDate1] = useState('');
    const [university2, setUniversity2] = useState('');
    const [messageAddress2, setMessageAddress2] = useState('');
    const [date2Choose, setDate2Choose] = useState('');
    const [date2, setDate2] = useState('');
    const [specialization2, setSpecialization2] = useState('');
    const [specialization4, setSpecialization4] = useState('');
    const [date3Choose, setDate3Choose] = useState('');
    const [date3, setDate3] = useState('');
    const [date4Choose, setDate4Choose] = useState('');
    const [date4, setDate4] = useState('');
    const [currentJob, setCurrentJob] = useState('');
    const [googleScholar, setGoogleScholar] = useState('');
    // نوع الوظيفة
    const [jobType, setJobType] = useState('');
    const [jobTypeId, setJobTypeId] = useState('');
    // القسم
    const [department, setDepartment] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    // الوظيفة
    const [jobTitles, setJobTitles] = useState([]);
    const [valueJobTitles, setValueJobTitles] = useState('');
    const [selectedJobTitles, setSelectedJobTitles] = useState('');
    const [kind, setKind] = useState('');

    // toast
    const toast = useRef(null);

    // 
    const optionJobType = [
        { name: '  عضو هيئة تدريس  ', id: '1' },
        { name: ' عضو هيئة معاونة ', id: '2' },
    ];
    // لما اختار القسم يظهر الاسم في الحقل
    const selectedOptionTemplate = (option, props) => (
        <div className="flex align-items-center">
            <div>{option ? option.name : props.placeholder}</div>
        </div>
    );
    // يظهر اسم     
    const DepartmentOptionTemplate = (option) => (
        <div className="flex align-items-center">
            <div>{option.name}</div>
        </div>
    );


    const funName = (e) => {
        stateName(e.target.value)
    }
    const funBirthDate = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setBirthDateChoose(selectedDate)
        setBirthDate(selectedDate.toLocaleDateString('en-GB'))
    }
    const funMaritalStatus = (e) => {
        setMaritalStatus(e.target.value)
    }
    const funResidence = (e) => {
        setResidence(e.target.value)
    }
    const funNationalID = (e) => {
        setNationalID(e.target.value)
    }
    const funAddress = (e) => {
        setAddress(e.target.value)
    }
    const funTel = (e) => {
        setTel(e.target.value)
    }
    const funBachelorshDate = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setBachelorshDateChoose(selectedDate)
        setBachelorshDate(selectedDate.toLocaleDateString('en-GB'))
    }
    const funUniversity = (e) => {
        setUniversity(e.target.value)
    }
    const funSpecialty = (e) => {
        setSpecialty(e.target.value)
    }
    const funAppreciation = (e) => {
        setAppreciation(e.target.value)
    }
    const funMessageAddress1 = (e) => {
        setMessageAddress1(e.target.value)
    }
    const funDate1 = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setDate1Choose(selectedDate)
        setDate1(selectedDate.toLocaleDateString('en-GB'))
    }
    const funUniversity2 = (e) => {
        setUniversity2(e.target.value)
    }
    const funMessageAddress2 = (e) => {
        setMessageAddress2(e.target.value)
    }
    const funDate2 = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setDate2Choose(selectedDate)
        setDate2(selectedDate.toLocaleDateString('en-GB'))
    }
    const funSpecialization2 = (e) => {
        setSpecialization2(e.target.value)
    }
    const funSpecialization4 = (e) => {
        setSpecialization4(e.target.value)
    }
    const funDate3 = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setDate3Choose(selectedDate)
        setDate3(selectedDate.toLocaleDateString('en-GB'))
    }
    const funDate4 = (e) => {
        // the "dd/mm/yyyy" pattern
        const selectedDate = new Date(e.value);
        setDate4Choose(selectedDate)
        setDate4(selectedDate.toLocaleDateString('en-GB'))
    }
    const funCurrentJob = (e) => {
        setCurrentJob(e.target.value)
    }
    const funGoogleScholar = (e) => {
        setGoogleScholar(e.target.value)
    }

    const funDepartment = async (e) => {
        setSelectedDepartment(e.value);
        if (e.value) {
            setDepartment(e.value.id);
            try {
                const { data: jobTitlesData } = await axios.get(`${api}api/website/job_titles/${e.value.id}`);
                setJobTitles(jobTitlesData);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const funJobTitles = (e) => {
        setSelectedJobTitles(e)
        if (e)
            setValueJobTitles(e.id)
    }
    const funJobType = (e) => {
        setJobTypeId(e.value)
        if (e.value)
            setJobType(e.value.id)
    }


    const objJob =
    {
        'name': name,
        'birthDate': birthDate,
        'socialStates': maritalStatus,
        'place': residence,
        'address': address,
        'phone': tel,
        'age': 20,
        'nationId': nationalID,
        'licenceDate': bachelorshDate,
        'university': university,
        'specialization': specialty,
        'application': appreciation,
        'job': jobType,
        'department_id': department,
        'jobTitle_id': valueJobTitles,
        'kind': kind,
        'MessageAddress1': messageAddress1,
        'MessageAddress2': messageAddress2,
        'university2': university2,
        'date2': date2,
        'specialization2': specialization2,
        'date1': date1,
        'date3': date3,
        'date4': date4,
        'specialization4': specialization4,
        'currentJob': currentJob,
        'googleScholar': googleScholar,
    }

    const handleJob = (index, event) => {
        event.preventDefault();
        axios.post(api + 'api/website/job/application/form/store', objJob)
            // handle success
            .then(function (response) {
                const responseData = response.data
                if (responseData.success) {
                    //   لو الدنيا تمام
                    toast.current.show({ severity: 'success', summary: responseData.data, detail: responseData.message, life: 3000 })
                    setActiveIndex(index)
                    refreshData()
                } else {
                    // لو في خطاء يطبع كل رسائل الخطاء
                    Object.values(responseData.message).forEach((ele, index) => {
                        toast.current.show({ severity: 'error', summary: responseData.data, detail: Object.keys(responseData.message)[index] + " : " + ele, life: 4000 })
                    })
                }
            })
    }
    // علشان اشوف الداتا في الفورمة تمام وله لا 
    // معني انو عمل submit اذا كده الداتا تمام 
    // اتنقل بقا للتابه الي بعدها
    const handleSubmit = (index, event) => {
        event.preventDefault();
        setActiveIndex(index)
    }
    // علشان افضي الداتا بعد محفظ البانات
    const refreshData = () => {
        stateName('')
        setBirthDate('')
        setMaritalStatus('')
        setResidence('')
        setNationalID('')
        setAddress('')
        setTel('')
        setBachelorshDate('')
        setUniversity('')
        setSpecialty('')
        setAppreciation('')
        setMessageAddress1('')
        setDate1('')
        setUniversity2('')
        setMessageAddress2('')
        setDate2('')
        setSpecialization2('')
        setSpecialization4('')
        setDate3('')
        setDate4('')
        setCurrentJob('')
        setGoogleScholar('')
        setJobType('')
        setJobTypeId('')
        setDepartment('')
        setSelectedDepartment('')
        setValueJobTitles('')
        setSelectedJobTitles('')
        setKind('')
    }
    return (
        <React.Fragment>
            <section className={`${style.contact_content}  py-4 `}>
                <Toast ref={toast} position="top-left" />
                <div className="container row p-0">
                    <div className="col-12 col-md-3 my-3">
                        <InfoContact style={style} langState={langState} settiengs={settiengs} dataSeo={dataSeo} />
                    </div>
                    <div className="col-12 col-md-9">
                        <TabView className={`${style.forma}`} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}  >
                            <TabPanel header=" البيانات الأساسية للمتقدم">
                                <form id="contact-form" className='row m-0' onSubmit={(event) => handleSubmit(1, event)}>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${name.length === 0 ? ' p-invalid' : ''}`} required value={name} onChange={funName} placeholder=" الاسم " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className={`p-inputtext-sm ${!birthDate ? ' p-invalid' : ''}`} value={birthDateChoose} onChange={funBirthDate} dateFormat="yy/mm/dd" placeholder=" تاريخ الميلاد  " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${maritalStatus.length === 0 ? ' p-invalid' : ''}`} value={maritalStatus} onChange={funMaritalStatus} placeholder=" الحالة الاجتماعية " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-map-marker"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${residence.length === 0 ? ' p-invalid' : ''}`} value={residence} onChange={funResidence} placeholder=" محل الإقامة " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-id-card"></i>
                                            </span>
                                            <InputMask className={`p-inputtext-sm ${nationalID.length === 0 ? ' p-invalid' : ''}`} value={nationalID} onChange={funNationalID} keyfilter="int" mask="**************" placeholder="  الرقم القومى  " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-map"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${address.length === 0 ? ' p-invalid' : ''}`} value={address} onChange={funAddress} placeholder=" العنوان " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-phone"></i>
                                            </span>
                                            <InputMask className={`p-inputtext-sm ${tel.length === 0 ? ' p-invalid' : ''}`} value={tel} onChange={funTel} keyfilter="int" mask="***********" placeholder="  الهاتف   " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className={`p-inputtext-sm   ${!bachelorshDate ? ' p-invalid' : ''}`} value={bachelorshDateChoose} onChange={funBachelorshDate} dateFormat="yy/mm/dd" placeholder=" تاريخ البكالوريوس  " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${specialty.length === 0 ? ' p-invalid' : ''}`} value={specialty} onChange={funSpecialty} placeholder="  التخصص   " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${university.length === 0 ? ' p-invalid' : ''}`} value={university} onChange={funUniversity} placeholder="  الجامعة   " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className={`p-inputtext-sm ${appreciation.length === 0 ? ' p-invalid' : ''}`} value={appreciation} onChange={funAppreciation} placeholder="  التقدير " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-chevron-down"></i>
                                            </span>
                                            <Dropdown value={jobTypeId} onChange={funJobType} options={optionJobType} optionLabel="name" placeholder=" اختر  الوظيفة  "
                                                filter valueTemplate={selectedOptionTemplate} itemTemplate={DepartmentOptionTemplate} showClear className={`p-inputtext-sm w-full md:w-14rem ${!jobTypeId ? ' p-invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-chevron-down"></i>
                                            </span>
                                            <Dropdown value={selectedDepartment} onChange={funDepartment} options={DepartmentsAdministrative} optionLabel="name" placeholder=" اختر القسم "
                                                filter valueTemplate={selectedOptionTemplate} itemTemplate={DepartmentOptionTemplate} showClear className={`p-inputtext-sm w-full md:w-14rem ${!selectedDepartment ? ' p-invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-chevron-down"></i>
                                            </span>
                                            <Dropdown value={selectedJobTitles} onChange={(e) => funJobTitles(e.value)} options={jobTitles} optionLabel="name" placeholder=" اختر  التخصص   "
                                                filter valueTemplate={selectedOptionTemplate} itemTemplate={DepartmentOptionTemplate} showClear className={`p-inputtext-sm w-full md:w-14rem ${!selectedJobTitles ? ' p-invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <p className='my-2'> أرغب فى العمل بالمعهد عن طريق  : </p>
                                        <div className="flex align-items-center my-2">
                                            <RadioButton inputId="kind1" name="kind1" value="1" onChange={(e) => setKind(e.value)} checked={kind === '1'} />
                                            <label htmlFor="kind1" className="mx-2"> انتداب كلى </label>
                                        </div>
                                        <div className="flex align-items-center my-2">
                                            <RadioButton inputId="kind2" name="kind2" value="2" onChange={(e) => setKind(e.value)} checked={kind === '2'} />
                                            <label htmlFor="kind2" className="mx-2"> تعيين </label>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className={`${style.contactsubmit} btn`} type="submit" >
                                            التالي ....
                                        </button>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel header=" بيانات الحصول على درجة الماجستير" disabled={activeIndex < 1}  >
                                <form id="contact-form" className='row m-0' onSubmit={(event) => handleSubmit(2, event)}>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-pencil"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={messageAddress1} onChange={funMessageAddress1} placeholder=" عنوان الرسالة " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date1Choose} onChange={funDate1} dateFormat="yy/mm/dd" placeholder=" تاريخ الحصول عليها    " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-building"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={university2} onChange={funUniversity2} placeholder="  الجامعة   " />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className={`${style.contactsubmit} btn`} type="submit" >
                                            التالي ....
                                        </button>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel header=" بيانات الحصول على درجة الدكتوراة" disabled={activeIndex < 2}>
                                <form id="contact-form" className='row m-0' onSubmit={(event) => handleSubmit(3, event)}>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-pencil"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={messageAddress2} onChange={funMessageAddress2} placeholder=" عنوان الرسالة " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date2Choose} onChange={funDate2} dateFormat="yy/mm/dd" placeholder=" تاريخ الحصول عليها    " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-building"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={specialization2} onChange={funSpecialization2} placeholder="  الجامعة   " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-user"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={specialization4} onChange={funSpecialization4} placeholder="  التخصص الدقيق   " />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className={`${style.contactsubmit} btn`} type="submit" >
                                            التالي ....
                                        </button>
                                    </div>
                                </form>
                            </TabPanel>
                            <TabPanel header=" بيانات الحصول على درجة أستاذ مساعد و أستاذ " disabled={activeIndex < 3}>
                                <form id="contact-form" className='row m-0' onSubmit={(event) => handleJob(0, event)}>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date3Choose} onChange={funDate3} dateFormat="yy/mm/dd" placeholder="  تاريخ الحصول على درجة أستاذ مساعد  " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-calendar-plus"></i>
                                            </span>
                                            <Calendar className="p-inputtext-sm" value={date4Choose} onChange={funDate4} dateFormat="yy/mm/dd" placeholder="  تاريخ الحصول على درجة أستاذ " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-briefcase"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={currentJob} onChange={funCurrentJob} placeholder="  الوظيفة الحالية   " />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="p-inputgroup flex-1 my-2">
                                            <span className="p-inputgroup-addon">
                                                <i className="pi pi-briefcase"></i>
                                            </span>
                                            <InputText className="p-inputtext-sm" value={googleScholar} onChange={funGoogleScholar} placeholder=" منحة جوجل  " />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className={`${style.contactsubmit}  btn`} type="submit" id="contactsubmit" form="contact-form"
                                        >ارسال</button>
                                    </div>
                                </form>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default JobForm

