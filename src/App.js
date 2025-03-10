import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CommunityImpact from './Pages/CommunityImpact';
import EntrepreneurshipMentorship from './Pages/EntrepreneurshipMentorship';
import ParliamentaryLeadership from './Pages/ParliamentaryLeadership';
import WomenEmpowerment from './Pages/WomenEmpowerment';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community-impact" element={<CommunityImpact />} />
        <Route path="/entrepreneurship-mentorship" element={<EntrepreneurshipMentorship />} />
        <Route path="/parliamentary-leadership" element={<ParliamentaryLeadership />} />
        <Route path="/women-empowerment" element={<WomenEmpowerment />} />
      </Routes>
    </Router>
  );
}

export default App;
