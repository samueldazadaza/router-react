import React from 'react'
import { useParams } from 'react-router-dom'

const Inicio = () => {

    const {id, nombre, edad} = useParams()
  return (
    <div>
        <h1>Pagina de inicio</h1>
        <p>id en url= {id}</p>
        <p>Nombre en url= {nombre}</p>
        <p>edad en url= {edad}</p>
    </div>
  )
}

export default Inicio