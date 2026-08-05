import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Navbar from "./components/navbar/navbar.jsx";
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path = '/about' element={<About />} />
          <Route path = '/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
