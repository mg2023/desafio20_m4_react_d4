import { useState, useEffect } from "react";

function MiApi() {
    // 3. info guardará los valores traídos desde la API
    // const [productos, setProductos] = useState([]);
    const [tablaProductos, setTablaProductos] = useState([]);
    const [catProductos, setCatProductos] = useState([]);


    // 2. LLamamos al función que consume la API al momento de montar el    componente
    useEffect(() => {
        consultarProductos();
        consultarCategorias();
    }, []);


    // 1. Función que consulta la API
    const consultarProductos = async () => {
        const url = 'https://dummyjson.com/products?limit=10&select=title,price,thumbnail,category';
        const response = await fetch(url)
        const data = await response.json()
        setTablaProductos(data.products);
        console.log(data.products)
    }


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
            {console.log(catProductos)}    
                <h2>Categoria</h2>
                 <ul className="list-group">
                
                {catProductos.map(categoria => <li className="list-group-item" key={categoria}>{categoria} </li> )  }
                {/* {catProductos.map(x => <li className="list-group-item" key={x.id}>Catergoria es {x.category} </li> )  } */}
              </ul>
        </div>
    );
}
export default MiApi;

