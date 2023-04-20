
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter ,Route,Routes} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import User from "./components/User";





function App() {
  return (
  <BrowserRouter>
  <Nav/>

   <Routes>
   <Route path="/Home" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/> 
      <Route path="/About" element={<About/>}/>
       <Route path ="/user/sad" element={  <User/>} />
      <Route path ="/user/:id" element={  <User/>} />
   </Routes>
      
  <Footer/>
  </BrowserRouter>
  
  );
}

export default App;
