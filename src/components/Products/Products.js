import React, { useEffect, useState } from 'react';
import { DivCards } from './styled';
import axios from 'axios';
import StoreCard from '../StoreCard/StoreCard';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({ storeId }) => {
  const [productsData, setProductsData] = useState([]);

  const searchProducts = async () => {
    try {
      const { data } = await axios.get(
        `https://api-test-carrinho.herokuapp.com/product/business/${storeId}`
      );
      setProductsData(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchProducts();
  }, []);

  return (
    <div>
      <StoreCard />
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
