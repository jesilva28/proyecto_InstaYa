import box from '../static/box.png'

export function RegisterPage() {
    return (
        <div className="d-flex flex-column align-items-center">
        <h1 className="text-center mt-3 mb-5" style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>
        <div className="d-flex flex-column align-items-center rounded shadow" style={{backgroundColor: "white"}}>
            <h3 className="py-5">REGISTRO DE NUEVO USUARIO</h3>
            <img src={box} alt="logo" style={{width:"15%"}}></img>
            <form className="d-flex flex-column align-items-center w-100">
                <div>
                    <div className="my-4 row">
                        <label for="nombre" className="mt-1 form-label col">Nombres:</label>
                        <div>
                            <input 
                                type="text" 
                                className="form-control rounded col" 
                                id="nombre" 
                                placeholder="Ingrese su nombre completo" 
                                name="nombre">
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
                    <div className="my-4 row">
                        <label for="email" className="mt-1 form-label col">Correo:</label>
                        <div>
                            <input 
                                type="email" 
                                className="form-control rounded col" 
                                id="email" 
                                placeholder="Ingrese su id." 
                                name="email">
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