import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

function AllProducts() {
    // 3. info guardará los valores traídos desde la API
    const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        // filtrar(e.target.value);
    }


    // const filtrar = (terminoBusqueda) => {
    //     var resultadosBusqueda = tablaProductos.filter((elemento) => {
    //         if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //             || elemento.category.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    //         ) {
    //             return elemento;
    //         }
    //     });
    //     setProductos(resultadosBusqueda);
    // }

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
        console.log(data.products)
    }

    return (
        <div>
            {/* { 4. Mostramos la info } */}
            <h2>Productos</h2>
            {/* <div className="containerInput">
                <input
                    className="form-control"
                    value={busqueda}
                    placeholder="Búsqueda por titulo o categoria"
                    onChange={handleChange}
                />
                <button className="btn btn-success">
                     Buscar
                </button>
            </div> */}

            <div className="input-group mb-3 mt-3">
                {/* <label for="exampleInputName" class="form-label"></label> */}
                <input type="search" className="form-control" id="exampleInputName"
                  placeholder="Busca por titulo o categoria"
                  name="busqueda"
                  onChange={handleChange}
                  value={busqueda}
                ></input>
                <button type="submit" className="btn btn-primary">Buscar</button>
              </div>

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
                    {productos &&
                        productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.category}</td>
                                <td>{producto.rating}</td>
                                <td><Button variant="primary">Buy</Button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
export default AllProducts;
