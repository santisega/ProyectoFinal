import React from "react";
import { Input, Collection } from "usetheform";

export function Shop() {
  return (
    <div className="totalCheckoutContainer">
      <Collection object name="info">
        {/* TotalPrice */}
        <div className="roboto space-between flex">
          <label className="totalPriceLabel">TOTAL</label>
          <div className="flex y-items-center">
            <Input
              className="roboto totalPriceInput"
              disabled
              type="text"
              value="0"
              name="totalPrice"
              readOnly  
              />
            <label className="totalPriceLabel">$</label>
          </div>
        </div>
        {/* Items */}
        <div className="y-items-center itemsContainer flex">
          <Input
            className="roboto itemsInput"
            disabled
            type="text"
            value="0"
            name="totalItems"
            readOnly
          />
          <label className="roboto itemsLabel" >Products</label>
        </div>
        {/* TotalItems */}
        <div className="y-items-center totalItemsContainer flex">  
          <Input
            className="roboto itemsInput"
            disabled
            type="text"
            value="0"
            name="totalCant"
            readOnly
          />
          <label className="roboto itemsLabel">Total Items</label>
        </div>
      </Collection>
    </div>
  );
}

