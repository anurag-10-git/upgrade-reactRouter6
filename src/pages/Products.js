import { Link } from "react-router-dom";

const Products = () => {
  return (
  <section>
    <h1>The Products Page</h1>
    <ul>
      <li><Link to="/products/carpets">carpets</Link></li>
      <li><Link to="/products/books">books</Link></li>
      <li><Link to="/products/furnitures">furnitures</Link></li>
    </ul>
  </section>
  )
};

export default Products;