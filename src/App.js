import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <Router>
      <Header/>
    
      <Container>
        <Route path = '/' component={HomeScreen} exact/>
       
      </Container>
      <Footer/>
    </Router>
  )
}

export default App
