import { useState } from 'react'
import box from '../static/box.png'

export function RegisterPage() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
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