import box from '../static/box.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function CreateOrder() {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    useEffect(() => {
        document.title = "Crear orden";
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(values => ({...values, [name]:value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch("proyectoinstayabackend-production.up.railway.app/api/orders/create-order", {  
            method: "POST",
            headers: {
                "Content-Type": "Application/json", 
            },
            body: JSON.stringify(form),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        navigate("/orders"); 
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-5 mb-4" style={{ color: "white" }}>InstaYA - MENSAJERÍA </h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow " style={{ backgroundColor: "white" }}>

                <h3 className='py-4'> CREAR NUEVA ORDEN</h3>

                <form className="d-flex flex-column  py-3" onSubmit={handleSubmit} >  

                    <div>


                        <div className='d-flex flex-column align-items-center'>
                            <img src={box} alt="logo" style={{ width: "14%" }}></img>
                        </div>

                        <div className='py-3d-flex flex-column align-items-rigth '>

                            <label htmlFor="fecha" className="mt-4 px-2 py-2 "> Seleciona Fecha:</label>
                            <input 
                                type="date" 
                                name="fecha" 
                                required
                                id="fecha" 
                                min="2022-01-00" 
                                max="2022-12-31"  
                                value={form.fecha || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="hora" className="mt-4 px-3 "> Seleciona Hora:</label>
                            <input 
                                type="time" 
                                name="hora"
                                required 
                                id="hora"
                                step="3600" 
                                value={form.hora || ""}
                                onChange={handleChange}
                            />

                        </div>
                        <br />
                        <div className='py-3d-flex flex-column align-items-rigth '>

                            <label htmlFor="largo" className="mt-4 px-2 py-2 "> Largo:</label>
                            <input 
                                type="text" 
                                id="largo" 
                                name="largo" 
                                required
                                minLength="1" 
                                maxLength="8" 
                                size="4"
                                value={form.largo || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="ancho" className="mt-4 px-2 py-2 "> Ancho:</label>
                            <input 
                                type="text" 
                                id="ancho" 
                                name="ancho" 
                                required
                                minLength="1" 
                                maxLength="8" 
                                size="4"
                                value={form.ancho || ""}
                                onChange={handleChange}
                            />
                            
                            <label htmlFor="peso" className="mt-4 px-2 py-2 "> Peso:</label>
                            <input 
                                type="text" 
                                id="peso" 
                                name="peso" 
                                required
                                minLength="1" 
                                maxLength="8" 
                                size="4"
                                value={form.peso || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <br />

                        <div className="mb-2 px-0 row ">
                            <label htmlFor="dirRecogida" className="mt-1  form-label col">Dirección Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="dirRecogida"
                                placeholder="digite direccion recogida."
                                name="dirRecogida"
                                value={form.dirRecogida || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="ciudadRecogida" className="mt-1 form-label col">Ciudad Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="ciudadRecogida"
                                placeholder="digite ciudad recogida"
                                name="ciudadRecogida"
                                value={form.ciudadRecogida|| ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="nombreDestinatario" className="mt-1  form-label col">Nombre Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="nombreDestinatario"
                                placeholder="digite nombre destinatario"
                                name="nombreDestinatario"
                                value={form.nombreDestinatario || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="cedulaDestinatario" className="mt-1  form-label col">Cedula/Nit Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="cedulaDestinatario"
                                placeholder="digite numero celuda/Nit"
                                name="cedulaDestinatario"
                                value={form.cedulaDestinatario || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="dirEntrega" className="mt-1  form-label col">Dirección Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="dirEntrega"
                                placeholder="digite dirección entrega"
                                name="dirEntrega"
                                value={form.dirEntrega || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="ciudadEntrega" className="mt-1  form-label col">Ciudad Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                required
                                id="ciudadEntrega"
                                placeholder="digite ciudad entrega"
                                name="ciudadEntrega"
                                value={form.ciudadEntrega || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="mb-3 px-5 align-items-center row ">
                        <input 
                            className="btn btn-primary rounded align-items-center row" 
                            type="submit"
                            value= "Crear orden"
                        />
                    <br />
                    </div>
                </form>
            </div>
        </div>


    )
}