import React, { useEffect, useState } from 'react';
import {
  Page,
  Container,
  Header,
  Section,
  SectionStoreBag,
  BagList,
} from './css/styled';

import CardBag from './components/CardBag/CardBag';
import Total from './components/Total/Total';
import InputStore from './components/InputStore/InputStore';
import Products from './components/Products/Products';

import logo from './assets/logo.png';
import bag from './assets/bag.svg';
import user from './assets/user.png';
import arrowDown from './assets/arrow-down.svg';
import arrowLeft from './assets/arrow-left.png';

const App = () => {
  const [page, setPage] = useState('store');
  const [currentStore, setCurrentStore] = useState();
  const [itemsBag, setItemsBag] = useState([]);
  const [itemsBagVisible, setItemsBagVisible] = useState([]);

  const tratarArrays = (array) => {
    let contador = [];
    const setRepeticao = new Set(array);
    const arraySemRepeticao = [...setRepeticao];
    arraySemRepeticao.map((item) => {
      let quantidadeElementos = array.filter(
        (elemento) => elemento === item
      ).length;
      const novoObjeto = Object.assign(item, {
        quantidade: quantidadeElementos,
      });
      contador.push(novoObjeto);
    });
    setItemsBagVisible(contador);
  };

  const addItemBag = (item) => {
    let lista = [...itemsBag, item];
    setItemsBag([...itemsBag, item]);
    tratarArrays(lista);
  };
  const removeItemBag = (idItem) => {
    const found = itemsBag.find((item) => item._id === idItem);
    const elemento = itemsBag.indexOf(found);
    itemsBag.splice(elemento, 1);
    tratarArrays(itemsBag);
  };

  return (
    <>
      <Page>
        <Container>
          <Header>
            <div className="start-items">
              <div className='logo'>
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

          <Section page={page}>
            <div className="arrow-left" onClick={() => setPage('store')}>
              <img src={arrowLeft} />
            </div>
            <div>
              <a className="home">Home</a>
              <div className="arrow-right">
                <img src={arrowDown} />
              </div>
              <a className="sacola">Sacola</a>
            </div>
          </Section>

          <SectionStoreBag>
            {/* Componente que se tem a lista de lojas e de produtos */}
            {page === 'store' ? (
              <InputStore setPage={setPage} setCurrentStore={setCurrentStore} />
            ) : (
              <Products
                itemsBagVisible={itemsBagVisible}
                storeId={currentStore._id}
                currentStore={currentStore}
                addItemBag={addItemBag}
                removeItemBag={removeItemBag}
              />
            )}

            <BagList>
              <div className="items">
                {itemsBagVisible.map((item) => {
                  return (
                    <CardBag
                      key={item._id}
                      item={item}
                      addItemBag={addItemBag}
                      removeItemBag={removeItemBag}
                      currentStore={currentStore}
                    />
                  );
                })}
              </div>
              <Total itemsBagVisible={itemsBagVisible} />
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
