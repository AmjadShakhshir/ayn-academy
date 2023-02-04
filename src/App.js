import React from "react";
import './App.css';
import { Brand, CTA, Navbar } from "./components";
import { Courses, Features, Footer, Header, Possibility, WhatAynAcademy} from './containers'

function App() {  
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatAynAcademy />
      <Features />
      <Possibility />
      <CTA />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
