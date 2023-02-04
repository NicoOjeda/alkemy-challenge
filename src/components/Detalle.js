import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import swal from '@sweetalert/with-react'

function Detalle() {

    const  token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    const [Detalle, setDetalle] = useState(null)

    let {id} = useParams()

        console.log(id);

    useEffect(() => {
        if(token === null){
            navigate('/')
        } 
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=> setDetalle(res.data))
        .catch(error=>{
            swal(
              <h2>{error}</h2>
          )
          })
    }, [setDetalle]);

    console.log(Detalle);

  return (
      <>
        { Detalle? 
        (
            <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={Detalle.image} className="img-fluid rounded-start" alt={Detalle.name}/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{Detalle.name}</h5>
                    <p className="card-text">Tipo: {Detalle.type}</p>
                    <p className="card-text">Status: {Detalle.status}</p>
                    <p className="card-text">Especie: {Detalle.species}</p>
                    <p className="card-text">Origen: {Detalle.origin.name}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
        ):(
           <p>cargando</p> 
        ) }
        
    </>
  )
}

export default Detalle;