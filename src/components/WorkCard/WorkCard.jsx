import './WorkCard.css';
import React from 'react';



const WorkCard = (props) => {
  const{img, title, text, url} = props;
  return (
    <div className="project-card">
        <img src={img} alt="img" />
        <h2 className='project-title'>{title}</h2>
        <div className="pro-details">
            <p>{text}</p>
        </div>
         <div className="pro-btns">
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-project">Посмотреть</a>
        </div>
    </div>
  )
}

export default WorkCard