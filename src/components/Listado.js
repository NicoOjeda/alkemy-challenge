import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Listado() {

    const  token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        
        if(token === null){
            navigate('/')
        }
    }, []);

    return (
    <div>
      <h2>listados</h2>
    </div>
  )
}

export default Listado;
