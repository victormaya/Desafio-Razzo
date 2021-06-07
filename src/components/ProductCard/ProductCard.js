import React, { useEffect, useState } from 'react';
import { Card } from './styled';
import example from '../../assets/example.png';

const ProductCard = ({
  id,
  name,
  items,
  timeInicial,
  timeFinal,
  value,
  picture,
  product,
  addItemBag,
  currentStore,
  itemsBagVisible,
  removeItemBag,
}) => {
  const [time, setTime] = useState();
  const [stringValue, setStringValue] = useState();
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    const startTime = new Date(timeInicial);
    const endTime = new Date(timeFinal);
    const difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    const resultInMinutes = Math.round(difference / 60000);
    setTime(resultInMinutes);

    const newValue =
      String(value).substr(0, 2) + ',' + String(value).substr(-2);
    setStringValue(newValue);
  }, []);

  useEffect(() => {
    if (itemsBagVisible.includes(product)) {
      itemsBagVisible.map((item) => {
        if (item._id === id) {
          setQuantidade(item.quantidade);
          console.log(item.quantidade ? item.quantidade : 'zero');
        }
      });
    } else {
      setQuantidade(0);
    }
  }, [itemsBagVisible]);

  return (
    <Card image={picture}>
      <div className="image-product" />
      <p className="product-name">{name}</p>
      <p className="product-items">{items}</p>
      <p className="time">{`Tempo de preparo: ${time}min`}</p>
      <p className="value">{`R$ ${stringValue}`}</p>
      <div className="sum">
        <button onClick={() => removeItemBag(id)} disabled={quantidade === 0}>
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
