import React from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

const ProductCard = ({}) => {
  return (
    <Card image={example}>
      <div className="image-product" />
      <p className="product-name">Pizza picanha com cheddar</p>
      <p className="product-items">Picanha + Cheddar + Borda de Catupiry</p>
      <p className="time">Tempo de preparo: 55min</p>
      <p className="value">R$ 67,90</p>
      <div className='sum'>
        <button>-</button>
        <p>1</p>
        <button>+</button>
      </div>
    </Card>
  );
};

export default ProductCard;
