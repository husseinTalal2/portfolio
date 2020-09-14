import React from 'react';
import Navbar from './containers/Navbar';
import HomePage from './containers/HomePage/HomePage';
import SkillsPage from './containers/SkillsPage/SkillsPage';
import ContactPage from './containers/ContactPage/ContactPage';
import AboutMe from './components/ِAboutPage/AboutMe';
import './index.css';
import Certificates from './components/ِAboutPage/Certificates';
import Testimonials from './components/ِAboutPage/Testimonials';
import CV from './components/ِAboutPage/CV';

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      <HomePage />
      <AboutMe />
      <SkillsPage />
      <Certificates />
      <Testimonials />
      <CV />
      <ContactPage />
    </div>
  );
}

export default App;
