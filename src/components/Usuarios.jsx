import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Usuarios = () => {
    const [usuarios, setUsuatios] = useState([])

    const obtenerUsuarios = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await res.data
        setUsuatios(users)
    }
    useEffect( ()=>{
        obtenerUsuarios()
    },[])

  return (
    <div>
        <h2>Listas de ussuarios</h2>
        {
            usuarios.map( (item) => (
                <div>
                    <Link to={`/usuario/${item.id}`} className="hover-zoom">{item.name}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Usuarios