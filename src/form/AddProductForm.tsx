import {useState} from "react";
import * as React from "react";


interface ProductForm {
    productName:string,
    price:number,
    category:string,
    description:string,
    inStock:boolean,
    tags:string
}


export default function AddProductForm() {
    const [formData,setFormData] = useState<ProductForm>({
        productName:"",
        price:0,
        category:"",
        description:"",
        inStock:true,
        tags:""
    })

    const [errors,setErrors] = useState<Partial<ProductForm>>({})
    const[isSubmitting,setIsSubmitting] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLFormElement|HTMLTextAreaElement|HTMLSelectElement>) =>{
        console.log("test: ", e.target.value)
        const{productName,value,type} = e.target.value
        const checked = (e.target as HTMLInputElement).checked;

        setFormData({
            ...formData,
            [productName]: type === 'checkbox'? checked :type ==='number' ? Number(value) :value
        })
    }

    if(errors[name as keyof ProductForm]) {
        setErrors({
            ...errors,
            [name] : undefined
        })
    }

    const validateFrom = ():boolean => {
        const newErrors : Partial<ProductForm> = {}
        if(!formData.productName.trim()) {
            newErrors.productName = "Product name is Required"
        }

        if(formData.price<=0) {
            newErrors.price = "Price must be greater than 0"
        }

        if(!formData.description) {
            newErrors.description = "Please Select a category"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length ===0;
    }

    const handleSubmit = async (e:React.FormEvent)=> {
        e.preventDefault()
        if(!validateFrom()) {
            return;
        }
        setIsSubmitting(true)
        try{
            await new Promise(resolve =>setTimeout(resolve,1000))
            console.log("Product added:", formData)
            alert("Product added successfully!")
            // Reset form
            setFormData({
                productName: "",
                price: 0,
                category: "",
                description: "",
                inStock: true,
                tags: ""
            })

        } catch (error) {
            alert("Failed to add product")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="prodcut-form">
            <h2>Add new product</h2>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleInputChange} className={errors.productName ? "error" : ""}/>
                {errors.productName && <span className="error-message">{errors.productName}</span>}
            </div>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} className={errors.price ? "error" : ""}/>
                {errors.price && <span className="error-message">{errors.price}</span>}
            </div>
            <div>
                <label htmlFor="category">category: </label>
                <select name="caregory" id="category" value={formData.category} onChange={handleInputChange} className={errors.category ? "error" : ""}>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">books</option>
                    <option value="home">Home & Garden</option>
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
            </div>
            <div>
                <label htmlFor="description">Descriptions: </label>
                <textarea name="description" id="description" cols="30" rows="3"
                value={formData.description} onChange={handleInputChange}></textarea>
            </div>
            <div>
                <label htmlFor="stock">
                    <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleInputChange} />
                    In Stock
                </label>
            </div>
            <div>
                <label htmlFor="tags">Tags(comma-seperated): </label>
                <input type="text" id="tags" name="tags" value={formData.tags} onChange={handleInputChange} placeholder="e.q., premiuem, new, sale"/>
            </div>

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Adding..." : "Add Product"}</button>

            <div className="form-preview">
                <h3>Preview: </h3>
                <pre>
                    {JSON.stringify(formData,null)}
                </pre>
            </div>
        </form>
    )
}