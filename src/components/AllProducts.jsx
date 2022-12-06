import { useState, useEffect } from "react";

function AllProducts() {
    // 3. info guardará los valores traídos desde la API
    // const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarProductos();
    }, []);


    // 1. Función que consulta la API
    const consultarProductos = async () => {
        const url = 'https://dummyjson.com/products?limit=30&select=title,price,stock,category,rating';
        const response = await fetch(url)
        const data = await response.json()
        setTablaProductos(data.products);
        console.log(data.products)
    }

    return (
        <div>
            {/* { 4. Mostramos la info } */}
            <h2>Productos</h2>
            <table className="table table-sm table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Category</th>
                        <th>Rating</th>

                    </tr>
                </thead>
                <tbody>
                    {tablaProductos && 
                    tablaProductos.map((producto)=>(
                        <tr key={producto.id}>
                            <td>{producto.title}</td>
                            <td>{producto.price}</td>
                            <td>{producto.stock}</td>
                            <td>{producto.category}</td>
                            <td>{producto.rating}</td>
                        </tr>
                    )  )}


                </tbody>
            </table>
        </div>
    );
}
export default AllProducts;
