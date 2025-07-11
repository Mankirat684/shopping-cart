import { useState } from 'react'
import { Link } from "react-router-dom";

function App(){
  return (
    <>
     <div className="heading"><h1>Welcome to this site</h1></div>
     <Link to='/products'>Show All Products</Link>

    </>
  )
}
export default App