import { useState, useEffect } from "react";

function MiApi() {
    // 3. info guardará los valores traídos desde la API
    const [info, setInfo] = useState([]);

    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarInformacion();
    }, []);
    // 1. Función que consulta la API
    const consultarInformacion = async () => {
        const url = 'https://dummyjson.com/products';
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        // setInfo(data); // con setInfo    actualizamos el estado
    }
    return (
        <div>
            {/* { 4. Mostramos la info } */}
            {info}
        </div>
    );
}
export default MiApi;