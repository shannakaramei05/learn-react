import {useState} from "react";


export default function InventoryForm() {
    const [productName, setPorductName] = useState<string>("");

    const [price,setPrice] = useState<number>(0)
    const [inStoc,setInStoc] = useState<boolean>(true)
    const [tags,setTags] = useState<string[]>([]);


    const [product, setProduct] = useState<{
        name: string,
        price: number,
        category: string
        }> (  {
        name: "",
        price: 0,
        category: ""
    })

    return (
        <div>
            <h2>Current Values: </h2>
            <p>Name: {productName}</p>
            <p>Price: {price}</p>
            <p>In Stock: {inStoc? "Yes" : "No"}</p>
            <p>Tags : {tags.join(", ")}</p>
            <p>Product: {JSON.stringify(product)}</p>
        </div>
    )
}