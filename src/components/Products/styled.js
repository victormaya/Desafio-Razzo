import styled from 'styled-components';

export const DivCards = styled.div`
  width: 904px;
  max-height: 470px;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  box-sizing: border-box;
  @media (max-width: 1310px) {
    width: 300px;
  }
  @media (max-width: 780px) {
    margin-bottom: 10px;
  }
`;
