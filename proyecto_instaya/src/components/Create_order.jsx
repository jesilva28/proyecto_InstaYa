import box from '../static/box.png'
import { Update_order } from './Update_order'

export function Create_order() {

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-5 mb-4" style={{ color: "white" }}>InstaYA - MENSAJERÍA </h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow " style={{ backgroundColor: "white" }}>

                <h3 className='py-4'> REGISTRO DE NUEVO USUARIO</h3>

                <form className="d-flex flex-column  py-3">

                    <div>


                        <div className='d-flex flex-column align-items-center'>

                            <img src={box} alt="logo" style={{ width: "14%" }}></img>

                        </div>

                        <div className='py-3d-flex flex-column align-items-rigth '>

                            <label for="dir_r" className="mt-4 px-2 py-2 "> Seleciona Fecha:</label>
                            <input type="date" name="fecha" min="2022-01-00" max="2022-12-31" step="2" />
                            <label for="dir_r" className="mt-4 px-3 "> Seleciona Hora:</label>
                            <input type="time" name="hora" min="18:00" max="21:00" step="3600" />

                        </div>
                        <br />
                        <div className='py-3d-flex flex-column align-items-rigth '>

                            <label for="dir_r" className="mt-4 px-2 py-2 "> Largo:</label>
                            <input type="text" id="largo" name="largo" required
                                minlength="4" maxlength="8" size="4"></input>

                            <label for="dir_r" className="mt-4 px-2 py-2 "> Ancho:</label>
                            <input type="text" id="Ancho" name="Ancho" required
                                minlength="4" maxlength="8" size="4"></input>
                            
                            <label for="dir_r" className="mt-4 px-2 py-2 "> Peso:</label>
                            <input type="text" id="peso" name="peso" required
                                minlength="4" maxlength="8" size="4"></input>
                           

                        </div>
                        <br />

                        <div className="mb-2 px-0 row ">
                            <label for="dir_r" className="mt-1  form-label col">Dirección Recogida:</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="dir_r"
                                    placeholder="digite direccion recogida."
                                    name="dir_r">
                                </input>
                            </div>
                        </div>
                        <div className="mb-2 row">
                            <label for="ciudad_r" className="mt-1 form-label col">Ciudad Recogida:</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="ciudad_r"
                                    placeholder="digite ciudad recogida"
                                    name="ciudad_r">
                                </input>
                            </div>
                        </div>
                        <div className="mb-2 px-0 row">
                            <label for="nombre_d" className="mt-1  form-label col">Nombre Destinatario:</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="dir_r"
                                    placeholder="digite nombre destinatario"
                                    name="nombre_d">
                                </input>
                            </div>
                        </div>
                        <div className="mb-2 px-0 row">
                            <label for="cedula" className="mt-1  form-label col">Cedula/Nit Destinatario:</label>
                            <div>
                                <input
                                    type="number"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="dir_r"
                                    placeholder="digite numero celuda/Nit"
                                    name="cedula">
                                </input>
                            </div>
                        </div>
                        <div className="mb-2 px-0 row">
                            <label for="cedula" className="mt-1  form-label col">Dirección Entrega:</label>
                            <div>
                                <input
                                    type="number"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="dir_r"
                                    placeholder="digite dirección entrega"
                                    name="cedula">
                                </input>
                            </div>
                        </div>
                        <div className="mb-2 px-0 row">
                            <label for="cedula" className="mt-1  form-label col">Ciudad Entrega:</label>
                            <div>
                                <input
                                    type="number"
                                    className="form-control rounded col rounded w-5 shadow align-items-right"
                                    id="dir_r"
                                    placeholder="digite ciudad entrega"
                                    name="cedula">
                                </input>
                            </div>
                        </div>

                    </div>


                </form>
                <br />

                <label>
                    <input type="checkbox" name="terminos" />
                    He leido los terminos y condiciones</label>
                <br />

                <div className="mb-3 px-5 align-items-center row ">
                    <a class="btn btn-primary" href="{Update_order}" role="button">Link</a>
                    <input class="btn btn-primary" type="reset" value="Limpiar"></input>
                    <button class="btn btn-primary" type="submit">Crear Órden</button>
                    <br />

                </div>


            </div>
        </div >


    )
}