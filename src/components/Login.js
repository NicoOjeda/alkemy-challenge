import React from 'react'

function Login() {

    const submitHandler = (e)=>{    
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === "" || password === ""){
            console.log("los campos no pueden estar vacios");
            return
        }

        if (email !== "" && !regexEmail.test(email)){
            console.log("debes ingresar una direccion de correo electronico valida");
            return
        }
        
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            console.log('credenciales invalidas');
            return
        }

        console.log('ya podemos enviar informacion');
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
