import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, Link} from 'react-router-dom'
import swal from '@sweetalert/with-react'

function Listado() {

    const  token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    const [personajes,setPersonajes] = useState([])

    useEffect(() => {
        
        if(token === null){
            navigate('/')
        }
        axios.get('https://rickandmortyapi.com/api/character')
        .then(res=>setPersonajes(res.data.results))
        .catch(error=>{
          swal(
            <h2>{error}</h2>
        )
        })
    }, [setPersonajes]);


    return (
    <div>
      <div className='row'>
      {
        personajes.map((personaje) =>{
          return(
            <div className='col-3' style={{border: '1px solid black'}} key={personaje.id}>
              <div className="card">
                  <img src={personaje.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">Especie: {personaje.species}</p>
                    <Link to={`/detalle/${personaje.id}`} className="btn btn-primary">Detalle</Link>
                  </div>
              </div>
          </div>
          )
        })
      }
 
      </div>
    </div>
  )
}

export default Listado;
