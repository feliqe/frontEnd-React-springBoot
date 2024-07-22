
import { PropTypes } from "prop-types"

export const ProductDetail = ({ handlerProductSelected, handlerRemove, product = {} }) => {

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.descripcion}</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-success btn-sm" onClick={() => handlerProductSelected(product)}>
                    Actualizar
                </button>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(product.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}