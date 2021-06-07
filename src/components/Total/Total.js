import React, { useEffect, useState } from 'react';
import { DivTotal } from './styled';

const Total = ({ itemsBagVisible }) => {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  let somaPreco = 0;
  useEffect(() => {
    // abaixo subtotal
    itemsBagVisible.map((item) => {
      somaPreco += (item.pricing * item.quantidade) / 100;
    });

    let newTotal = somaPreco;
    if (Number.isInteger(newTotal)) {
      setSubTotal(`R$${newTotal},00`);
    } else {
      setSubTotal(`R$${newTotal}`);
    }

    // abaixo total com entrega

    let totalEntrega = somaPreco + 7.9;
    if (Number.isInteger(totalEntrega)) {
      setTotal(`R$${totalEntrega},00`);
    } else {
      setTotal(`R$${totalEntrega}0`);
    }
  }, [itemsBagVisible]);

  return (
    <DivTotal>
      <div>
        <p className="subtotal">Subtotal:</p>
        <p className="subtotal-value">{subTotal}</p>
      </div>
      <div>
        <p className="entrega">Entrega:</p>
        <p className="entrega-value">R$7,90</p>
      </div>
      <hr></hr>
      <div>
        <p className="total">Total:</p>
        <p className="total-value">{total}</p>
      </div>
    </DivTotal>
  );
};

export default Total;
