import {useState} from "react";
import ProductShowcase from "./ShoppingCartSystem/ProductShowCase.tsx";
import CartComponent from "./ShoppingCartSystem/CartComponent.tsx";

const PRODUCTS = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 249.99, image: '⌚' },
    { id: 3, name: 'Laptop Stand', price: 45.50, image: '💻' },
    { id: 4, name: 'Coffee Mug', price: 12.99, image: '☕' },
    { id: 5, name: 'Bluetooth Speaker', price: 79.99, image: '🔊' },
    { id: 6, name: 'Phone Case', price: 19.99, image: '📱' }
];


const ShoppingCartApp = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                // If item exists, increase quantity
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // If new item, add to cart with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    React Shopping Cart
                </h1>

                <ProductShowcase
                    products={PRODUCTS}
                    onAddToCart={addToCart}
                />

                <CartComponent
                    cartItems={cartItems}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeFromCart}
                    onClearCart={clearCart}
                />
            </div>
        </div>
    );
};

export default ShoppingCartApp;