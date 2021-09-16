import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import BlogsPage from "./pages/BlogsPage";
import Contactme from "./pages/Contactme";
import React, { useState } from "react";
function App() {
  const [navToggle, setNavToggle] = useState(false);
  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`side--bar ${navToggle ? "nav-toggle" : ""}`}>
        <Navbar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main--content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/blogs" exact>
              <BlogsPage />
            </Route>
            <Route path="/contact" exact>
              <Contactme />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
