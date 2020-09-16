import React, { Fragment } from 'react'

//Styles
import './Form.scss'

const Form = () => {
    return (
        <Fragment>
            <div className='form-container'>
                <h2>Formulario de registro</h2>
                <form>
                    <label>
                        <input placeholder='Nombre' type="text" name="name" />
                    </label>

                    <label>
                        <input placeholder='Apellido' type="text" name="lastname" />
                    </label>

                    <label>
                        <input placeholder='Email' type="email" name="email" />
                    </label>

                    <label>
                        <input placeholder='Teléfono' type="phone" name="phone" />
                    </label>

                    <label>
                        <input placeholder='Password' type="password" name="password" />
                    </label>

                    <label>
                        <input placeholder='Confirmar password' type="password" name="passwordConfirm" />
                    </label>

                    <button type='submit'>
                        Registrar usuario
                    </button>
                </form>
            </div>
        </Fragment>

    )
}

export default Form
