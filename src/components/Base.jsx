import React, {useState, useEffect} from 'react'

const Base = () => {
    const [nombre, setNombre] = useState('pedro')

    //para cargar contenido despues de 2seg de renderizar en el dom
    useEffect ( () =>{
        setTimeout( ()=>{
            setNombre('Manuel')
        }, 2000)
    })

  return (
    <div>
        <h1>Pagina de Base ruta / </h1>
        {nombre}
    </div>
  )
}

export default Base