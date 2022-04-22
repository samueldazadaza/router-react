 import React from "react";
 import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
 } from 'react-router-dom'

 //importar componentes personalizados
 import Inicio from "./components/Inicio";
 import Base from "./components/Base";

function App() {
  return (
    <Router>
		<Link to="/inicio" className="p-3">Inicio</Link>
		<Link to="/">Base</Link>

      <Routes>
            <Route
        		path="/Inicio"
				element={<Inicio/>}
			/>

            <Route
				path="/"
				element={<Base/>}
			/>
      </Routes>
    </Router>
    );
}

export default App;
