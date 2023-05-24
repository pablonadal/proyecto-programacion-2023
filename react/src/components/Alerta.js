import React from 'react'

const Alerta = (props) => {
  return (
    <div>
        <div class={props.tipo} role="alert">
            {props.texto}
        </div>
    </div>
  );
}

export default Alerta;