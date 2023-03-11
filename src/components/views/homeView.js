import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import InputSearch from '../share/inputSearch';
import ProductList from '../share/productList';
import CartList from '../share/cartList';

function HomeView(){

  //SeteoProductos
  const [product, setProduct] = useState([]);
  const getProducts = () => {
    fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProduct(data.products);
    })
        .catch((error) => console.error(error))
  }
  useEffect(() => {
    getProducts(); 
  },[]);

//SearchInput
    const refSearch = useRef(null);
    const byItems = () => {
        let currentItem = refSearch.current.value;
            if (currentItem) {
                currentItem = product.filter(productItem => productItem.title.toLowerCase().includes(currentItem.toLowerCase()));
                setProduct(currentItem);
            }else {
                getProducts();
            }
    };

//SeteoProductosenCarrito
const [items, setCartItem] = useState([]);

//AddToCartFuncionalidad
  const addToCart = useCallback((item) => {
        setCartItem((prev) => [...prev, item]);
  },[]);

//Toggle que no funciona
  const [show, setShow] = useState(true);

return(
     
    <div>     
        {/*InputSearch*/}   
        <InputSearch refSearch={refSearch}
                     byItems={byItems}
        />
        {/*ProductList*/}
        <ProductList 
                     product={product} 
                      addToCart={addToCart} 
                      setProduct={setProduct}
                      getProducts={getProducts}                                 
         /> 
        {/*CartList*/}
        <CartList   items={items} 
                    setCartItem={setCartItem}        
         />

{/*Toggle fallido
        
        <div className="productListContainer flex x-content-center"> 
          <button className="toggleButton" 
                  onClick={() =>setShow(!show)}>
                    <ShoppingCartIcon/>
                      <sup>{items.length}</sup>
          </button>
        </div>
  {show?
        <ProductList  product={product} 
                      addToCart={addToCart} 
                      setProduct={setProduct}
                      getProducts={getProducts}                
         /> 
      :
        <CartList   items={items} 
                    setCartItem={setCartItem}        
         />
        }
*/}
    </div>
)
};

export default HomeView;




















