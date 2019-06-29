import React from 'react';
import './App.css';
import './sass/main.scss';
import { Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage/MainPage'
import Claim from './views/Claim/claim'
// import Footer from './components/Footer/footer'
import Form from './components/Form/form'
// import Navbar from './components/NavBar/navbar'
import CardPage from './views/CardPage/CardPage'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/Form" component={Form} />
      <Route path="/Premium" component={CardPage} />
      <Route path="/Claim" component={Claim} />
    </Switch>
  );
}

export default App;
