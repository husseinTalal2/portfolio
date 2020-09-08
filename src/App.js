import React from 'react';
import Navbar from './containers/Navbar';
import HomePage from './containers/HomePage/HomePage';
import SkillsPage from './containers/SkillsPage/SkillsPage';
import ContactPage from './containers/ContactPage';
import AboutPage from './containers/AboutPage';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './index.css';
function App() {
  const routes = [
    { path: '/', name: 'Home', Component: HomePage },
    { path: '/about', name: 'About', Component: AboutPage },
    { path: '/contact', name: 'Contact', Component: ContactPage },
    { path: '/skills', name: 'Skills', Component: SkillsPage },
  ];
  return (
    <div className="flex overflow-hidden">
      <Navbar />
      <Switch>
        <div className="container">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
        {/* <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/skills" component={SkillsPage} />
        <Route path="/about" component={AboutPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
