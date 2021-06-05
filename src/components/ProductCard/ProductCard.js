import React, { useEffect, useState } from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

const ProductCard = ({
  name,
  items,
  timeInicial,
  timeFinal,
  value,
  picture,
}) => {
  const [time, setTime] = useState();
  const [stringValue, setStringValue] = useState();

  useEffect(() => {
    const startTime = new Date(timeInicial);
    const endTime = new Date(timeFinal);
    const difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    const resultInMinutes = Math.round(difference / 60000);
    setTime(resultInMinutes);

    const newValue =
      String(value).substr(0, 2) + ',' + String(value).substr(-2);
    setStringValue(newValue);
  });

  return (
    <Card image={picture}>
      <div className="image-product" />
      <p className="product-name">{name}</p>
      <p className="product-items">{items}</p>
      <p className="time">{`Tempo de preparo: ${time}min`}</p>
      <p className="value">{`R$ ${stringValue}`}</p>
      <div className="sum">
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </Card>
  );
};

export default ProductCard;
