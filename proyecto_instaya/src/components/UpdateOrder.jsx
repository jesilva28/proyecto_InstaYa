import box from '../static/box.png'

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function UpdateOrder() {
    const [form, setForm] = useState({
        fecha: "",
        hora: "",
        largo: "",
        Ancho: "",
        peso: "",
        dir_r: "",
        ciudad_r: "",
        nombre_d: "",
        cedula: "",
        dir_e: "",
        ciudad_e: "",
        estado: "",
        orders: []
    });

    const params = useParams();
    const navigate = useNavigate();

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

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value};
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedOrder = {
            fecha: form.fecha,
            hora: form.hora,
            largo: form.largo,
            Ancho: form.Ancho,
            peso: form.peso,
            dir_r: form.dir_r,
            ciudad_r: form.ciudad_r,
            nombre_d: form.nombre_d,
            cedula: form.cedula,
            dir_e: form.dir_e,
            ciudad_e: form.ciudad_e,
        };

        await fetch(`http://localhost:5000/api/orders/updateorder/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedOrder),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/orders");
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="text-center mt-5 mb-4" style={{ color: "white" }}>InstaYA - MENSAJERÍA </h1>
            <div className="d-flex flex-column align-items-center rounded w-50 shadow " style={{ backgroundColor: "white" }}>

                <h3 className='py-4'> ACTUALIZAR ORDEN</h3>

                <form className="d-flex flex-column  py-3" onSubmit={onSubmit}>

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
                                value={form.fecha}
                                onChange={(e) => updateForm({fecha: e.target.value})}
                            />

                            <label htmlFor="hora" className="mt-4 px-3 "> Seleciona Hora:</label>
                            <input 
                                type="time" 
                                name="hora" 
                                id="hora"
                                required
                                step="3600" 
                                value={form.hora}
                                onChange={(e) => updateForm({hora: e.target.value})}
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
                                onChange={(e) => updateForm({largo: e.target.value})}
                            />

                            <label htmlFor="Ancho" className="mt-4 px-2 py-2 "> Ancho:</label>
                            <input 
                                type="text" 
                                id="Ancho" 
                                name="Ancho" 
                                required
                                minLength="1" 
                                maxLength="8" 
                                size="4"
                                value={form.Ancho}
                                onChange={(e) => updateForm({Ancho: e.target.value})}
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
                                onChange={(e) => updateForm({peso: e.target.value})}
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
                            <label htmlFor="dir_r" className="mt-1  form-label col">Dirección Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="dir_r"
                                required
                                placeholder="digite direccion recogida."
                                name="dir_r"
                                value={form.dir_r}
                                onChange={(e) => updateForm({dir_r: e.target.value})}
                            />
                        </div>
                        <div className="mb-2 row">
                            <label htmlFor="ciudad_r" className="mt-1 form-label col">Ciudad Recogida:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="ciudad_r"
                                required
                                placeholder="digite ciudad recogida"
                                name="ciudad_r"
                                value={form.ciudad_r}
                                onChange={(e) => updateForm({ciudad_r: e.target.value})}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="nombre_d" className="mt-1  form-label col">Nombre Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="nombre_d"
                                required
                                placeholder="digite nombre destinatario"
                                name="nombre_d"
                                value={form.nombre_d}
                                onChange={(e) => updateForm({nombre_d: e.target.value})}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="cedula" className="mt-1  form-label col">Cedula/Nit Destinatario:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="cedula"
                                required
                                placeholder="digite numero celuda/Nit"
                                name="cedula"
                                value={form.cedula}
                                onChange={(e) => updateForm({cedula: e.target.value})}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="dir_e" className="mt-1  form-label col">Dirección Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="dir_e"
                                required
                                placeholder="digite dirección entrega"
                                name="dir_e"
                                value={form.dir_e}
                                onChange={(e) => updateForm({dir_e: e.target.value})}
                            />
                        </div>
                        <div className="mb-2 px-0 row">
                            <label htmlFor="ciudad_e" className="mt-1  form-label col">Ciudad Entrega:</label>
                            <input
                                type="text"
                                className="form-control rounded col rounded w-5 shadow align-items-right"
                                id="ciudad_e"
                                required
                                placeholder="digite ciudad entrega"
                                name="ciudad_e"
                                value={form.ciudad_e}
                                onChange={(e) => updateForm({ciudad_e: e.target.value})}
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