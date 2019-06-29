import React from 'react';
import './App.css';
import './sass/main.scss'; //to check
import MainPage from './views/MainPage/MainPage' 
import Footer from './components/Footer/footer' //to check
import Form from './components/Form/form'
import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'
import CardPage1 from './views/CardPage1/CardPage1'
import CardPremium from "./components/CardPremium/CardPremium"
import InsuranceSection from './components/basics/InsuranceSection/InsuranceSection';
import CardInsurance from './components/basics/Card/CardInsurance/CardInsurance';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Form/> */}
   {/* <MainPage/> */}
   
   <CardPage />
   <Footer/>
   </div>
  );
}

export default App;
