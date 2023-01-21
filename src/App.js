import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";


function App() {
  return (
   <>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/listado" element={<Listado/>}/>
    </Routes>
   </>
   
  );
}

export default App;
