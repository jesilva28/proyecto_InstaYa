import box from '../static/box.png'

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function UpdateOrder() {
    const [form, setForm] = useState({});

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setForm(values => ({...values, [name]:value}));
    }

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/api/orders/orders/${params.id.toString()}`);  
        
            if (!response.ok) {
                const message = `Ha ocurrido un error: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const order = await response.json();
            if (!order) {
                window.alert(`Registro con ID ${id} no encontrada`);
                navigate("/orders");  
                return;
            }
            setForm(order);
        }
        fetchData();
        return;
    }, [params.id, navigate]);

    // function updateForm(value) {
    //     return setForm((prev) => {
    //         return { ...prev, ...value};
    //     });
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        // const editedOrder = {
        //     fecha: form.fecha,
        //     hora: form.hora,
        //     largo: form.largo,
        //     ancho: form.ancho,
        //     peso: form.peso,
        //     dir_r: form.dir_r,
        //     ciudad_r: form.ciudad_r,
        //     nombre_d: form.nombre_d,
        //     cedula: form.cedula,
        //     dir_e: form.dir_e,
        //     ciudad_e: form.ciudad_e,
        // };

        await fetch(`http://localhost:5000/api/orders/update-order/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'Application/json'
            },
        });

        navigate("/orders");
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-5 mb-4" style={{ color: "white" }}>InstaYA - MENSAJERÍA </h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow " style={{ backgroundColor: "white" }}>

                <h3 className='py-4'> ACTUALIZAR ORDEN</h3>

                <form className="d-flex flex-column  py-3" onSubmit={handleSubmit}>

                    <div>


                        <div className='d-flex flex-column align-items-center'>
                            <img src={box} alt="logo" style={{ width: "14%" }}></img>
                        </div>

                        <div className='py-3d-flex flex-column align-items-rigth '>

                        <label htmlFor="fecha" className="mt-4 px-2 py-2 "> Seleciona Fecha:</label>
                            <input 
                                type="date" 
                                name="fecha" 
                                id="fecha" 
                                required
                                min="2022-01-00" 
                                max="2022-12-31"  
                                value={form.fecha || ""}
                                onChange={handleChange}
                            />

                            <label htmlFor="hora" className="mt-4 px-3 "> Seleciona Hora:</label>
                            <input 
                                type="time" 
                                name="hora" 
                                id="hora"
                                required
                                step="3600" 
                                value={form.hora}
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
                                value={form.largo}
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
                                value={form.ancho}
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
                                value={form.peso}
                                onChange={handleChange}
                            />


                        </div>
                        <br />

                        <div className="mb-3 px-5 align-items-center row ">
                            <label htmlFor="estado" className="mt-1 px-5 ">Estado:</label>
                            <div className="mb-2 px-1 py-1 align-items-center row ">
                                <select>
                                    <option>Seleccione una opción </option>
                                    <option>Guardado</option>
                                    <option>Cancelado</option>
                                    <option>Cumplido</option>

                                </select>
                            </div>
                        </div>

                        <div className="mb-2 px-0 row ">
                            <label htmlFor="dirRecogida" className="mt-1  form-label col">Dirección Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="dirRecogida"
                                required
                                placeholder="digite direccion recogida."
                                name="dirRecogida"
                                value={form.dirRecogida}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="ciudadRecogida" className="mt-1 form-label col">Ciudad Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="ciudadRecogida"
                                required
                                placeholder="digite ciudad recogida"
                                name="ciudadRecogida"
                                value={form.ciudadRecogida}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="nombreDestinatario" className="mt-1  form-label col">Nombre Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="nombreDestinatario"
                                required
                                placeholder="digite nombre destinatario"
                                name="nombreDestinatario"
                                value={form.nombreDestinatario}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="cedulaDestinatario" className="mt-1  form-label col">Cedula/Nit Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="cedulaDestinatario"
                                required
                                placeholder="digite numero celuda/Nit"
                                name="cedulaDestinatario"
                                value={form.cedulaDestinatario}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="dir_e" className="mt-1  form-label col">Dirección Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="dirEntrega"
                                required
                                placeholder="digite dirección entrega"
                                name="dirEntrega"
                                value={form.dirEntrega}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="ciudadEntrega" className="mt-1  form-label col">Ciudad Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="ciudadEntrega"
                                required
                                placeholder="digite ciudad entrega"
                                name="ciudadEntrega"
                                value={form.ciudadEntrega}
                                onChange={handleChange}
                            />
                        </div>
                        <br />

                    </div>
                    <div className="mb-3 px-5 align-items-center row ">
                    <input 
                            className="btn btn-primary" 
                            type="submit"
                            value= "Actualizar orden"
                        />
                    <br />
                    </div>

                </form>
                <br />



            </div>
        </div>


    )
}