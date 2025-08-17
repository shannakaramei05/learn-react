import {useEffect, useState} from "react";

interface Product{
    id:number,
    name:string,
    price:number,
    stock:number
}
export default function ProductDashboard() {

    const [products,setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState<Boolean>(false);
    const[error,setError] = useState<string|null>(null);

    useEffect(() => {
        const fetchProducts = async () =>{
            try{
                setLoading(true);
                await new Promise(resolve => setTimeout(resolve,2000))

                const mockProducts:Product[] = [
                    { id: 1, name: "Laptop", price: 999, stock: 5 },
                    { id: 2, name: "Mouse", price: 29, stock: 20 },
                    { id: 3, name: "Keyboard", price: 79, stock: 0 },
                    { id: 4, name: "camera", price: 150, stock: 1 }
                ]

                setProducts(mockProducts)
                setError(null)
            }catch (err) {
                setError("failed to fetch")
            }finally {
                setLoading(false)
            }
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        document.title = `${products.length} Product - Inventory`
    }, [products.length]);

    useEffect(() => {
        const lowStock = products.filter(p=>p.stock< 5)
        if(lowStock.length> 0 ) {
            console.log("low stocks items: ", lowStock)
        }
    }, [products]);

    if(loading) return <p>Loading.....</p>
    if(error) return <p>Error : ${error}</p>
    return (
        <div>
            <h2>Product DashBoard {products.length} items</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price} - stock: {product.stock}</p>
                    {product.stock < 5 && <span style={{color: 'red'}}>⚠️ Low Stock</span>}
                </div>
            ))}
        </div>
    )
}