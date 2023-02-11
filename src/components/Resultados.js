import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Resultados() {
    let {keyword} = useParams()
    const [personajeResult, setpersonajesResult] = useState([])

    useEffect(() => {
        
        axios.get(`https://rickandmortyapi.com/api/character/?name=${keyword}`)
        .then(res=>setpersonajesResult(res.data.results))
        
    }, [keyword]);

      console.log(personajeResult);

  return (
    <div>
    <h2>Buscaste: {keyword}</h2>
      <div className='row'>
      { personajeResult === 0? 
      (
        personajeResult.map((personaje) =>{
          return(
            <div className='col-4' style={{border: '1px solid black'}} key={personaje.id}>
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

      ):
      (
        <p>No hay resultados</p>
      )
      }
 
      </div>
    </div>
  )
}

export default Resultados;