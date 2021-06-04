import React from 'react';
import { DivTotal } from './styled';

const Total = ({}) => {
  return (
    <DivTotal>
      <div>
        <p className="subtotal">Subtotal:</p>
        <p className="subtotal-value">R$204,32</p>
      </div>
      <div>
        <p className="entrega">Entrega:</p>
        <p className="entrega-value">R$7,90</p>
      </div>
      <hr></hr>
      <div>
        <p className="total">Total:</p>
        <p className="total-value">R$212,22</p>
      </div>
    </DivTotal>
  );
};

export default Total;
