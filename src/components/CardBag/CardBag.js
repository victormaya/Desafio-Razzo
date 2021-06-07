import React, { useState, useEffect } from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

import trash from '../../assets/trash.svg';

const CardBag = ({ item }) => {
  const [stringValue, setStringValue] = useState();
  useEffect(() => {
    const newValue =
      String(item.pricing).substr(0, 2) + ',' + String(item.pricing).substr(-2);
    setStringValue(newValue);
  });
  return (
    <Card image={item.imgs[1].url}>
      <p className="store-title">{item.lojaAtual}</p>
      <div className="content-card">
        <div className="image" />
        <div className="description">
          <p className="product-title">{item.name}</p>
          <p className="product-type">{item.description}</p>
          <p className="value">{`R$ ${stringValue}`}</p>
        </div>
        <div className="sum">
          <button>-</button>
          <p>{item.quantidade}</p>
          <button>+</button>
        </div>
        <div className="trash">
          <button>
            <img src={trash} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardBag;
