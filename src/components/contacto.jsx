import contact from "../images/directorio-telefonico.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

function Contacto() {
  const [formSend, setFormSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, correo, asunto, mensaje } = e.target.elements;
    fetch('https://formsubmit.co/ajax/leslyandrea_2000@hotmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre.value,
        correo: correo.value,
        asunto: asunto.value,
        mensaje: mensaje.value
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setFormSend(true);
    setTimeout(()=>{
      setFormSend(false)
    }, 5000)
  };

  return (
    <section id="contacto" className="contacto__container">
      <h2 className="contacto__tittle">Contacto</h2>

      <div className="contacto__info">
        <img className="contacto__image" src={contact} alt="contacto" />

        <Formik
          initialValues={{
            nombre: '',
            correo: '',
            asunto: '',
            mensaje: ''
          }}
          validate={(values)=>{
            let errors = {};

            if(!values.nombre){
              errors.nombre = 'Porfavor ingresa un nombre';
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
              errors.nombre = 'El nombre solo puede contener letras y espacios';
            }

            if(!values.correo){
              errors.correo = 'Porfavor ingresa un correo electronico'
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)){
              errors.correo = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
            }

            if(!values.mensaje){
              errors.mensaje = 'Profavor ingresa un mensaje';
            }

            return errors;
          }}
          onSubmit={()=>{
            setFormSend(true);
            setTimeout(()=>{
              setFormSend(false)
            }, 5000)
          }}
        >
          {( {errors} ) => (
            <Form className="contacto__form" onSubmit={handleSubmit}>
              <div className="contacto__name">
                <label className="contacto__label" htmlFor="nombre">
                  Nombre
                </label>
                <Field
                  className="contacto__input"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                />
                <ErrorMessage name='nombre' component={()=>(
                  <div className="contacto__error">{errors.nombre}</div>
                )} />
              </div>

              <div className="contacto__email">
                <label className="contacto__label" htmlFor="correo">
                  Correo
                </label>
                <Field
                  className="contacto__input"
                  type="email"
                  name="correo"
                  id="correo"
                  placeholder="Correo@correo.com"
                />
                <ErrorMessage name='correo' component={()=>(
                  <div className="contacto__error">{errors.correo}</div>
                )}/>
              </div>

              <div className="contacto__subject">
                <label className="contacto__label" htmlFor="asunto">
                  Asunto
                </label>
                <Field
                  className="contacto__input"
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="Asunto"
                />
              </div>

              <div className="contacto__message">
                <label htmlFor="mensaje">Mensaje</label>
                <Field
                  as='textarea'
                  className="contacto__text-area"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Mensaje"
                ></Field>
                <ErrorMessage name="mensaje" component={()=>(
                  <div className="contacto__error">{errors.mensaje}</div>
                )}/>
              </div>

              <div className="contacto__buttons">
                <button className="contacto__button" type="submit">
                  Enviar
                </button>
                <button className="contacto__button" type="reset">
                  Cancelar
                </button>
              </div>
              {formSend && <p className='contacto__confirm'>Formulario enviado con exito!</p>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Contacto;
