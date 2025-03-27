import { ProductProps } from "./types";
import './styles.css';


function Product({productName, productPrice} : ProductProps) {
    return (
        <div className="product-container">
        <div>Product: {productName}</div>
        <div>Price: {productPrice}$</div>
        </div>
    )
}

export default Product;


// function Product({name, price} : ProductProps) {
//     return (
//         <div className="product-cards">
//             <h2>{name}</h2>
//             <p>Price: {price}$</p>
//         </div>
//     )
// }

// export default Product;