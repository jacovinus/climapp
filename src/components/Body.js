import React, { useState, useEffect } from "react";
import Form from "./Form";
import Error from "./Error";
import Clima from "./Clima";
const Body = () => {
  // State principal
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});
  useEffect(() => {
    if (ciudad === "") return;
    const consultarAPI = async () => {
      const appId = "a926b47bbe1c6567f8503228f05b9092";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarResultado(resultado);
    };
    consultarAPI();
  }, [ciudad, pais]);
  const datosConsulta = datos => {
    if (datos.ciudad === "" || datos.pais === "") {
      // error
      guardarError(true);
      return;
    } else {
      guardarCiudad(datos.ciudad);
      guardarPais(datos.pais);
      guardarError(false);
    }
  };

  let componente;
  if (error) {
    // Hay error, mostrarlo
    componente = (
      <Error mensaje="Error al cargar el clima, ingresa una ciudad valida" />
    );
  } else if(resultado.cod==="404"){
componente = <Error mensaje="Debes ingresar una ciudad existende dentro del pais seleccionado" />
  }else {
    // Mostrar el clima

    componente = <Clima resultado={resultado}/>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <Form datosConsulta={datosConsulta} />
        </div>
        <div className="col s12 m6">{componente}</div>
      </div>
    </div>
  );
};

export default Body;
