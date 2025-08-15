import {useState} from "react";


export  default function ProductQuantity( ){
    const [quantity, setQuantity] = useState<number>(0);
    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button onClick={() => setQuantity(quantity+1)}>+</button>
            <button onClick={() => setQuantity(quantity-1)}>-</button>
        </div>
    );
}
