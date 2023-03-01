import logo from './logo.svg';
import './App.css';
import Inde from "./pages/Index";
import Salon from "./pages/Salon";
import Commerce from "./pages/Commerce";
import Catalogue from "./pages/Catalogue";
import Education from "./pages/Education";
import Menu from "./pages/Menu";
import Educationlogin from './pages/EducationLogin';
import Cours from "./pages/Cours";
import Addarticle from './pages/Addarticle';
import Articles from './pages/Articles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import Login from "./pages/Login";
import UserDetails from './pages/userDetails';
import Voda from './pages/Voda';
import CatalogueDescription from './pages/CatalogueDescription';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <div className="App">
       <Router>
         <Routes>
             <Route path="/" element={<Inde />} />
             <Route path="/salon" element={<Salon />} />
             <Route path="/commerce" element={<Commerce />} />
             <Route path="/catalogue" element={<Catalogue />} />
             <Route path="/education" element={<Education />} />
             <Route path="/educationLogin" element={<Educationlogin />} />
             <Route path="/cours" element={<Cours />} />
             <Route path="/Addarticle" element={<Addarticle />} />
             <Route path="/Articles" element={<Articles />} />
             <Route path="/Register" element={<Register />} />
             <Route path="/Login" element={<Login />} />
             <Route path="/UserDetails" element={<UserDetails />} />
             <Route path="/Voda" element={<Voda />} />
             <Route path="/CatalogueDescription" element={<CatalogueDescription />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;

//isLoggedIn == "true" ? <UserDetails /> : <Login />
