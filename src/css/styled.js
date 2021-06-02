import styled from 'styled-components';

export const Page = styled.div`
  /* background: #e5e5e5; */
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
  width: 1440px;
  background: #fff;
  margin: 0 auto;
  height: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 96px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  padding-right: 45px;
  display: flex;
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
`;

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 25px;
  padding-right: 55px;
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
    font-weight: 500;
    color: rgba(36, 156, 242, 1);
  }
`;
