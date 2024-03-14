import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';
import { PanelMenu } from 'primereact/panelmenu';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import img from '../assets/imgs/logo.webp';

function Navbar({ t, i18n, settiengs, api, departments, units, classification }) {

  const [opacity, setOpacity] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    const externalLink = e.target.getAttribute('href');
    window.location.href = externalLink; // Redirect to the external link
  };


  // SocialMedia
  const SocialMediaIcon = ({ to, iconClass, SocialClass, target }) => (
    to && (
      <NavLink to={to} className={`icon Btn mx-2`} target="_blank" rel="noopener noreferrer">
        <span className={`svgContainer`}  >
          <i className={iconClass}></i>
        </span>
        <span className={`BG ${SocialClass}`}  ></span>
      </NavLink>
    )
  );

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 100) {
        setOpacity(false);
      } else {
        setOpacity(true);
      }
    });


    // علشان اخفي القائمة لمات تكون نشطة 
    const handleClick = () => {
      const activeMenuItem = document.querySelector('.p-menuitem-active');
      activeMenuItem && activeMenuItem.classList.remove('p-menuitem-active');
    };

    const main = document.querySelector('main');
    main &&
      main.addEventListener('click', handleClick);
  }, [api]);


  const Items_Topbar = [
    {
      label: (
        <div >
          <SocialMediaIcon to={`https://wa.me/${settiengs.tel1}`} onClick={handleNavigation} SocialClass={`whatsapp`} iconClass='fa-brands fa-whatsapp' ></SocialMediaIcon>
          {settiengs.tel1}
        </div>
      ),
      className: 'nav-link'
    },
    {
      label: (
        <div>
          <SocialMediaIcon to={`tel:${settiengs.tel2}`} onClick={handleNavigation} SocialClass={`phone`} iconClass='fa-solid fa-phone' ></SocialMediaIcon>
          {settiengs.tel2}
        </div>
      ),
      className: 'nav-link'
    },
    {
      label: (
        <React.Fragment>
          <SocialMediaIcon to={`mailto:${settiengs.email}`} SocialClass={`mail`} onClick={handleNavigation} iconClass='fa-regular fa-envelope'></SocialMediaIcon>
          {settiengs.email}
        </React.Fragment>
      ),
      className: 'nav-link'
    },
  ];


  // eslint-disable-next-line no-sparse-arrays
  const Items = [
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="/">
          {t('Home')}
        </NavLink>
      ),
    },
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="/about">
          {t('About institute')}
        </NavLink>
      ),
    }
    ,
    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Institute management')}
        </a>
      ),
      items: [
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/InstituteBoardDirectors" disabled>
              {t('Institute Board of Directors')}
            </NavLink>
          ),
        },
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/dean">
              {t('Dean of the Institute')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/Institute_agent"  >
              {t('Vice Dean of the Institute for Education and Student Affairs')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/Acting_Institute_agent"  >
              {t('Vice Dean of the Institute for Community Service and Research Affairs')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/Responsible_for_students"  >
              {t('Graduate Studies Coordinator')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/AcademicCouncils" >
              {t('Academic Council')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/pdf/OrganizationalChart" >
              {t('Organizational Chart')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/pdf/AdministrativeApparatus" >
              {t('Administrative apparatus')}
            </NavLink>
          ),
        },
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="about/Evidence and policy"  >
              {t('Documents-policies and mechanisms')}
            </NavLink>
          ),
        },
      ]
    },
    ,
    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Departments')}
        </a>
      ),
      items: departments && departments.map((Element, index) => ({
        label: (
          <NavLink className="nav-link" aria-current="page" to={`/department/${Element.name_ar}`} key={index}>
            {Element.name_ar}
          </NavLink>
        ),
      })),
    },

    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Education and students')}
        </a>
      ),
      items: [
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webStudentGuides"      >
              {t('University student guide')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/student/webActivitiesAchievements" >
              {t('Activities and achievements')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webExamRules"       >
              {t('Exam rules')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webUniversityStudentCharters"       >
              {t('University student charter')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webAccreditations"     >
              {t('Accreditation')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/student/webCommonQuestions" >
              {t('common questions')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/student/webStudentsUnions"  >
              {t('Student Union')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webStudyTimePlans"      >
              {t('Study time plan')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className={` nav-link `} to="/student/webStudentGuideQualitys"      >
              {t('Student guide to quality')}
            </NavLink>
          ),
        }
      ]
    },

    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('News')}
        </a>
      ),
      items: classification && classification.map((Element, index) => ({
        label: (
          <NavLink className="nav-link" aria-current="page" to={`/news/${Element.name_ar}`} state={{ catogrey: Element.id }} key={index}>
            {Element.name_ar}
          </NavLink>
        ),
      }),
      ),
    },

    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Units')}
        </a>
      ),
      items: units && units.map((Element, index) => ({
        label: (
          <NavLink className="nav-link" aria-current="page" to={`/unit/${Element.name_ar}`} key={index}>
            {Element.name_ar}
          </NavLink>
        ),
      })),
    },
    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Research')}
        </a>
      ),
      items: [
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="https://jiet.journals.ekb.eg" onClick={handleNavigation} >
              {t('Scientific journal')}
            </NavLink >
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="important/Conferences">
              {t('Scientific conferences')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="important/Protocols">
              {t('Cooperation protocols')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="important/sites">
              {t('Important sites')}
            </NavLink>
          ),
        }
      ]
    },
    {
      label: (
        <a className="nav-link" aria-current="page" href='#0'>
          {t('Services')}
        </a>
      ),
      items: [

        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/services/Suggestions and complaints">
              {t('Suggestions and complaints')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink to="/services/MilitaryEducation" className="nav-link">
              {t('Military Education')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/">
              {t('summer training')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="/services/survey">
              {t('Questionnaires')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="important/applications">
              {t('Application forms')}
            </NavLink>
          ),
        }
        ,
        {
          label: (
            <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/student" onClick={handleNavigation} >
              {t('result')}
            </NavLink>
          ),
        }
      ]
    }
    ,
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="/contact">
          {t('Contact us')}
        </NavLink>
      ),
    }
    ,
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/student" target='_blank' rel='noreferrer' onClick={handleNavigation}>
          {t('Student/graduate login')}
        </NavLink>
      ),
      className: 'd-xl-none d-block'
    }
    ,
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="/Job">
          {t('Job application form')}
        </NavLink>
      ),
      className: 'd-xl-none d-block'
    }

    ,
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/doctor" target='_blank' rel='noreferrer' onClick={handleNavigation}>
          {t('Log in Faculty member')}
        </NavLink>
      ),
      className: 'd-xl-none d-block'
    }
    ,
    {
      label: (
        <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/employee" target='_blank' rel='noreferrer' onClick={handleNavigation}>
          {t('Employee login')}
        </NavLink>
      ),
      className: 'd-xl-none d-block'
    }
    ,
    {
      label: (
        <div className={`btn-light text-dark nav-link py-0`}
          onClick={() => changeLanguage('en')}> <i className="fa-solid fa-language text-primary mx-2 my-1"></i>  {t('en')}     </div>
      ),
      className: `${i18n.language === 'en' ? ' d-none ' : ''}`
    },
    {
      label: (
        <div className={`btn-light text-dark nav-link py-0`}
          onClick={() => changeLanguage('ar')}> <i className="fa-solid fa-language text-primary mx-2 my-1 "></i>  العربية </div>
      ),
      className: `${i18n.language === 'ar' ? ' d-none ' : ''}`
    }
  ];

  // logo

  const start = <React.Fragment>
    <NavLink aria-current="page" className="d-flex" to="/">
      {/*لو الصوره موجوده تمام */}
      {settiengs.logo ? (
        <img src={api + 'public//storage/' + settiengs.logo.replace('public', '')}
          alt={i18n.language === 'ar' ? settiengs.name_ar : settiengs.name_en}
          title={i18n.language === 'ar' ? settiengs.name_ar : settiengs.name_en}
          className="logo-img"></img>
      ) :
        // لو مش موجوده هات الصوره الثابته
        <img src={img}
          alt={i18n.language === 'ar' ? settiengs.name_ar : settiengs.name_en}
          title={i18n.language === 'ar' ? settiengs.name_ar : settiengs.name_en}
          className="logo-img"></img>
      }
    </NavLink>
  </React.Fragment>;

  // _Topbar
  const start_Topbar = <React.Fragment>
    <div className='d-flex'>
      <Button icon={`pi pi-align-${i18n.language === 'ar' ? 'left' : 'right'}`}
        className={`btn-Sidebar rounded p-2 d-xl-none d-inline ${i18n.language === 'ar' ? 'ms-2' : 'me-2'}`}
        onClick={() => setVisibleSidebar(true)} />
      <Button className='p-2 btn-modal fa-solid fa-list-ul'
        severity="info" outlined onClick={() => setVisible(true)} />
    </div>
  </React.Fragment>;

  // soacial
  const end =
    <div className="d-flex justify-content-start btns d-xl-inline d-none">
      <SocialMediaIcon to={settiengs.facebook} SocialClass={`facebook`} iconClass='fa-brands fa-square-facebook rounded' target="_blank" />
      <SocialMediaIcon to={settiengs.instagram} SocialClass={`instagram`} iconClass="  fa-brands fa-instagram rounded" target="_blank" />
      <SocialMediaIcon to={settiengs.twitter} SocialClass={`twitter`} iconClass="  fa-brands fa-twitter rounded" target="_blank" />
      <SocialMediaIcon to={settiengs.youtube} SocialClass={`youtube`} iconClass="  fa-brands fa-youtube rounded" target="_blank" />
      <SocialMediaIcon to={settiengs.tiktok} SocialClass={`tiktok`} iconClass="  fa-brands fa-tiktok rounded" target="_blank" />
    </div>;

  return (
    <React.Fragment>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg py-0 px-xl-3 d-flex flex-column " id="navbar">
          <div className='row m-0 w-100'>
            <div className='col-sm-12 col-md-12 col-lg-2 logo d-flex align-items-center'>
              <Menubar start={start} />
              <Button icon={`pi pi-align-${i18n.language === 'ar' ? 'left' : 'right'}`} className='btn-Sidebar rounded p-2 d-lg-none d-inline' onClick={() => setVisibleSidebar(true)} />
            </div>
            <div className='col-sm-12 col-md-12 col-lg-10  row m-0 d-lg-flex d-none'>
              <div className='col-sm-12 align-items-center'>
                <div className='w-100 bg-white btns rounded d-flex SocialMediaIcon'>
                  <Menubar start={start_Topbar} model={Items_Topbar} end={end} />
                </div>
              </div>
              <div className='col-sm-12 Items d-xl-flex d-none'>
                <Menubar model={Items} />
              </div>
            </div>
          </div>
        </nav>
        <div className='row m-0 w-100'>
          <div className='col-sm-3 p-0 bg-nav triangle-shape d-xl-flex d-none'>
            <div className='d-lg-inline-block  d-none'>
              <NavLink to="/" >
                <p className='d-block mx-2 text-dark title-site text-center mb-2'>
                  {t('Ministry-name')}
                </p>
                <h5 className='d-block mx-2 text-dark title-site'>
                  {i18n.language === 'ar' ? settiengs.name_ar : settiengs.name_en}
                </h5>
              </NavLink>
            </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-9 row m-0 Items_Dowmbar opacity_${opacity}`}>
            <div className='d-flex p-menubar p-component'>
              <div className='p-menubar-root-list'>
                <div className='p-menuitem p-md-2 p-0'>
                  <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/student" target='_blank' rel='noreferrer' >
                    <i className='pi pi-fw pi-user mx-1'> </i>
                    {t('Student/graduate login')}
                  </NavLink>
                </div>
                <div className='p-menuitem p-md-2 p-0'>
                  <NavLink className="nav-link" aria-current="page" to="/Job">
                    <i className='pi pi-fw pi-file mx-1'> </i>
                    {t('Job application form')}
                  </NavLink>
                </div>
                <div className='p-menuitem p-md-2 p-0'>
                  <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/doctor" target='_blank' rel='noreferrer' >
                    <i className='pi pi-fw pi-sign-in mx-1'> </i>
                    {t('Log in Faculty member')}
                  </NavLink>
                </div>
                <div className='p-menuitem p-md-2 p-0'>
                  <NavLink className="nav-link" aria-current="page" to="https://mis.kfs-hiet.edu.eg/employee" target='_blank' rel='noreferrer' >
                    <i className='pi pi-fw pi-sign-in mx-1'> </i>
                    {t('Employee login')}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card flex justify-content-center">
        {/* Sidebar */}
        <Sidebar visible={visibleSidebar} position={`${i18n.language === 'ar' ? 'right' : 'left'}`}
          onHide={() => setVisibleSidebar(false)}>
          <PanelMenu model={Items} className="w-full md:w-25rem" />
        </Sidebar>
        {/* modal */}
        <Dialog visible={visible} onHide={() => setVisible(false)}
          className={`Dialog mt-3`} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
          <div className="modal-body p-0">
            <div className="row">
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-info"></i>
                  <div>
                    <h4 className='mb-0 text-info'> {t('Dialog-h-1')} </h4>
                    <p> {t('Dialog-p-1')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-primary"></i>
                  <div>
                    <h4 className='mb-0  text-primary'>{t('Dialog-h-2')}  </h4>
                    <p> {t('Dialog-p-2')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-primary-subtle"></i>
                  <div>
                    <h4 className='mb-0 text-primary-subtle'> {t('Dialog-h-3')}  </h4>
                    <p> {t('Dialog-p-3')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-warning"></i>
                  <div>
                    <h4 className='mb-0 text-warning'> {t('Dialog-h-4')} </h4>
                    <p> {t('Dialog-p-4')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2  bg-primary"></i>
                  <div>
                    <h4 className='mb-0  text-primary'> {t('Dialog-h-5')} </h4>
                    <p> {t('Dialog-p-5')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-dark"></i>
                  <div>
                    <h4 className='mb-0 text-dark'>  {t('Dialog-h-6')}  </h4>
                    <p> {t('Dialog-p-6')} </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2 bg-danger"></i>
                  <div>
                    <h4 className='mb-0 text-danger'> {t('Dialog-h-7')}  </h4>
                    <p> {t('Dialog-p-7')}   </p>
                  </div>
                </NavLink>
              </div>
              <div className="col-sm-6 p-1 mb-3">
                <NavLink to='/' className="d-flex align-items-start shadow-items p-2">
                  <i className="fa-solid fa-house mb-2"></i>
                  <div>
                    <h4 className='mb-0'> {t('Dialog-h-8')}  </h4>
                    <p> {t('Dialog-p-8')} </p>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </React.Fragment>
  )
}

export default (Navbar)      
