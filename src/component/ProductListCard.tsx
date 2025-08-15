import type {ProdcutListProps} from "../common-interface.ts";
import type {Product} from "./ProductCard.tsx";
import ProductCard from "./ProductCard.tsx";


export default function ProductListCard({products} : ProdcutListProps) {
   if(products.length == 0) {
       return <p>No products Available</p>
   }
   return(
       <div>
           {products.map((product:Product) => (
               <ProductCard product={product} key={product.name}/>
           ))}
       </div>
   )
}