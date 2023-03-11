import React from "react";
import { Collection } from "usetheform";

import { CartItem } from "./cartItem";
import { Shop } from "./shop";

export function Cart({ items, removeItem }) {
  return (
    <Collection reducers={udpdateShopInfo} object name="cart">
      <Collection array name="items">
        {items.map(item => (
          <CartItem {...item} removeItem={removeItem} key={item.id} />
        ))}
      </Collection>
      <Shop />
    </Collection>
  );
}

const udpdateShopInfo = value => {
  const { items = [] } = value;
  const info = items.reduce(
    (acc, item) => {
      acc.totalCant += item.cant;
      acc.totalPrice = Number((acc.totalPrice + item.cant * item.price).toFixed(2));
      return acc;
    },
    { totalItems: items.length, totalPrice: 0, totalCant: 0 }
  );
  return { ...value, info };
};
