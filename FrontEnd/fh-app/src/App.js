import React from 'react';
import './App.css';
import './sass/main.scss'; //to check
import MainPage from './views/MainPage/MainPage' 
import Footer from './components/Footer/footer' //to check
import Form from './components/Form/form'
import Navbar from './components/NavBar/navbar'
import Button from './components/Button/button'

function App() {
  return (
    <div>
      <Navbar/>
      <br/>
      <Form/>
      <br/>
      <Button/>
      <br/>
      <br/>
      <br/>
   {/* <MainPage/> */}
   <Footer/>
   </div>
  );
}

export default App;
