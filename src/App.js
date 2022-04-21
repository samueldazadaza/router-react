 import React from "react";
 import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
 } from 'react-router-dom'

 import Inicio from "./components/inicio.jsx";

function App() {
  return (
    <Router>
      <Routes>

            <Route
        		path="/Inicio"
				element={"texto plano de ruta /inicio"}
			/>

            <Route
				path="/"
				element={"texto plano raiz (/) "}
			/>
        
      </Routes>
    </Router>
    );
}

export default App;
