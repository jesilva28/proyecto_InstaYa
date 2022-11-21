import box from '../static/box.png';

export function LandingPage() {
    return (
        <nav className="navbar py-4 bg-light d-flex justify-content-around">
            <div>
                <img 
                    src={box} 
                    alt="logo" 
                    width="60" 
                    height="60"
                >
                </img>
            </div>
            <div>
                <h1>InstaYa - Mensajería</h1>
            </div>
            <div>
                <button 
                    type="submit"
                    className="btn btn-primary btn-lg mx-2 rounded"
                    >Iniciar sesión
                </button>
                <button 
                    type="submit" 
                    className="btn btn-primary btn-lg mx-2 rounded"
                    >Registro
                </button>
            </div>
        </nav>
    )
}