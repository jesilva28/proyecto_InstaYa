import { useEffect } from 'react'
import box from '../static/box.png'

export function Login() {

    // useEffect(() => {
    //     document.title = "Inicio de sesión";
    // }, []);
    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-3 mb-5" style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow" style={{backgroundColor: "white"}}>
                <h3 className="py-5">INICIO DE SESIÓN</h3>
                <img src={box} alt="logo" style={{width:"15%"}}></img>
                <form className="d-flex flex-column align-items-center">
                    <div>
                        <div className="my-4 row">
                            <label for="username" className="mt-1 form-label col">Usuario:</label>
                            <div>
                                <input 
                                    type="text" 
                                    className="form-control rounded col" 
                                    id="username" 
                                    placeholder="Ingrese su id." 
                                    name="username">
                                </input>
                            </div>
                        </div>
                        <div className="mb-4 row">
                            <label for="pwd" className="mt-1 form-label col">Contraseña:</label>
                            <div>
                                <input 
                                    type="password" 
                                    className="form-control rounded col" 
                                    id="pwd" 
                                    placeholder="Ingrese su contraseña" 
                                    name="pwd">
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