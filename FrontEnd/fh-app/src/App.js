import React from 'react';
import './App.css';
import './sass/main.scss'; //to check
import MainPage from './views/MainPage/MainPage' 
import Footer from './components/Footer/footer' //to check
import Form from './components/Form/form'
import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'
import CardPremium from "./components/CardPremium/CardPremium"

function App() {
  return (
    <div>
      <Navbar/>
      {/* <Form/> */}
   <MainPage/>
   {/* <CardPage /> */}
   <Footer/>
   </div>
  );
}

export default App;
