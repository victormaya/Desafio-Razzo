import React, { useEffect, useState } from 'react';
import {
  Page,
  Container,
  Header,
  Section,
  DivInput,
  DivCards,
  SectionStoreBag,
  BagList,
} from './css/styled';

import StoreCard from './components/StoreCard/StoreCard';
import CardBag from './components/CardBag/CardBag';
import Total from './components/Total/Total';

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

          <SectionStoreBag>
            <div>
              <DivInput>
                <input placeholder="Buscar estabelecimento" />
              </DivInput>

              <DivCards>
                {storeData.map((item) => {
                  return (
                    <>
                      <StoreCard
                        key={item._id}
                        image={item.assets.logo}
                        name={item.name}
                        description={item.description}
                        street_name={item.address.street_name}
                        street_number={item.address.street_number}
                        neighborhood={item.address.neighborhood}
                      />
                    </>
                  );
                })}
              </DivCards>
            </div>

            <BagList>
              <div className="items">
                <CardBag />
              </div>
              <Total />
              <button className="continuar">Continuar comprando</button>
              <button className="finalizar">Confirmar a compra</button>
            </BagList>
          </SectionStoreBag>
        </Container>
      </Page>
    </>
  );
};

export default App;
