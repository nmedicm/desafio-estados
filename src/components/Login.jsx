import { useState } from "react";

const Login = ({ setAlert }) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validarLogin = (e) => {
        e.preventDefault();

        if(email.trim() === "prueba@prueba.com" && password.trim() === "123456"){
            //alert correcto
            setAlert({
                mensaje: "Sesión iniciada",
                color: "success"
            });
            //limpiar
            setEmail("");
            setPassword("");

             return
        }

        //alert incorrecto
        setAlert({
            mensaje: "Los datos son incorrectos",
            color: "danger"
        });
    }
    
    
    return(

        <form onSubmit={validarLogin}>

            <label htmlFor="email">Email</label>
            <input 
                type="email"
                name="email"
                id="email"
                className="form-control mb-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label htmlFor="password">Password</label>
            <input 
                type="password"
                name="password"
                id="password"
                className="form-control mb-2"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button
                type="submit"
                className="btn btn-dark"
                disabled={!email.trim() || !password.trim()}
            >
                Iniciar Sesión
            </button>
            

        </form>

    )
};

export default Login;