import styled from 'styled-components';

export const DivInput = styled.div`
  input {
    width: 305px;
    height: 45px;
    border: 2px solid #e5e4e6;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 13px 16px;
    margin-bottom: 35px;
    ::placeholder {
      color: #d0c9d6;
      font-family: sans-serif;
      font-size: 13px;
      line-height: 19px;
    }
  }
  @media (max-width: 1310px) {
    input {
      width: 210px;
    }
  }
`;

export const DivCards = styled.div`
  width: 904px;
  max-height: 470px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  box-sizing: border-box;
  @media (max-width: 1310px) {
    width: 300px;
  }
`;
