import styled from 'styled-components';

export const Card = styled.div`
  * {
    margin: 0;
  }
  height: 108px;
  margin-bottom: 50px;
  .store-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    color: #249cf2;
    margin-bottom: 8px;
  }
  .content-card {
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-between;
  }
  .image {
    background: url(${(props) => props.image}) no-repeat;
    background-size: auto 100%;

    width: 80px;
    height: 80px;
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .product-title {
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    color: #6d5d7a;
  }
  .product-type {
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;
    color: #282828;
  }
  .value {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #55b84b;
  }
  .sum {
    width: 40px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #249cf2;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    > button {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      line-height: 23px;
      cursor: pointer;
    }
    > p {
      font-size: 16px;
      line-height: 23px;
      color: #ffffff;
      text-align: center;
    }
  }

  .trash {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    > button {
      background: none;
      border: none;
    }
  }
`;
