import React from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

import trash from '../../assets/trash.svg';

const CardBag = ({}) => {
  return (
    <Card image={example}>
      <p className="store-title">RodaPizza</p>
      <div className="content-card">
        <div className="image" />
        <div className="description">
          <p className="product-title">Pizza picanha com cheddar</p>
          <p className="product-type">Pizzas</p>
          <p className="value">R$ 54,32</p>
        </div>
        <div className="sum">
          <button>-</button>
          <p>1</p>
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
