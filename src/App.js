import React from "react";
import "./App.css";
import Header from './Header';
import Greetings from './Greetings';
import Maincontent from './Maincontent';
import Footer from './Footer';


export default function App(){
  return(
    <div>
    <Header/>
    <Greetings user="Nathan, Felix " />
    <Maincontent />
    <Footer/>
    </div>
  );
}

