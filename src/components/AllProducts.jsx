import { useState, useEffect } from "react";

function AllProducts() {
    // 3. info guardará los valores traídos desde la API
    const [info, setInfo] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarInformacion();
    }, []);
    // 1. Función que consulta la API
    const consultarInformacion = async () => {
        const url = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price';
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setInfo(data); // con setInfo    actualizamos el estado
    }
    return (
        <div>
            {/* { 4. Mostramos la info } */}       
                <h2>Categoria</h2>
              <ul className="list-group">
                {info.map(categoria => <li className="list-group-item" key={categoria}> {categoria} </li> )  }
              </ul>
        </div>
    );
}
export default AllProducts