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
        const url = 'https://dummyjson.com/products?limit=10&select=title,price,thumbnail,category';
        const response = await fetch(url)
        const data = await response.json()
        setTablaProductos(data.products);
        console.log(data.products)
    }

    return (
        <div>
            {/* { 4. Mostramos la info } */}   
                <h2>Productos</h2>
                 <ul className="list-group">
                
                {tablaProductos.map(x => <li className="list-group-item" key={x.id}>Catergoria es {x.category} </li> )  } 
              </ul>
        </div>
    );
}
export default AllProducts;
