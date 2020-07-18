import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { Template } from './Components/mainComponents'
import  Header  from './Components/Partials/Header'
import  Footer  from './Components/Partials/Footer'

import Router from './Router'

import './App.css'

function Page(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Header />
          <Router />
          <Footer />
        </Template>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user:state.user
  }
}

const mapDispatchToProps = dispath => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
