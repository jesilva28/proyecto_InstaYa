import React from 'react';
import '../bootstrap.css';

const Orders = () => {
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
                                    <div className='col-3'>
                                        <div className='p-4'>
                                            <a href="/createorder"><button className="btn-primary rounded">
                                                Crear Orden
                                            </button></a>
                                        </div>
                                    </div>
                                </div>
                                        
                                <div className='Orders-content' style={{ overflow: 'auto'}}>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th scope="col"># servicio</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Ciudad de entrega</th>
                                                <th scope="col">Dirección de entrega</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>08/08/2022</td>
                                                <td>Medellín</td>
                                                <td>Calle 50 # 49-50</td>
                                                <td>Cumplido</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>02/05/2022</td>
                                                <td>Cali</td>
                                                <td>Cll 11 # 78-25</td>
                                                <td>Cumplido</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>01/07/2022</td>
                                                <td>Barranquilla</td>
                                                <td>Cra 10 # 8-25</td>
                                                <td>Pendiente</td>
                                            </tr>
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

export default Orders;