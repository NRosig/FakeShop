import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductComponent.css"
import {AiOutlineShoppingCart} from "react-icons/ai"

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {id, title, image, price, category} = product;
    return (
        <div className="cards" key={id}>
        <div className="cards__center">
          <div className="product">
          <Link to={`/product/${id}`}>
            <div className="img">
                <img src={image} alt={title} />
            </div>
            </Link>
            <div className="product__footer">
              <div>
                <h1 className="">{title}</h1>
              </div>
              <div className="product__detail">
                <div>
                  <h2 className="product__price">$ {price}</h2>
                </div>
                <div>
                  <button className="product__button"><AiOutlineShoppingCart /></button>
                </div>
                <div className="category__div">
                  <h3 className="product_category">{category}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
            
      </div>);
  });

  return (
    <>{renderList}</>
  );
}


export default ProductComponent;
