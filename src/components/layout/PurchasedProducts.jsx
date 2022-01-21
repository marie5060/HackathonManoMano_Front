import React, { useContext } from "react";
import ProductsContext from "../../contexts/Products";

const PurchasedProducts = ({ img, name, price }) => {
  const { productsOnCart } = useContext(ProductsContext);

  return (
    <div className="purchased-product">
      <div className="purchased-product__img">
        <img src={img} alt="product" />
      </div>
      <div className="purchased-product__name">
        <p>{name}</p>
      </div>
      <div className="purchased-product__price">
        <p>{price} € HT</p>
      </div>
      <div className="purchased-product__btn">
        <button
          onClick={() => {
            productsOnCart.push({ img: img, name: name, price: price });
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default PurchasedProducts;
