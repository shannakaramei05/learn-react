

interface ProductCardsProps {
    name:string,
    price:number,
    stock:number
}
export default function ProductCard({name,price,stock}:ProductCardsProps) {
    return(
        <div className="product-card">
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>Stock: {stock} units </p>
            <button>Add to Cart</button>

        </div>
    )
}