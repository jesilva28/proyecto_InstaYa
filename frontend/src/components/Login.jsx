import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import box from '../static/box.png'

export function Login() {

    useEffect(() => {
        document.title = "Inicio de sesión";
    }, []);
    const nav = useNavigate();

    const [inputs, setInputs] = useState({});
    const [message, setMessage] =  useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('proyectoinstayabackend-production.up.railway.app/login', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(inputs),
        });
        if (response.ok) {
            nav("/orders");
        }
        if (!response.ok) {
            const content = await response.json();
            setMessage(content);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-3 mb-5" style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow" style={{backgroundColor: "white"}}>
                <h3 className="py-5">INICIO DE SESIÓN</h3>
                <img src={box} alt="logo" style={{width:"15%"}}></img>
                { message.message ? (
                    <p className='text-danger mt-4'>{message.message}</p>
                ):(<p></p>)}
                <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-4 row">
                            <label htmlFor="username" className="mt-1 form-label col">Usuario:</label>
                            <div>
                                <input
                                    required
                                    type="text" 
                                    className="form-control rounded col" 
                                    id="username" 
                                    placeholder="Ingrese su id." 
                                    name="username"
                                    value={inputs.username || ""}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                        <div className="mb-4 row">
                            <label htmlFor="password" className="mt-1 form-label col">Contraseña:</label>
                            <div>
                                <input
                                    required
                                    type="password" 
                                    className="form-control rounded col" 
                                    id="password" 
                                    placeholder="Ingrese su contraseña" 
                                    name="password"
                                    value={inputs.password || ""}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4 mt-4 rounded">Iniciar sesión</button>
                    <p className="text-center"><a className="text-dark" href="/recuperar-password" style={{textDecoration: "none"}}>¿Olvidó su contraseña?</a></p>
                </form>
            </div>
        </div>
    )
}