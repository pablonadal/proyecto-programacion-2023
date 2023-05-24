import React from 'react';
// import './Post.css';

function Post(props){
  return (
    <div className='Post'>
        <h3>{props.title}</h3>
        <p>
            {props.content}
        </p>
        <img src={require(`../pictures/${props.img}`)} width="500" />
    </div>
  )
}

export default Post;
