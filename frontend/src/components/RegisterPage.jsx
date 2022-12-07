import { useState, useEffect } from 'react';
import box from '../static/box.png';
import { useNavigate } from 'react-router-dom';

export function RegisterPage() {

    const nav = useNavigate();
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        document.title = "Registro de usuario";
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('proyectoinstayabackend-production.up.railway.app/register', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(inputs),
        });
        if (response.ok) {
            nav("/login");
            alert("Usuario creado exitosamente")
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
        <h1 className="text-center mt-3 mb-5" style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>
        <div className="d-flex flex-column align-items-center rounded shadow" style={{backgroundColor: "white"}}>
            <h3 className="py-5">REGISTRO DE NUEVO USUARIO</h3>
            <img src={box} alt="logo" style={{width:"15%"}}></img>
            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                <div>
                    <div className="my-4 row">
                        <label for="nombre" className="mt-1 form-label col">Nombres:</label>
                        <div>
                            <input 
                                required
                                type="text"
                                className="form-control rounded col" 
                                id="nombre" 
                                placeholder="Ingrese su nombre completo" 
                                name="fullName"
                                value={inputs.fullName || ""}
                                onChange={handleChange}>
                            </input>
                        </div>
                    </div>
                    <div className="my-4 row">
                        <label for="username" className="mt-1 form-label col">Usuario:</label>
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
                        <label for="password" className="mt-1 form-label col">Contraseña:</label>
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
                    <div className="my-4 row">
                        <label for="email" className="mt-1 form-label col">Correo:</label>
                        <div>
                            <input
                                required
                                type="email" 
                                className="form-control rounded col" 
                                id="email" 
                                placeholder="Ingrese su id." 
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}>
                            </input>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-4 mt-4 rounded">Enviar</button>
            </form>
        </div>
    </div>
    )
}