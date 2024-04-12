import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProjetc from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/company' element={<Company />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/newproject' element={<NewProjetc/>}/>
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
