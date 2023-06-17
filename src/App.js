import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './style/App.scss';
import './style/Header.scss'
import './style/Home.scss'
import './style/footer.scss'


export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
    </Router>
  )
}
