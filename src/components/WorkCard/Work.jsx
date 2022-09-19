import './WorkCard.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';
import React from 'react';


const Work = () => {
  return (
    <div className='work-container'>
        <div className="project-container">
           {WorkCardData.map((val, ind) => {
            return (
              <WorkCard key={ind} 
                img={val.img}
                text={val.text}
                url={val.url}
                title={val.title}
              />
            )
           })}
        </div>
    </div>
  )
}

export default Work