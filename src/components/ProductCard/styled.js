import styled from 'styled-components';

export const Card = styled.div`
  * {
    margin: 0;
  }
  width: 266px;
  height: 274px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #e5e4e6;
  box-sizing: border-box;
  text-align: center;
  margin-bottom: 25px;
  margin-right: 35px;
  .image-product {
    width: 90px;
    height: 90px;
    background: url(${(props) => props.image}) no-repeat;
    background-size: auto 100%;
    margin: 0 auto;
    margin-bottom: 8px;
  }
  .product-name {
    font-size: 14px;
    line-height: 16px;
    color: #6d5d7a;
    margin-bottom: 16px;
    font-weight: bold;
  }
  .product-items {
    font-size: 10px;
    line-height: 150%;
    color: #979797;
    margin-bottom: 4px;
  }
  .time {
    font-size: 10px;
    line-height: 150%;
    color: #979797;
    margin-bottom: 9px;
  }
  .value {
    font-size: 16px;
    line-height: 23px;
    color: #55b84b;
    font-weight: bold;
    padding-bottom: 15.5px;
  }
  .sum {
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #249cf2;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    margin: 0 auto;
    > button {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      line-height: 23px;
      cursor: pointer;
      font-weight: bold;
    }
    > p {
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
    }
  }
`;
