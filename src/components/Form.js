import React, { useState } from "react";
const Form = ({ datosConsulta }) => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  const handleChange = e => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };
  const consultarClima = e => {
    e.preventDefault();
    datosConsulta(busqueda);
  };
  return (
    <div className="row">
      <div className="col s12">
        <div className="card light-blue accent-3">
          <div className="card-content white-text">
            <span className="card-title">Selecciona Ciudad</span>
            <form onSubmit={consultarClima} action="">
              <div className="input-field">
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
              </div>
              <div className="input-field">
                <select name="pais" id="pais" onChange={handleChange}>
                  <option value="">Selecciona un país</option>
                  <option value="US">Estados Unidos</option>
                  <option value="DE">Alemania</option>
                  <option value="FR">Francia</option>
                  <option value="AR">Argentina</option>
                  <option value="ES">España</option>
                  <option value="NE">Netherlands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="IS">Islandia</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              <div className="input-field">
                <input
                  type="submit"
                  className="waves-effect waves-light btn-large btn-block yellow accent-4"
                  value="Buscar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;

