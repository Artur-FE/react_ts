import { v4 } from "uuid";
import ProductCard from "../../components/Product/Product";
import { products } from "./data";
import "./style.css";
import { Product } from "./types";

function Homeworks07() {
  const productsList = products.map((productObj:Product) => {
    return (
      <ProductCard
        key={v4()}
        productName={productObj.name}
        productPrice={productObj.price}
      />
    );
  });

  return (
    <div className="homework07-container">
      <h1>Products</h1>
      {productsList}
    </div>
  );
}

export default Homeworks07;

// function Homeworks07() {
//   const productCards = products.map((product)=> {
//       return <Product key={v4()} productName={product.name} productPrice={product.price} />
//   })

//   return (
//       <div className="product-cards-wrapper">{productCards}</div>

//   )
// }

// export default Homeworks07;
