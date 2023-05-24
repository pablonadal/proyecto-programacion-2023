import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import { Header } from './components/Header';
import Alerta from './components/Alerta';

const App = () => {
  return (
    <div className='App' id="title">
      {/* <NavBar /> */}
      <Header />
      {/* <div class="container text-center">
        <div className='row'>
          <div className='col'>
            <Card imagen="kanban.jpg" titulo="¿Cómo lo llevaremos a cabo?" contenido="Haremos uso de: " />
          </div>
          <div className='col'>
            <Card imagen="fondo1.jpg" titulo="Titulo" contenido="Contenido" />
          </div>
          <div className='col'>
            <Card imagen="fondo1.jpg" titulo="Titulo" contenido="Contenido" />
          </div>
          <div className='col'>
            <Card imagen="fondo1.jpg" titulo="Titulo" contenido="Contenido" />
          </div>
          <div className='col'>
            <Card imagen="fondo1.jpg" titulo="Titulo" contenido="Contenido" />
          </div>
        </div>
      </div> */}
      <section className='Contenedor-Cards'>
        <div className='container text-center'>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <Card titulo="¿Quiénes somos?" texto="Somos dos estudiantes de Ingeniería en Informática con hambre de éxito, en búsqueda de poder desarrollar nuestras habilidades y aportar soluciones a la sociedad." imagen="compas.png"/>
            </div>
            <div className="col">
              <Card titulo="¿De qué trata nuestro proyecto?" texto="Nuestro proyecto consiste en desarrollar una página web funcional, desde el frontend hasta el backend." imagen="front-vs-back.jpg"/>
            </div>
            <div className="col">
              <Card titulo="¿Qué temática elegimos para nuestra página web?" texto="Nuestra pagina web va a ofrecer un servicio a la sociedad. Siendo más específicos, proporcionaremos una plataforma online para playas de estacionamiento." imagen="fondo1.jpg"/>
            </div>
            <div className="col">
              <Card titulo="¿Cómo lo llevaremos a cabo?" texto="Haremos uso de lenguajes como: HTML, CSS, Python, JavaScript; frameworks como lo es React y control de versiones GIT." imagen="kanban.jpg"/>
            </div>
          </div>
        </div>
      </section>
      <Alerta tipo="alert alert-primary" texto="Esto es un texto de alerta de color azul." />
      <Alerta tipo="alert alert-secondary" texto="Esto es un texto de alerta de color gris." />
      <Alerta tipo="alert alert-warning" texto="Esto es un texto de alerta de color amarillo." />
      <Alerta tipo="alert alert-danger" texto="Esto es un texto de alerta de color rojo." />
      <footer>
        <section>
            <a href="#title">Ir al comienzo</a>
            <a href="mailto:tuestacionamiento@gmail.com">Contáctanos</a>
            <a href="https://github.com/pablonadal/proyecto-programacion-2023" target="_blank">Nuestro repositorio</a>
        </section>
        <p>Copyright 2023 - Ulises Festín | Pablo Balastegui</p>
      </footer>
    </div>
  );
}

export default App;