import React from 'react'
import style_ar from './Content.module.css'
import style_en from './Content_en.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Content() {
    const { Translation, i18n } = useTranslation();
    let style = i18n.language === 'ar' ? style_ar : style_en

    return (
        <React.Fragment>
            <section className={`${style.contact_content}  py-4 `}>
                <div className="row m-0">
                    <div className="col-12 col-md-6 my-3">
                        <div className={`${style.title}`}>
                            <h2 className={`${style.head}`} >ابقي علي تواصل معنا دائما</h2>
                        </div>
                        <div className={`${style.info} d-flex align-items-center `}>
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <h6> العنوان </h6>
                                <p className={`${style.des}`}>
                                    <NavLink to="https://maps.app.goo.gl/Zipnzg7uyAab9Ey38" className="w-100" target="_blank"
                                        title="كفرالشيخ_الطريق الصحراوي" rel="nofollow">كفر  الشيخ  الطريق  الصحراوي</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className={`${style.info} d-flex align-items-center `}>
                            <i className="fa-regular fa-envelope"></i>
                            <div>
                                <h6> البريد الالكتروني </h6>
                                <p className={`${style.des}`}>
                                    <NavLink title="kfs-hiet.edu.eg" to="mailto:kfs-hiet.edu.eg" rel="nofollow">kfs-hiet.edu.eg</NavLink>
                                </p>
                            </div>
                        </div>
                        <div className={`${style.info} d-flex align-items-center `}>
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <h6> رقم الهاتف </h6>
                                <p className={`${style.des}`}>
                                    <NavLink to="tel:+483655506" title="483655506" rel="nofollow">483655506</NavLink>
                                    <NavLink to="tel:+483655507" title="483655507" rel="nofollow"
                                        className="border-info border-start border-2 ps-2 ms-2">483655507</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xxl-4">
                        <form action="" id="contact-form" className={`${style.forma}`} >
                            <div className="mb-3">
                                <input type="text" name="name" className="form-control" id="name" placeholder="الاسم"
                                    required="" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" name="mail" id="email" placeholder="الايميل"
                                    required="" />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" name="subject" placeholder="الموضوع" required="" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" name="message" rows="3" placeholder="الرسالة" required=""></textarea>
                            </div>
                            <div className="row align-items-center justify-content-between px-0 mx-0 mb-3 input-group ">
                                <div className="col-6 mb-2 mb-md-0 col-md-5 p-0 position-relative ">
                                    <input type="text" className={`${style.pos} form-control  p-2 m-0 `} id="contactcode" placeholder="code"
                                        readonly="" oncopy="return false" oncut="return false" ondrag="return false"
                                        ondrop="return false" autocomplete="off" />
                                    <button className={`${style.change} ${style.btn} btn p-2 px-3 m-0 position-absolute`} type="button"
                                        id="random-code-buttom">
                                        <i className="fas fa-sync-alt"></i>
                                    </button>
                                </div>
                                <div className="col-5  col-md-6 p-0">
                                    <input type="text" className="form-control p-2 m-0" id="confirm-contact-code" required=""
                                        placeholder="تاكيد الكود" onpaste="return false" oncopy="return false"
                                        oncut="return false" ondrag="return false" ondrop="return false" autocomplete="off" />
                                </div>
                            </div>
                            <div className="text-center">
                                <button className={`${style.contactsubmit}  btn`} type="submit" id="contactsubmit" form="contact-form"
                                    disabled>ارسال</button>
                            </div>
                        </form>

                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Content
