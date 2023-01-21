import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "../node_modules/alk-rex-bold/css/alk-rex-bold.min.css";
import "../node_modules/bpg-banner-caps/css/bpg-banner-caps.min.css";

import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
