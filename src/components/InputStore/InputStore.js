import React, { useEffect, useState } from 'react';
import { DivCards, DivInput } from './styled';
import axios from 'axios';
import StoreCard from '../StoreCard/StoreCard';

const InputStore = ({ setPage, setCurrentStore }) => {
  const [storeData, setStoreData] = useState([]);

  const searchStores = async () => {
    try {
      const { data } = await axios.get(
        'https://api-test-carrinho.herokuapp.com/business'
      );
      setStoreData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchStores();
  }, []);

  return (
    <div>
      <DivInput>
        <input placeholder="Buscar estabelecimento" disabled />
      </DivInput>

      <DivCards>
        {storeData.map((item) => {
          return (
            <div
              key={item._id}
              onClick={() => [setPage('product'), setCurrentStore(item)]}
            >
              <StoreCard
                image={item.assets.logo}
                name={item.name}
                description={item.description}
                street_name={item.address.street_name}
                street_number={item.address.street_number}
                neighborhood={item.address.neighborhood}
              />
            </div>
          );
        })}
      </DivCards>
    </div>
  );
};

export default InputStore;
