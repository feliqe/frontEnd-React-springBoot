import { useEffect, useState } from "react";
import { findAll, listProduct, remove, update } from "../services/ProductService";
import { PropTypes } from "prop-types";
import { ProductForm } from "./ProductForm";
import { ProductGrid } from "./ProductGrid";

//indicamos que pasamos el title desde padre main.jsx
export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    //estado inicial del metodo para saber si ejecutar el editar o el crear en ProductForm
    const [productSelected, setProductSelected] = useState({
        id: 0,
        name: '',
        descripcion: '',
        price: ''
    })

    //usar un async en un useEffect
    const getProducts = async () => {
         //funcion de ProductService
        const result = await findAll();
        setProducts(result.data._embedded.products);
    }

    //uso del efecto para poder pasar la informacion como si fuera desde la base de datos, como el ciclo de vida de un proyecto
    useEffect(() => {
        getProducts();
    }, []);

    //funcion que carga los datos nuevos a la tabla de productos existente
    const handlerAddProduct = async (product) => {

        //condicion para saber si lo tene que agregar o modificar
        if (product.id > 0) {
            //funcion de aupdate de axios
            const response = await update(product);
            //traer los datos para editar
            setProducts(products.map(prod => {
                if (prod.id == response.data.id) {
                    return { ...response.data }
                }
                return prod;
            }));
        } else {
            //funcion de aupdate de axios
            const response = await create(product);
            setProducts([...products, { ...response.data }]);

            // //mostra los datos creado a continuacion de los existente
            // //Date().getTime() - indicamos un numero aleatorio segun la hora
            // setProducts([...products, { ...product, id: new Date().getTime() }]);
        }
    }

    //funcion para eliminar registro segun el id
    const handlerRemoverProduct = (id) => {
        //funcion de aupdate de axios
        remove(id);
        setProducts(products.filter(product => product.id != id));
    }

    //funcion para poder traer los datos selecionado para editar
    const handlerProductSelected = (product) => {
        setProductSelected({ ...product });
    }

    return (
        //  dejar los campos <> es para poder que pueda ser renderisado
        <div className="container my-4">
            {/* usamos el title */}
            <h1>{title}</h1>
            <div className="row">
                <div className="col">
                    {/* indicamos donde ira el form y manipular los datos nuevos del form  PROPOS */}
                    {/* enviamos los datos selecionados y los enviamos al form por PROPOS */}
                    <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected } />
                </div>
                <div className="col">
                    {
                        // valida si existe datos en la tabla de productos si no existen mostrara el mensaje de la alerta
                        // pasamos los porps de productos, el eliminar y editar
                        products.length > 0 ? <ProductGrid products={products} handlerRemove={handlerRemoverProduct} handlerProductSelected={handlerProductSelected} />: <div className="alert alert-warning">No hay productos en el sistema!</div>
                    }
                </div>
            </div>
        </div>
     )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}