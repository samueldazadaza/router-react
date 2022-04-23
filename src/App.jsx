import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom'
import Usuarios from './components/Usuarios'
import Usuario from './components/Usuario'


function App () {
	return (
	<Router>
		<Link to="/">Usuarios</Link>

		<Routes>
		<Route
				exact //para que la raiz muestre info exacta
				path="/"
				element={<Usuarios/>}
			/>
			<Route
				path="/usuario/:id"
				element={<Usuario/>}
			/>
		</Routes>
	</Router>
	)
}

export default App;