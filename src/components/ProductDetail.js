import React, { useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";


const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId)

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
        console.log("Err ", err);
        });

        dispatch(selectedProduct(response.data))
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

  return(
  	<div className="">
        {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
        ) : (
          <div className="">
            <div className="">
                <div className="">AND</div>
                <div className="">
                    <div className="">
                        <img className="" src={image} alt={title} />
                    </div>
                    <div className="">
                        <h1>{title}</h1>
                        <h2>
                            <a className="" href="pepe">${price}</a>
                        </h2>
                        <h3 className="">{category}</h3>
                        <p>{description}</p>
                        <div className="" tabIndex="0">
                            <div className="">
                                <i className=""></i>
                            </div>
                            <div className="">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        )}
    
    </div>
  ); 
}

export default ProductDetail;