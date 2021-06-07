import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  * {
    font-family: sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  background: #fff;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 1310px) {
    max-width: 740px;
  }
  @media (max-width: 780px) {
    width: 300px;
    margin: 2rem auto;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 45px;
  justify-content: space-between;

  .start-items {
    display: flex;
    align-items: center;
  }

  .title-dashboard {
    font-size: 14px;
    font-weight: 400;
    color: rgba(36, 156, 242, 1);
    margin-left: 150px;
    position: relative;
    line-height: 20px;
    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background: rgba(36, 156, 242, 1);
      bottom: -35px;
    }
  }

  .end-items {
    display: flex;
    align-items: center;
  }

  .photo-user {
    margin-left: 30px;
    margin-right: 10px;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    .start-items {
      flex-direction: column;
    }
    .title-dashboard {
      margin: 0;
      margin-top: 10px;
      ::before {
        display: none;
      }
      margin-bottom: 10px;
    }
    .end-items {
      margin: 10px auto;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 25px;
  padding-right: 55px;
  > div {
    display: flex;
  }
  .arrow-left {
    opacity: ${(props) => (props.page === 'store' ? 0 : 1)};
    cursor: ${(props) => (props.page === 'product' ? 'pointer' : 'default')};
  }
  .arrow-right {
    margin: 0 15px;
    transform: rotate(-90deg);
  }
  .home,
  .sacola {
    font-size: 16px;
    line-height: 22.8px;
    font-weight: 400;
  }
  .sacola {
    font-weight: bold;
    color: rgba(36, 156, 242, 1);
  }
  @media (max-width: 780px) {
    flex-direction: column-reverse;
    padding-right: 0;
    margin: 50px auto 30px auto;
    .arrow-left {
      margin-top: 10px;
    }
  }
`;

export const SectionStoreBag = styled.section`
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 780px) {
    flex-direction: column;
    > div {
      align-items: center;
    }
  }
`;

export const BagList = styled.section`
  width: 423px;
  height: 780px;
  margin-right: 55px;
  /* padding: 40px 15px; */
  display: flex;
  flex-direction: column;
  .items {
    height: 475px;
    overflow-y: auto;
    margin-bottom: 10px;
  }
  .teste {
    display: flex;
    flex-grow: 1;
    background: peru;
    align-items: flex-end;
  }
  .continuar {
    margin-top: 70px;
    margin-bottom: 15px;
  }
  .continuar,
  .finalizar {
    width: 100%;
    background: #e5e5e5;
    border: none;
    height: 50px;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #73657e;
    border-radius: 7px;
    cursor: pointer;
  }
  .finalizar {
    background: #249cf2;
    color: white;
  }
  @media (max-width: 1310px) {
    height: 600px;
    width: 250px;
  }
  @media (max-width: 780px) {
    margin: 0 auto;
    width: 100%;
    padding: 0 10px;
    .continuar {
      margin-top: 10px;
    }
  }
`;
