import { useState, useEffect } from "react";

function MiApi() {
    // 3. info guardará los valores traídos desde la API
    const [catProductos, setCatProductos] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarCategorias();
    }, []);

    // 1. Función que consulta la API
    const consultarCategorias = async () => {
        const url = 'https://dummyjson.com/products/categories';
        const response = await fetch(url)
        const data = await response.json()
        setCatProductos(data);
        console.log(data)        
    }

    return (
        <div>
            {/* { 4. Mostramos la info } */}
            <h2>Categories</h2>
            <ul className="list-group">
                {catProductos.map(categoria => <li className="list-group-item" key={categoria}>{categoria} </li>)}
            </ul>
        </div>
    );
}
export default MiApi;

