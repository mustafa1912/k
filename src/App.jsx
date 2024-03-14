
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';
import { useTranslation } from 'react-i18next';


// layouts
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import WhatsappChatPlugin from './pages/whatsappChatPlugin/whatsappChatPlugin';
// Lazy-loaded pages 
import Home from './pages/home/Home';
import SingleFeatures from './pages/news/SingleFeatures';
import About from './pages/about/about';
import InstituteBoardDirectors from './pages/about/InstituteBoardDirectors';
import AcademicCouncils from './pages/about/AcademicCouncils';
import Manger from './pages/about/Manger';
import PdfAbout from './pages/about/Pdf';
import EvidenceAndPolicy from './pages/about/EvidenceAndPolicy';
import Department from './pages/department/department';
import Doctor from './pages/department/doctor';
import Doctors from './pages/department/doctors';
import CoursesPage from './pages/department/Courses';
import HeadDepartment from './pages/department/Head_Department';
import Workshops from './pages/department/workshops';
import MasterDoctoral from './pages/department/Master_doctoral';
import SearchProject from './pages/department/search_project';
import ScientificTrips from './pages/department/Scientific_trips';
import Rewords from './pages/department/rewords';
import Decisions from './pages/department/decisions';
import PdfDepartment from './pages/department/Pdf';
import Student from './pages/student/student';
import Pdfstudent from './pages/student/Pdf';
import Services from './pages/student/services';
import Units from './pages/unit/units';
import PdfUnit from './pages/unit/Pdf';
import BoardStructure from './pages/unit/BoardStructure';
import ManagerDeputy from './pages/unit/ManagerDeputy';
import News from './pages/news/news';
import SingleNews from './pages/news/singleNews';
import Pdf from './pages/services/Pdf';
import Survey from './pages/services/survey';
import MilitaryEducation from './pages/services/MilitaryEducation';
import SuggestionsComplaints from './pages/services/SuggestionsComplaints';
import Important from './pages/services/Important';
import Contact from './pages/contacts/contact';
import Job from './pages/contacts/Job';
import NotFound from './pages/404/404';
// import FAQ from './pages/student/FAQ';

function App() {
  const { t, i18n } = useTranslation();
  // لينك ال api 
  // const api = 'http://localhost/Bagour_new2/';
  // const api = 'http://192.168.1.249:8080/kafer/';
  const api = 'https://mis.kfs-hiet.edu.eg/';

  const [langState, setLangState] = useState(i18n.language === 'ar');
  const { data: settiengs } = useSWR(`${api}api/website/daycare_settiengs`, fetchFromApi);
  const { data: departments } = useSWR(`${api}api/website/departments`, fetchFromApi);
  const { data: classification } = useSWR(`${api}api/website/newsClassification`, fetchFromApi);
  const { data: units } = useSWR(`${api}api/website/units`, fetchFromApi);
  const textDescription = langState ?
    ' المعهد العالي للهندسه والتكنولوجيا بكفر الشيخ  هو صرح تعليمي متميز ذو بيئة علمية خلاقة مبنية على الإبداع والتفاعل  من خلال إعتماد المعايير الوطنية والدولية لجودة التعليم وتطوير خططه ومناهجه بما يتلاءم مع التطورات العالمية لتلبية احتياجات المجتمع المحلي والإقليمي والدولي.' :
    'The High Institute of Engineering and Technology in Kafr El-Sheikh is a distinguished educational institution with a creative scientific environment built on innovation and interaction. It adopts national and international standards for quality education and develops its plans and curricula to align with global advancements, meeting the needs of the local, regional, and international communities.'
  const commonProps = { api, t, i18n, langState, textDescription };

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    setLangState(i18n.language === 'ar');
  }, [i18n.language]);
  return (
    <React.Fragment>
      {settiengs && departments && classification && units && (
        <React.Fragment>
          <Navbar settiengs={settiengs} {...commonProps} departments={departments} units={units} classification={classification} />
          <main>
            <Routes>
              <Route path="/" element={<Home {...commonProps} settiengs={settiengs} units={units} departments={departments} classification={classification} />}></Route>
              <Route path="/about/">  {/*about  */}
                <Route index element={<About {...commonProps} settiengs={settiengs} departments={departments} classification={classification} />}></Route>
                <Route path="InstituteBoardDirectors" element={<InstituteBoardDirectors {...commonProps} settiengs={settiengs} />}></Route>
                <Route path="AcademicCouncils" element={<AcademicCouncils {...commonProps} settiengs={settiengs} />}></Route>
                <Route path="Evidence and policy" element={<EvidenceAndPolicy {...commonProps} units={units} langState={langState} />}></Route>
                <Route path=":name" element={<Manger {...commonProps} settiengs={settiengs} />}></Route>
                <Route path="Pdf/:namePdf" element={<PdfAbout {...commonProps} settiengs={settiengs} />}></Route>
              </Route>
              <Route path="/department/"> {/* Department */}
                <Route path=":name" element={<Department {...commonProps} departments={departments} />}></Route>
                <Route path=":name/doctors" element={<Doctors {...commonProps} departments={departments} />}></Route>
                <Route path=":name/AssistantDoctor" element={<Doctors {...commonProps} departments={departments} />}></Route>
                <Route path=":name/Courses" element={<CoursesPage {...commonProps} departments={departments} />}></Route>
                <Route path=":name/head_Department" element={<HeadDepartment {...commonProps} departments={departments} />}></Route>
                <Route path=":name/workshops" element={<Workshops {...commonProps} departments={departments} />}></Route>
                <Route path=":name/master_doctoral" element={<MasterDoctoral {...commonProps} departments={departments} />}></Route>
                <Route path=":name/search_project" element={<SearchProject {...commonProps} departments={departments} />}></Route>
                <Route path=":name/rewords" element={<Rewords {...commonProps} departments={departments} />}></Route>
                <Route path=":name/scientific_trips" element={<ScientificTrips {...commonProps} departments={departments} />}></Route>
                <Route path=":name/decisions" element={<Decisions {...commonProps} departments={departments} />}></Route>
                <Route path=":name/:namePdf" element={<PdfDepartment {...commonProps} departments={departments} />}></Route>
              </Route>
              <Route path="/student/">  {/*  student   */}
                <Route index element={<Student />}></Route>
                <Route path=":name" element={<Pdfstudent {...commonProps} />}></Route>
                <Route path="services/:name" element={<Services {...commonProps} />}></Route>
              </Route>
              <Route path="/news/">  {/* news */}
                <Route index element={<News {...commonProps} classification={classification} />}></Route>
                <Route path=":category" element={<News {...commonProps} classification={classification} />}></Route>
                <Route path=":category/:name" element={<SingleNews {...commonProps} classification={classification} />}></Route>
              </Route>
              <Route path="/unit/">  {/* unit */}
                <Route path=":name" element={<Units {...commonProps} units={units} langState={langState} />}></Route>
                <Route path=":name/BoardStructure" element={<BoardStructure {...commonProps} units={units} />}></Route>
                <Route path=":name/ManagerDeputy" element={<ManagerDeputy {...commonProps} units={units} />}></Route>
                <Route path=":name/:namePdf" element={<PdfUnit {...commonProps} units={units} />}></Route>
              </Route>
              <Route path="/services/">    {/* services */}
                <Route path="survey" element={<Survey {...commonProps} />}></Route>
                <Route path="MilitaryEducation" element={<MilitaryEducation {...commonProps} />}></Route>
                <Route path="Suggestions and complaints" element={<SuggestionsComplaints {...commonProps} settiengs={settiengs} />}></Route>
                <Route path=":name" element={<Pdf {...commonProps} />}></Route>
              </Route>
              <Route path="/important/">  {/* services */}
                <Route path=":name" element={<Important   {...commonProps} />}></Route>
              </Route>
              {/* library */}
              {/* <Route path="/library" element={<Library />}></Route>
                      <Route path="/available" element={<Available />}></Route>
                      <Route path="/available/form" element={<AvailableForm />}></Route>
                      <Route path="/borrow" element={<Borrow />}></Route>
                      <Route path="FAQ" element={<FAQ   {...commonProps} />}></Route>
                    <Route path="researches" element={<FAQ {...commonProps} />}></Route> */}
              <Route path="/features/:id/:name" element={<SingleFeatures {...commonProps} />}></Route>
              <Route path="/doctor/:name" element={<Doctor {...commonProps} departments={departments} />}></Route>
              <Route path="/contact" element={<Contact {...commonProps} settiengs={settiengs} />}></Route>
              <Route path="job" element={<Job {...commonProps} settiengs={settiengs} />}></Route>
              <Route path="*" element={<NotFound {...commonProps} />}></Route>
            </Routes>
          </main>
          <WhatsappChatPlugin settiengs={settiengs} {...commonProps} />
          <Footer settiengs={settiengs} {...commonProps} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

// Function to fetch data using axios
const fetchFromApi = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};
export default (App);
