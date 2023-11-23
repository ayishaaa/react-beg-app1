import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { default as App } from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/home';
import Contact from './components/contact';
import NoPage from './components/nopage';
import About from './components/about';
import Services from './components/services';
import NoteState from './context/notes/NoteState';
import Detail from './components/detail';
import Map from './components/map';

function App2() {
  return (
    <BrowserRouter>
    <NoteState>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="services" element={<Services />} />
          <Route path="detail" element={<Detail/>}/>
          <Route path="map" element={<Map/>}/>

        </Route>
      </Routes>
      </NoteState>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

reportWebVitals();
