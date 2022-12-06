import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

function AllProducts() {
    // 3. info guardará los valores traídos desde la API
    const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    // const [busqueda, setBusqueda] = useState("");

    const buscarProductos = (e) => {
        filtrarProductos(e.target.value);
    }

    // const ordenarProductos = (e) => {
    //     ordenardeAaZ()        
    // }

    const filtrarProductos = (terminoBusqueda) => {
        let resultadosBusqueda = tablaProductos.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.category.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
  
  
        setProductos(resultadosBusqueda);
        
    }

    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarProductos();
    }, []);

    // 1. Función que consulta la API
    const consultarProductos = async () => {
        const url = 'https://dummyjson.com/products?limit=30&select=title,price,stock,category,rating';
        const response = await fetch(url)
        const data = await response.json()
        setProductos(data.products);
        setTablaProductos(data.products);
    }

    const ordenardeAaZ = () => {
        const temporal = [...tablaProductos].sort((a, b) => 
         {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
                return 1;
            }
            if (nameA < nameB) {
                return -1;
            }
            // names must be equal
            return 0;
        }
        )
       
        setProductos(temporal)        
    }

    const ordenardeZaA = () => {
        const temporal = [...tablaProductos].sort((a, b) => 
         {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        }
        )       
        setProductos(temporal)        
    }

    const clearOrdenar = () => {
        consultarProductos();
    }

    return (
        <div>
            {/* { 4. Mostramos la info } */}
            <h2>Products</h2>
            <div className="input-group mb-3 mt-3">
                {/* <label for="exampleInputName" class="form-label"></label> */}
                <input type="search" className="form-control" id="exampleInputName"
                    placeholder="Search by title or category"
                    name="busqueda"
                    onChange={buscarProductos}
                    // value={busqueda}
                ></input>
            </div>
            <div className="container text-center p-3">
                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary" onClick={ordenardeAaZ}> Sort A --> Z </button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary" onClick={ordenardeZaA} >Sort Z --> A</button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary" onClick={clearOrdenar} >Clean filter</button>
                    </div>
                </div>
            </div>

            {productos.length > 0 ?

                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Buy</th>

                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.category}</td>
                                <td>{producto.rating}</td>
                                <td><Button variant="primary">Buy now</Button></td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
                :
                <h3>The product or category has not been found</h3>
            }
        </div>
    );
}
export default AllProducts;
