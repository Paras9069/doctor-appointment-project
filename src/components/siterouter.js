import React from 'react'
import Landingpage from './landingpage'
import { Route , Routes } from 'react-router-dom'
import Header from './header'
import About from './about'
import Footer from './footer'
import Team from './team'
import Doctor from './doctor'
import Services from './services'
import Contact from './contact'
import Register from './register'
import Login from './login'
import Docstruture from './docstruture'
import Doc_add from './doc_add'
import Detail from './detail'
import Adminheader from './adminheader'
import Appointshow from './appointshow'
import Appointment from './appointment'
import Docreg from './docreg'
import Addservices from './addservices'
import Showservice from './showservice'
import AdminAppointments from './adminappointment'
import SymptomChecker from './symtomchecker'
import AddSymptom from './addsymptom'
import AddMedicine from './addmedicine'
import MedicineResults from './medicineresult'


const Siterouter = () => {
  return (
    <div>
      <Routes>

    <Route path='/' element={< Landingpage/>}/> 
    <Route path='header' element={< Header/>}/> 
    <Route path='footer' element={< Footer/>}/> 
    <Route path='about' element={< About/>}/> 
    <Route path='team' element={< Team/>}/> 
    <Route path='doctor' element={< Doctor/>}/> 
    <Route path='services' element={< Services/>}/> 
    <Route path='contact' element={< Contact/>}/> 
    <Route path='register' element={<Register/>}/> 
    <Route path='login' element={<Login/>}/> 
    <Route path='docstructure' element={<Docstruture/>}/> 
    <Route path='doc_add' element={<Doc_add/>}/> 
    <Route path='detail' element={<Detail/>}/> 
    <Route path='appshow' element={<Appointshow/>}/> 
    <Route path='appointment' element={<Appointment/>}/> 
    <Route path='docreg' element={<Docreg/>}/> 
    <Route path='admin' element={<Adminheader/>}/> 
    <Route path='addservice' element={<Addservices/>}/> 
        
    <Route path='accept' element={<AdminAppointments/>}/> 
        <Route path='checker' element={<SymptomChecker/>}/> 
         <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/addsymptom" element={<AddSymptom />} />
        <Route path="/addmedicine" element={<AddMedicine />} />
        <Route path="/medicineresults" element={<MedicineResults/>} />


      </Routes>
    </div>
  )
}

export default Siterouter
