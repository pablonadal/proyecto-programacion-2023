import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  };
}

export const Footer = () => {
  return (
    <div>
        <footer>
        <AiFillGithub />
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
