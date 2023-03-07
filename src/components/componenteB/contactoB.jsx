import React from "react";
import PropTypes from "prop-types";

const contactoB = (props) => {
  return (
    <div>
      <h1>Nombre: {props.name}</h1>
      <h2>Apellido: {props.lastname}</h2>
      <h3>Email: {props.email}</h3>
      <h4>
        Estado:{" "}
        {props.conected ? " Contacto En Linea" : " Contacto No Disponible"}
      </h4>
    </div>
  );
};

contactoB.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  conected: PropTypes.bool,
};

export default contactoB;
