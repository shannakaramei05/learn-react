import { ShoppingCart } from 'lucide-react';

const ProductShowcase = ({ products, onAddToCart }) => {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow">
                        <div className="text-4xl mb-3 text-center">{product.image}</div>
                        <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
                        <button
                            onClick={() => onAddToCart(product)}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingCart size={18} />
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductShowcase;