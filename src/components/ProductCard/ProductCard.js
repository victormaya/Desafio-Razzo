import React, { useEffect, useState } from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

const ProductCard = ({
  product,
  addItemBag,
  currentStore,
  itemsBagVisible,
  removeItemBag,
}) => {
  const [time, setTime] = useState();
  const [stringValue, setStringValue] = useState();
  const [quantidade, setQuantidade] = useState();

  useEffect(() => {
    const startTime = new Date(product.createdAt);
    const endTime = new Date(product.updatedAt);
    const difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    const resultInMinutes = Math.round(difference / 60000);
    setTime(resultInMinutes);

    const newValue =
      String(product.pricing).substr(0, 2) +
      ',' +
      String(product.pricing).substr(-2);
    setStringValue(newValue);
  }, []);

  useEffect(() => {
    if (itemsBagVisible.includes(product)) {
      itemsBagVisible.map((item) => {
        if (item._id === product._id) {
          setQuantidade(item.quantidade);
        }
      });
    } else {
      setQuantidade(0);
    }
  }, [itemsBagVisible]);

  return (
    <Card image={product.imgs[0].url}>
      <div className="image-product" />
      <p className="product-name">{product.name}</p>
      <p className="product-items">{product.description}</p>
      <p className="time">{`Tempo de preparo: ${time}min`}</p>
      <p className="value">{`R$ ${stringValue}`}</p>
      <div className="sum">
        <button
          onClick={() => removeItemBag(product._id)}
          disabled={quantidade === 0}
        >
          -
        </button>
        <p>{quantidade}</p>
        <button
          onClick={() =>
            addItemBag(Object.assign(product, { lojaAtual: currentStore.name }))
          }
        >
          +
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
