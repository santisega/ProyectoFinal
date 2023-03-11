import React from "react";
import { Input, Collection } from "usetheform";
import ClearIcon from '@mui/icons-material/Clear';

const preventNegativeNumber = (val) => (val < 1 ? 1 : val);

export function CartItem({cant, price, removeItem, id, title, thumbnail}) {
  return (
    <div className="">
      <Collection object>
        <div className="cartItem flex row">
          <div>
            <img className="imgCartItem" src={thumbnail} />
            <Input type="hidden" name="id" value={id} />
          </div>
          
          <div className="inputsContainer flex column x-content-center">
{/* Title */}
            <div>
            <Input
              className=" roboto cartItemTitle"
              type="text"
              name="title"     
              value={title}
              readOnly
              disabled
            />   
            </div>
            <div className="cantPriceContainer flex column" >
{/* Cant */}
              <div>
                <Input 
                  className="cartItemCant"
                  reducers={preventNegativeNumber}
                  type="number"
                  name="cant"    
                  value="0"
                />
              </div>
{/* Price */}
              <div className="flex y-items-center ">
                <Input
                  className="roboto cartItemPrice"
                  type="text"
                  disabled
                  name="price"
                  readOnly
                  value={price}
                />
                <label className="roboto priceLabel">$</label>
              </div>
            </div>
          </div>
          <div>
            <button className="closeCartItem"
                    type="button"
                    onClick={() => removeItem(id)}>
              <ClearIcon className="iconClose" />
            </button>
          </div>
        </div>
      </Collection>
    </div>
  );
}
