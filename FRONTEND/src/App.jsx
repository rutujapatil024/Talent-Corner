import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Mission from './Pages/Mission/Mission';
import Management from './Pages/Management/Management';
import Growth from './Pages/Growth/Growth';
import Recruitment from './Pages/Recruitment/Recruitment';
import GetInTouch from './Components/GetInTouch/GetInTouchForm';
import Footer from './Components/Footer/Footer';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import Faq from './Components/Faq/Faq';
import Campus from './Pages/Campus/Campus';
import CxO from './Pages/CxO/CxO';
import ScrollToTop from './ScrollToTop';
import Chatbot from './Components/Chatbot/Chatbot';
import Admin from './Components/admin/admin';
import AdminLogin from './Components/Admin/AdminLogin';
import Franchise from './Pages/Franchise/Franchise';

const App = () => {
  const location = useLocation();
  const hideFooterAndChatbot = location.pathname.startsWith('/admin');

  return (
    <div className='App'> 
      <ScrollToTop />
      <Navbar />
      <div className="page-content" style={{ paddingTop: "120px" }}>
        <Routes>     
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/management" element={<Management />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/servicecard" element={<ServiceCard />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cxo" element={<CxO />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
        {!hideFooterAndChatbot && <Chatbot />}
        {!hideFooterAndChatbot && <Footer />}
      </div>
    </div>
  );
};

export default App;
