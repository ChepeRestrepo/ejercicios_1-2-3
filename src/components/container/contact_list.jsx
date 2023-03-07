import React from "react";
import ContactoA from "../componenteA/contactoA";
import Contacto from "../../models/contacto.class.js";

const contact_list = () => {
  const defaultContact = new Contacto(
    "David",
    "ramos",
    "davidramos@gmail.com",
    false
  );
  return (
    <div>
      <ContactoA contact={defaultContact}></ContactoA>
    </div>
  );
};

export default contact_list;
