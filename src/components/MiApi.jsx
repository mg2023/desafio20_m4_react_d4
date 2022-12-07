import { useState, useEffect } from "react";

function MiApi() {

    const [catProductos, setCatProductos] = useState([]);


    useEffect(() => {
        consultarCategorias();
    }, []);


    //  Punto 4: Dentro de MiApi.jsx crea el código para consumir la API y que muestre los resultados
    const consultarCategorias = async () => {
        const url = 'https://dummyjson.com/products/categories';
        const response = await fetch(url)
        const data = await response.json()
        setCatProductos(data);
    }

    return (
        <div>
            <h2>Categories</h2>
            <ul className="list-group">
                {catProductos.map(categoria => <li className="list-group-item" key={categoria}>{categoria} </li>)}
            </ul>
        </div>
    );
}
export default MiApi;

