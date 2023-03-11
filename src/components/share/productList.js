import React from 'react';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function ProductList({product, addToCart}){
    
return(
    <div>
        {/*ProductList*/}
        <div className="productListContainer">
            <ul className="listado flex flex-wrap x-content-center">
                {product.map((productItem, index)=>{
                    return (
                        <li key={index}  className="card flex roboto">
                            <div>
                                <img className="itemImg" 
                                     src={productItem.thumbnail} 
                                />
                                <h3 title={productItem.title} 
                                    className="itemTitle">  
                                        {productItem.title}
                                </h3>
                                <p className="itemDescription">
                                    {productItem.description}
                                </p>
                                <h3 price={productItem.price} 
                                    className="itemPrice">
                                        ${productItem.price}
                                </h3>
                                <button className="addToCartButton flex roboto"
                                        onClick={() => addToCart(productItem)}>
                                            Add to Cart 
                                            <ShoppingCartOutlinedIcon className="icon"/>
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
)
};

export default ProductList;