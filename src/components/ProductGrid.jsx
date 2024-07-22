import { ProductDetail } from "./ProductDetail"
import { PropTypes } from "prop-types"

export const ProductGrid = ({ handlerProductSelected, handlerRemove, products = []}) => {

    return (
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nombre</th>
                    <th>descripcion</th>
                    <th>precio</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {/* se agregan los props para que salga la opcion en cada registro */}
                {products.map(product => {
                    // pasamos los PROPS  de productos y eliminar
                    return <ProductDetail handlerProductSelected={handlerProductSelected} handlerRemove={handlerRemove} product={product} key={product.name}/>
                })}
            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}