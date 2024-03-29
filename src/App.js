import React from "react";
import './App.css'

import { Footer, Blog, Features, WhatGPT3, Header, Possibility } from './Containers'
import { CTA, Brand, Navbar } from './Components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  );
}

export default App;
