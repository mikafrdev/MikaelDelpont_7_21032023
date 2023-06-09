import React from 'react' //Permet d'activer <React.StrictMode>
import ReactDOM from 'react-dom/client' //Génère les composants dans le DOM
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './pages/Error'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> Tool that highlights potential issues in a programme, checks and gives warnings
  <React.StrictMode>

    <Router>
      <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();