import styled from 'styled-components';

export const Card = styled.div`
  width: 290px;
  height: 100px;
  padding: 16px;
  border: 2px solid #e5e4e6;
  box-sizing: border-box;
  border-radius: 7px;
  display: flex;

  .image-store {
    margin-right: 12px;
    background: url(${(props) => props.image}) no-repeat;
    background-size: auto 100%;

    width: 68px;
    height: 68px;
    background-color: pink;
  }
  .descriptions {
    display: flex;
    flex-direction: column;
  }
  .store-title {
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #6d5d7a;
  }
  .store-type {
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    color: #249cf2;
  }
  .store-address {
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #979797;
  }
`;
