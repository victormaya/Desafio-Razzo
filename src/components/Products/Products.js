import React, { useEffect, useState } from 'react';
import { DivCards } from './styled';
import axios from 'axios';
import StoreCard from '../StoreCard/StoreCard';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ storeId, currentStore }) => {
  const [productsData, setProductsData] = useState([]);

  const searchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://api-test-carrinho.herokuapp.com/product/business/${storeId}`
      );
      setProductsData(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <div>
      <StoreCard
        image={currentStore.assets.logo}
        name={currentStore.name}
        description={currentStore.description}
        street_name={currentStore.address.street_name}
        street_number={currentStore.address.street_number}
        neighborhood={currentStore.address.neighborhood}
      />
      <DivCards>
        {productsData.map((item) => {
          return (
            <ProductCard
              key={item._id}
              picture={item.imgs[1].url}
              name={item.name}
              items={item.description}
              timeInicial={item.createdAt}
              timeFinal={item.updatedAt}
              value={item.pricing}
            />
          );
        })}
      </DivCards>
    </div>
  );
};

export default Products;
