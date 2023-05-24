import React from 'react'
import './Card.css';

// const Card = (props) => {
//   return (
//     <div>
//         <div class="card mb-3" style={{maxWidth:"540px"}}>
//             <div class="row g-0">
//                 <div class="col-md-4">
//                     <img src={require(`../pictures/${props.imagen}`)} class="img-fluid rounded-start" alt="..."/>
//                 </div>
//                 <div class="col-md-8">
//                     <div class="card-body">
//                         <h5 class="card-title">{props.titulo}</h5>
//                         <p class="card-text">{props.contenido}</p>
//                         {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

const Card = (props) => {
  return (
    <div class="card">
        <img src={require(`../pictures/${props.imagen}`)} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{props.titulo}</h5>
            <p class="card-text">{props.texto}</p>
        </div>
    </div>
  )
}

export default Card;