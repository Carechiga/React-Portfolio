//importing styling for app.js
import './App.css';
//import all of our components for use in the App
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  //tab/components when selected will decide whats rendered to the page. default page is "About"
  const [selectedTab, setSelectedTab] = useState("About")

  const renderTab = () => { 
    //switch statement to handle logic for which tab to render
    switch(selectedTab) {
      case "About":
        return <About />;
      case "Projects":
        return  <Projects />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      }
  }

  //app will always render header and footer with associated props and have the main body be rendered by what tab is selected
  return (
    <div>
      <div>
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
