import React, { Component } from "react";

export default class Botones extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert("Hola Soy el boton 1")}>Módulo 1</button>
        <button onClick={() => alert("Hola Soy el boton 2")}>Módulo 2</button>
      </div>
    );
  }
}
