import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import swal from '@sweetalert/with-react'

function Detalle() {

    const  token = sessionStorage.getItem('token')
    const navigate = useNavigate()
    const [personajeDetalle, setPersonajeDetalle] = useState({})

    let {id} = useParams()

        console.log(id);

    useEffect(() => {
        if(token === null){
            navigate('/')
        } 
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=> setPersonajeDetalle(res.data))
        .catch(error=>{
            swal(
              <h2>{error}</h2>
          )
          })
    }, [setPersonajeDetalle]);

    console.log(personajeDetalle);

  return (
    <div>
        <div class="card mb-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detalle;