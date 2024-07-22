import { useEffect, useState } from "react"

const initialDataForm = {
    id: 0,
    name: '',
    descripcion: '',
    price: ''
}
export const ProductForm = ({productSelected, handlerAdd}) => {
    //se indica como se inicializara
    const [form, setForm] = useState(initialDataForm);

    const { id, name, descripcion, price } = form;

    //validar si el metodod biene con informacion para traer los campos y mostrarlos en el formulario
    useEffect(() => {
        setForm(productSelected);

    }, [productSelected]);

    return (
        <form onSubmit={(event) => {
            // preventDefault - realiza la accion de no aparecer los campos en la url como get
            event.preventDefault();

            //valida los campos que no vayan vacios
            if (!name || !descripcion || !price) {
                alert('Debes completar los datos del formulario!')
                return;
            }
            //
            handlerAdd(form);
            //restaura los campos a vacios
            setForm(initialDataForm);
        }}>
            <div>
                <input placeholder="Nombre"
                    className="form-control my-3 w-75"
                    name="name"
                    value={name}
                    onChange={(event) => setForm({
                        ...form,name:event.target.value
                    })}
                    />
            </div>
            <div>
                <input placeholder="Descripcion"
                    className="form-control my-3 w-75"
                    name="descripcion"
                    value={descripcion}
                    onChange={(event) => setForm({
                        ...form,descripcion:event.target.value
                    })}
                    />
            </div>
            <div>
                <input placeholder="Precio"
                    className="form-control my-3 w-75"
                    name="price"
                    value={price}
                    onChange={(event) => setForm({
                        ...form,price:event.target.value
                    })}
                    />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    {id>0 ? 'Guardar cambios':'Crear'}
                    </button>
            </div>
        </form>
    )
}