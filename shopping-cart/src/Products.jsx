import { useState, useEffect } from "react";

function Products() {
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json)
        .then((data) => console.log(data))
    },[]
    );
  
}
export default Products;
