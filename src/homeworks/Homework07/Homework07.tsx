import Product from "../../components/Product/Product";
import { products } from "./dataHomeWork07";
import './style.css'

  function Homeworks07() {
    const productCards = products.map((product)=> {
        return <Product name={product.name} price={product.price} />
    })

    return (
        <div className="product-cards-wrapper">{productCards}</div>

    )
  }

  export default Homeworks07;