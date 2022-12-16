import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar, Footer} from './components'
import { Banner, About, Contact } from './Pages'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Banner/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
        <Footer/>

      </Router>        
</>
    
  );
}

export default App;
