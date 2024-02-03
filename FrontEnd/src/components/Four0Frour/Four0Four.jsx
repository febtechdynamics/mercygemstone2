import React from 'react';
import four04 from "../../../public/images/404.png";
import "./Four0Four.css";

const Four0Four = () => {
  return (
    <div className="Four0Four">
        <h1><span>4</span><img className='F0F_img' src={four04} alt="0" /><span>4</span></h1>
        <p className="lead">Page not found!</p>
    </div>
  );
}

export default Four0Four;
