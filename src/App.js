import React from 'react';
import Navbar from './containers/Navbar';
import HomePage from './containers/HomePage';
import SkillsPage from './containers/SkillsPage';
import ContactPage from './containers/ContactPage';
import AboutPage from './containers/AboutPage';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
