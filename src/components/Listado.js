import React, { useEffect } from 'react'
import { useNavigate, Link} from 'react-router-dom'


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
      <div className='row'>
        <div className='col-3' style={{border: '1px solid black'}} >
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link href="/" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
       

      </div>
    </div>
  )
}

export default Listado;
