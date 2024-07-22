import axios from "axios";

// dato en brutos
const initProducts = [
    {
        id: 1,
        name: 'Monitor Samsung 65',
        price: 500,
        descripcion: 'El monitor es increible'
    },
    {
        id: 2,
        name: 'IPhone 13 de 128GB',
        price: 8000,
        descripcion: 'El telefono es muy bueno'
    }
];

// funcion para exportar informacion
export const listProduct = () => {
    //retornar los datos en bruto indicados
    return initProducts;
}

//mostrar todos
//la constante tiene la url del buscar metodo GET
const baseUrl = 'http://localhost:8080/products';

export const findAll = async () => {
    try {
        //para que se cumpla la promesa la declaramos con await y async
        const response = await axios.get(baseUrl)
        return response;
    } catch (error) {
        console.log(error);
    }
    return null;
}

//create
//pasamos lo campos a la funcion para poder crearlos
export const create = async ({ name, description, price }) => {
    try {
        const response = await axios.post(baseUrl, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

//update
//pasamos lo campos con el dia parta poder indentificar cual es el que se actualizara y los campos con le contenido que necesita actualizar
export const update = async ({ id, name, description, price }) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, {
            name,
            description,
            price
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

//eliminar
export const remove = async (id) => {
    try {
        await axios.delete(`${baseUrl}/${id}`);
    } catch (error) {
        console.log(error);
    }
}
