import React from 'react';
import { useState, useCallback } from 'react';

import Form from "usetheform";
import { Cart } from '../../components/share/cart';
import Modal from './modal';

function CartList ({ items, setCartItem }) {
    //SeteoProductosenCarrito
  const [formState, setFormState] = useState({});
  const removeItem = useCallback(
    (idToRemove) =>
      setCartItem((prev) => prev.filter(({ id }) => id !== idToRemove)),
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="cartListContainer">
      <div className="cartTitles roboto flex column y-items-center">
        <h2 >Cart</h2>
        <h3>Detalle de la compra</h3>
        <hr className="horizontalLine"/>
      </div>
      <Form onSubmit={(state) => console.log(state)}
            onChange={(state) => setFormState(state)}>
            <Cart items={items} removeItem={removeItem} />
            <hr className="horizontalLine"/>
            <div className="flex column checkoutContainer y-items-center">
              <button onClick={() => setIsOpen(true)} className="roboto checkoutButton flex x-content-center y-items-center " type="submit">
                CheckOut
              </button>
              {isOpen && <Modal setIsOpen={setIsOpen} />}
          </div>
      </Form>
    </div>
  )
}

export default CartList
