import React from 'react'
import style_ar from './question.module.css'
import style_en from './question_en.module.css'
import { useTranslation } from 'react-i18next';
import { Fieldset } from 'primereact/fieldset';


function Question() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en




    return (
        <React.Fragment>
            <section className={`${style.question}  my-2`}>
                <div className="card my-5">
                    <Fieldset legend={
                        <React.Fragment>
                            <div className="flex align-items-center text-primary">
                                <span className="font-bold text-lg"> أين يقع المعهد العالي للهندسة والتكنولوجيا بالمنوفية؟ </span>
                            </div>
                        </React.Fragment>}
                        toggleable>
                        <p className="m-0 text-justify">
                            يقع المعهد العالي للهندسة والتكنولوجيا بالمنوفية في مكان متميز بالباجور بمحافظة المنوفية وهى على أول الطريق الاقليمى المربوط بالطريق الزراعى مصر-اسكندرية.
                        </p>
                    </Fieldset>
                </div>
                <div className="card my-5">
                    <Fieldset legend={
                        <React.Fragment>
                            <div className="flex align-items-center text-primary">
                                <span className="font-bold text-lg"> هل الشهادات الدراسية التي يمنحها المعهد معادلة ومعتمدة من وزارة التعليم العالي؟ </span>
                            </div>
                        </React.Fragment>}
                        toggleable>
                        <p className="m-0 text-justify">
                            نعم ، يمنح المعهد العالي للهندسة والتكنولوجيا بالمنوفية درجة بكالوريوس الهندسة في جميع التخصصات الهندسة المدنية - الهندسة المعمارية - الهندسة الكيميائية. ومعادلة الدرجة حسب لائحة المعهد الداخلية. و جميع الدرجات معادلة من المجلس الاعلى للجامعات و معتمدة من السيد الأستاذ الدكتور / وزير التعليم العالي و مثل التي تُمنح بالجامعات المصرية الحكومية المعهد لم يتم تخريج الطلاب حتى الآن
                        </p>
                    </Fieldset>
                </div>
                <div className="card my-5">
                    <Fieldset legend={
                        <React.Fragment>
                            <div className="flex align-items-center text-primary">
                                <span className="font-bold text-lg">  ما هي شروط الالتحاق بالمعهد؟  </span>
                            </div>
                        </React.Fragment>}
                        toggleable>
                        <p className="m-0 text-justify">
                            يتم قبول الطلاب من أبناء جمهورية مصر العربية بالمعهد عن طريق مكتب التنسيق وعن طريق التحويل من المعاهد والجامعات الأخرى كما يتم ترشيح الطلاب من غير المصريين طبقاً للنظم التي تقررها وزارة التعليم العالي عن طريق إدارة الوافدين. وتتمثل أهم شروط الالتحاق في الحصول على الشهادة الثانوية العامة او الأزهرية أو ما يعادلها من الشهادات المصرية أو العربية أو الأجنبيةوذلك وفق مراحل التنسيق المختلفة .
                        </p>
                    </Fieldset>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Question
