import React from 'react';
import { Card } from './styled';

const StoreCard = ({
  image,
  name,
  description,
  street_name,
  street_number,
  neighborhood,
}) => {
  return (
    <Card image={image}>
      <div className="image-store" />

      <div className="descriptions">
        <a className="store-title">{name}</a>
        <a className="store-type">{description}</a>
        <a className="store-address">
          {`${street_name}, ${street_number}, ${neighborhood}`}
        </a>
      </div>
    </Card>
  );
};

export default StoreCard;
