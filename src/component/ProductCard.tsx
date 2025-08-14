

export interface Product {
    name:string,
    price:number,
    stock:number,
    onSale: boolean,
    description:string,
    category:string,
    tags: string[]
}

interface ProductCardsProps {
    product: Product
}

export default function ProductCard({product}:ProductCardsProps) {
    return(
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>Category : {product.category}</p>
            <p>Price: ${product.price} {product.onSale &&<span>🔥 ON SALE!</span>}</p>
            <p>Stock: {product.stock} units </p>
            <p>{product.description}</p>
            <div>
                <strong>Tags:</strong>
                {product.tags.map((tag:string, index:number)=>
                    (<span key={index} className="tag">
                        {tag},
                    </span>)
                )}
            </div>
            <button>Add to Cart</button>

        </div>
    )
}