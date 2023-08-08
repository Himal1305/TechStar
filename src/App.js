import { Routes,Route } from "react-router";
import Header from "./components/Header";
import "./styles/app.css"
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import "./styles/media.css"
function App() {
  return (
    <div className="dd">
  
    <Header></Header>
    <Routes>
    <Route path="/" element={<Home/>} />
    
    <Route path="/contact" element={<Contact/>} />

    <Route path="/service" element={<Service/>} />
    



  </Routes>
</div>
  );
}

export default App;
