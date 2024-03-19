import React, { CSSProperties } from "react";
import "./Card.scss";

interface CardProps {
  title: string;
  image: string;
  bottomComponent?: React.ReactNode;
  customTitleStyles?: CSSProperties;
}

const Card = ({
  title,
  image,
  bottomComponent,
  customTitleStyles,
}: CardProps) => {
  return (
    <div className="card-container">
      <img className="restaurant-img" alt="image" src={image} />
      <div className="title-and-bottom-component">
        <h1 className="title" style={{ ...customTitleStyles }}>
          {title}
        </h1>
        {bottomComponent && (
          <div className="bottom-component">{bottomComponent}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
