import React from 'react';
import './App.css';
import './sass/main.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage/MainPage'
// import Footer from './components/Footer/footer'
import Form from './components/Form/form'
// import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'
<<<<<<< HEAD

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Form" component={Form} />
      <Route path="/Premium" component={CardPage} />
    </Switch>
=======
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
>>>>>>> 3704627360c4ad5a3717182fffe4a3340943400c
  );
}

export default App;
