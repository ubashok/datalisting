import React, { useEffect, useState } from "react";
import axios from "axios";
import DataListing from "./DataListing";
const ProductDtails = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showRow, setShowRow] = useState(true);

  const handleReset = () => {
    setShowRow(true);
  };
  const handleShowDetail = (clickedRowBuyNow) => {
    setSelectedProduct(clickedRowBuyNow);
    setShowRow(() => false);
  };

  const fetchProduct = async () => {
    const _url = "https://fakestoreapi.com/products";
    const dataProducts = await axios(_url).then((data) => data);
    setProducts(dataProducts.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="w-full mx-auto flex hidden">
      {showRow && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Price </th>
              <th>Description</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 &&
              products?.map((pdp) => {
                const { id, title, image, price, description } = pdp;
                return (
                  <tr key={id}>
                    <td>
                      {title.length > 0 ? title.slice(0, 30) : ""}
                    </td>
                    <td>
                      <img
                        src={image}
                        className="w-[50px] contain-fit"
                        alt={title}
                      />
                    </td>
                    <td>{`$${price}`}</td>
                    <td>
                      {description.length > 0 ? description.slice(0, 20) : ""}
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleShowDetail(pdp)}
                      >
                        Buy Now
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}

      {selectedProduct && !showRow && (
        <DataListing {...selectedProduct} handleReset={handleReset} />
      )}
    </div>
  );
};
export default ProductDtails;
