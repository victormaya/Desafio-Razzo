import React, { useEffect, useState } from 'react';
import { DivCards } from './styled';
import axios from 'axios';
import StoreCard from '../StoreCard/StoreCard';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({}) => {
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
    <div>
      <StoreCard />
      <DivCards>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </DivCards>
    </div>
  );
};

export default Products;
