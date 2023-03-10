import React from 'react'
import swal from '@sweetalert/with-react'
import { useNavigate } from 'react-router-dom'

function Buscador() {

    const navigate = useNavigate()

    const submitHandler = e =>{
        e.preventDefault()
        const keyword = e.target.keyword.value.trim();
        console.log(keyword);
        if(keyword.length === 0){
            swal(<h4>Escribe una palabra</h4>)
        } else if(keyword.length < 4){
            swal(<h4>Tienes que escribir mas de 4 caracteres</h4>)
        } else{
            e.target.keyword.value = ""
            navigate(`/resultados/${keyword}`)
        }

    }

  return (
    <form onSubmit={submitHandler}>
        <label>
        <input type="text" name='keyword' placeholder='Buscar...'/>
        </label>
        <button type='submit'>Buscar</button>
</form>
  )
}

export default Buscador;
