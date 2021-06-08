import React, { useState, useEffect } from 'react';
import { Card } from './styled';

import trash from '../../assets/trash.svg';

const CardBag = ({
  item,
  addItemBag,
  removeItemBag,
  currentStore,
  removeAll,
}) => {
  const [stringValue, setStringValue] = useState();
  useEffect(() => {
    const newValue =
      String(item.pricing).substr(0, 2) + ',' + String(item.pricing).substr(-2);
    setStringValue(newValue);
  });
  return (
    <Card image={item.imgs[0].url}>
      <p className="store-title">{item.lojaAtual}</p>
      <div className="content-card">
        <div className="image" />
        <div className="description">
          <p className="product-title">{item.name}</p>
          <p className="product-type">{item.description}</p>
          <p className="value">{`R$ ${stringValue}`}</p>
        </div>
        <div className="sum">
          <button
            onClick={() => removeItemBag(item._id)}
            disabled={item.quantidade === 0}
          >
            -
          </button>
          <p>{item.quantidade}</p>
          <button
            onClick={() =>
              addItemBag(Object.assign(item, { lojaAtual: currentStore.name }))
            }
          >
            +
          </button>
        </div>
        <div
          className="trash"
          onClick={() => {
            removeAll(item);
          }}
        >
          <button>
            <img src={trash} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardBag;
