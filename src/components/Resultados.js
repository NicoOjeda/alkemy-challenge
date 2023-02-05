import React from 'react'
import { useParams } from 'react-router-dom';

function Resultados() {

    let {keyword} = useParams()
      

  return (
    <div>
      <p> Resultado = {keyword} </p>
    </div>
  )
}

export default Resultados;