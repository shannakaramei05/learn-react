import {Plus, Minus, Trash2, ShoppingCart} from 'lucide-react';

const CartComponent = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartItems.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h2>
                <div className="text-center py-8 text-gray-500">
                    <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Your cart is empty</p>
                    <p className="text-sm">Add some products to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                <button
                    onClick={onClearCart}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                    <Trash2 size={16} />
                    Clear Cart
                </button>
            </div>

            <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{item.image}</span>
                            <div>
                                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors"
                                    disabled={item.quantity <= 1}
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="font-semibold px-3 py-1 bg-gray-100 rounded min-w-[3rem] text-center">
                  {item.quantity}
                </span>
                                <button
                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>

                            <div className="text-right min-w-[4rem]">
                                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>

                            <button
                                onClick={() => onRemoveItem(item.id)}
                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded transition-colors"
                                title="Remove item"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Total Items:</span>
                    <span className="text-lg font-bold">{totalItems}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Total Price:</span>
                    <span className="text-2xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};


export default CartComponent;