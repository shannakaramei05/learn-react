import {useState} from "react";
import {qunit} from "globals";


interface Product{
    id:number,
    name:string,
    price:number,
    stock:number
}



export default function InteractiveProductCard() {
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: "Laptop",
        price: 999,
        stock: 10
    })
    const [quantity, setQuantity] = useState<number>(1)
    const [isInCart, setIsInCart] = useState<boolean>(false);


    const handleClick =(newQuantity:number) => {
        if(newQuantity>=1 && newQuantity<=product.stock) {
            setQuantity(newQuantity)
        }
    }

    const handleAddToCart = () => {
        if(quantity <= product.stock) {
            setIsInCart(true)
            setProduct({
                ...product,
                stock: product.stock - quantity
            })
        }
    }




    return (
        <div>
            <h3>Product : </h3>
            <p>Product Name : {product.name}</p>
            <p>price : {product.price}</p>
            <p>stock: {product.stock}</p>

            <p>Quantity</p>
           <div>
               <button onClick={()=>handleClick(quantity + 1)}>+</button>
               <span>{quantity}</span>
               <button onClick={() => handleClick(quantity-1)}>-</button>
           </div>

            <button
                onClick={handleAddToCart}
                disabled={product.stock === 0 || isInCart}
            >
                {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>

            {product.stock === 0 && <p style={{color: 'red'}}>Out of Stock!</p>}

        </div>
    )
}