import React, { useEffect, useState } from 'react';
import { Page, Container, Header, Section } from './css/styled';

import StoreCard from './components/StoreCard/StoreCard';
import axios from 'axios';

import logo from './assets/logo.png';
import bag from './assets/bag.svg';
import user from './assets/user.png';
import arrowDown from './assets/arrow-down.svg';

const App = () => {
  const [storeData, setStoreData] = useState([]);

  const searchStores = async () => {
    try {
      const { data } = await axios.get(
        'https://api-test-carrinho.herokuapp.com/business'
      );
      setStoreData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchStores();
  }, []);

  return (
    <>
      <Page>
        <Container>
          <Header>
            <div className="start-items">
              <div>
                <img src={logo} alt="Razzo" />
              </div>
              <a className="title-dashboard">Dashboard</a>
            </div>
            <div className="end-items">
              <div>
                <img src={bag} alt="Sacola de Compras" />
              </div>
              <div className="photo-user">
                <img src={user} alt="Foto do Usuário" />
              </div>
              <div>
                <img src={arrowDown} alt="Opções" />
              </div>
            </div>
          </Header>

          <Section>
            <a className="home">Home</a>
            <div className="arrow-right">
              <img src={arrowDown} />
            </div>
            <a className="sacola">Sacola</a>
          </Section>
          {storeData.map((item) => {
            return (
              <StoreCard
                key={item._id}
                image={item.assets.logo}
                name={item.name}
                description={item.description}
                street_name={item.address.street_name}
                street_number={item.address.street_number}
                neighborhood={item.address.neighborhood}
              />
            );
          })}
        </Container>
      </Page>
    </>
  );
};

export default App;
