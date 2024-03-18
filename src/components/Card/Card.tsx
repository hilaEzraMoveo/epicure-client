import React from 'react'
import './Card.scss';

interface CardProps {
    title: string;
    image: string;
    bottomComponent?: React.ReactNode
}

const Card = ({title, image, bottomComponent}: CardProps) => {
    return (
        <div className='card-container'>
          <img className='restaurant-img' alt='image' src={image} />
          <h1 className='title'>{title}</h1>
          {bottomComponent && <div className='bottom-component'>{bottomComponent}</div>}
        </div>
      );
}

export default Card
