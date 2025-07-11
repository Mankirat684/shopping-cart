import { useState, useEffect } from "react";

function Products() {
  let [productsArr, setproductsArr] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setproductsArr(data);
      });
  }, []);
  let RenderArr = productsArr.map((products,index) => {
    return (
      <div className="product" key={index}>
        <p>{products.title}</p>
        <img src={products.image} alt={products.title} />
        <p className="price">{products.price}</p>
      </div>
    );
  });
  return(
    <>
    {RenderArr}
    </>
  )
}
export default Products;
