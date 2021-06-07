import styled from 'styled-components';

export const DivTotal = styled.div`
  * {
    margin: 0;
  }
  > div {
    display: flex;
    justify-content: space-between;
  }
  hr {
    width: 361px;
    height: 0;
    margin-left: auto;
    border: 1px solid #e5e4e6;
    margin-bottom: 12px;
  }
  .subtotal {
    margin-bottom: 12px;
  }
  .entrega {
    margin-bottom: 22px;
  }
  .subtotal,
  .entrega {
    font-size: 16px;
    line-height: 150%;
    color: #979797;
  }
  .subtotal-value,
  .entrega-value,
  .total {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #282828;
  }
  .total-value {
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #55b84b;
  }
  @media (max-width: 1310px) {
    hr {
      width: 200px;
    }
  }
`;
