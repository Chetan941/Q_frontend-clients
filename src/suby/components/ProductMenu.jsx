import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { firmId, firmName } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/product/${firmId}/products`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchProducts();
  }, [firmId]);

  return (
    <>
      <TopBar />

      <section className="productSection">
        <h3>{firmName}</h3>

        {products.map((item) => (
          <div className="productBox" key={item._id}>
            <div>
              <div><strong>{item.productName}</strong></div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>

            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="addButton">ADD</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductMenu;
