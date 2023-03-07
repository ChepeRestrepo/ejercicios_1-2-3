import React from "react";
import Contacto from "../../models/contacto.class.js";
import Proptypes from "prop-types";
import ContactoB from "../componenteB/contactoB.jsx";

const contactoA = ({ contact }) => {
  return (
    <div>
      <h1>Nombre: {contact.name}</h1>
      <h2>Apellido: {contact.lastname}</h2>
      <h3>Email: {contact.email}</h3>
      <h4>
        Estado:{" "}
        {contact.conected ? " Contacto en linea" : " Contacto No Disponible"}
      </h4>
      <div>
        <ContactoB
          name="mauricio"
          lastname="perez"
          email="mauri@hotmail.com"
          conected={true}
        ></ContactoB>
      </div>
    </div>
  );
};

contactoA.protoTypes = {
  contacto: Proptypes.instanceOf(Contacto),
};

export default contactoA;
