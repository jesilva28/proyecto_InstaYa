import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Order = (props) => (
    <tr>
        <td>{props.order.fecha}</td>
        <td>{props.order.ciudadEntrega}</td>
        <td>{props.order.dirEntrega}</td>
        <td>{props.order.estado}</td>
        <td>
            <Link className="btn btn-link fw-semibold" to={`../update-order/${props.order._id}`}> {/* corregir */}
                Editar
            </Link>
            <button className='btn btn-link fw-semibold'
                onClick={() => {
                    props.deleteOrder(props.order._id);
                }}
            >
                Eliminar
            </button>
        </td>
    </tr>
);

export default function OrderList() {
    const [orders, setOrders] = useState([]);
    // const [user, setUser] = useState();

    useEffect (() => {

        document.title = "Listado de órdenes";

        // const loggedUser = localStorage.getItem('user');
        // console.log(loggedUser);
        // setUser(loggedUser);

        async function getOrders() {
            const response = await fetch(`proyectoinstayabackend-production.up.railway.app/api/orders/orders/`);

            if (!response.ok) {
                const message = `Un error ha ocurrido: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const orders = await response.json();
            setOrders(orders);
        }

        getOrders();

        return;
    }, [orders.length]);

    async function deleteOrder(id) {
        await fetch(`proyectoinstayabackend-production.up.railway.app/api/orders/${id}`, {
            method: "DELETE"
        });

        const newOrders = orders.filter((el) => el._id !== id);
        setOrders(newOrders);
    }

    function orderList() {
        return orders.map((order) => {
            return (
                <Order
                    order={order}
                    deleteOrder={() => deleteOrder(order._id)}
                    key={order._id}
                />
            );
        });
    }

    return (
        <section>
            <header>
                <div className='text-center mt-3 mb-5'>                   
                    <h1 style={{color: "white"}}>InstaYA - MENSAJERÍA</h1>                   
                </div>
            </header>
            <div style={{ borderRadius: '15px'}} className='container bg-white'>
                <div className='row justify-content-center'>
                    <div className='col-xl-10 col-lg-12 col-md-9'>
                        <div className='card-body p-0'>
                            <div className='p-4'>

                                <div className='row text-center'>
                                    <div className='col'>
                                        <h3>ÓRDENES</h3>
                                    </div>
                                </div>
                                <div className='row justify-content-end text-end'>
                                    <a href="/">
                                        <button className="btn btn-primary rounded">
                                            Cerrar sesión
                                        </button>
                                    </a>
                                </div>

                                <div className='row justify-content-end text-end'>
                                    <div className='col-3'>
                                        <div className='p-4'>
                                            <a href="/create-order"><button className="btn btn-primary rounded">
                                                Crear Orden
                                            </button></a>
                                        </div>
                                    </div>
                                </div>
                                        
                                <div className='Orders-content' style={{ overflow: 'auto'}}>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Ciudad de entrega</th>
                                                <th scope="col">Dirección de entrega</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Editar/Eliminar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderList()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>       
                        </div>            
                    </div>
                </div>  
            </div>
        </section>
    )
}
