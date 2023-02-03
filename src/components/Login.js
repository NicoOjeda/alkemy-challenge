import React, { useEffect } from 'react';
import axios from 'axios'; 
import swal from '@sweetalert/with-react'
import {useNavigate} from 'react-router-dom'


function Login() {
    let  tokenget = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {  
        if(tokenget){
            navigate('/listado')
        }
    }, []);

    const submitHandler = (e)=>{    
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === "" || password === ""){
            
            swal(
                <h2>"los campos no pueden estar vacios"</h2>
            );
            return
        }
        if (email !== "" && !regexEmail.test(email)){
            swal(
                <h2>"debes ingresar una direccion de correo electronico valida"</h2>
            );
            return
        }      
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal(
                <h2>'credenciales invalidas'</h2>
            );
            return
        }

        axios
        .post('http://challenge-react.alkemy.org', { email , password })
        .then(res=>{
            swal(<h2>'Estas dentro'</h2>);
                const tokenrecibido = res.data.token;
                localStorage.setItem('token', tokenrecibido)
                navigate('/listado')
        })
    }

    
   

  return (
    <>
    
    <h2>Formulario de login</h2>
    <form onSubmit={submitHandler}>
        <label>
        <span>Correo electronico:</span>
        <input type="text" name='email' />
        </label>
        <label>
        <span>Contraseña:</span>
        <input type="password" name='password' />
        </label>
        <button type='submit'>Ingresar</button>
    </form>
    </>
  )
}

export default Login;
