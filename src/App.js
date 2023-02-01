// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Collection from "./components/Collection";
import Effort from "./components/Effort";
import Support from "./components/Support.jsx";
import Contact from "./components/Contact.jsx";
import Making from "./components/Making.jsx";
import Detail from "./components/Detail";
import collectionCardData from "./data/collectionCardData";

function App() {
  const [projects, setProjects] = useState(collectionCardData);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route
          path="/collection/details/:id"
          element={<Detail projects={projects} />}
        ></Route>
        <Route path="/effort" element={<Effort />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/behind-the-scenes" element={<Making />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
