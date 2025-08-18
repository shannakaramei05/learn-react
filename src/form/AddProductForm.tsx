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

    const [errors, setErrors] = useState<Partial<ProductForm>>({})
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    // Handle input changes
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target
        const checked = (e.target as HTMLInputElement).checked

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked :
                type === 'number' ? Number(value) :
                    value
        })

        // Clear error when user starts typing
        if (errors[name as keyof ProductForm]) {
            setErrors({
                ...errors,
                [name]: undefined
            })
        }
    }

    // Form validation
    const validateForm = (): boolean => {
        const newErrors: Partial<ProductForm> = {}

        if (!formData.productName.trim()) {
            newErrors.productName = "Product name is required"
        }

        if (formData.price <= 0) {
            newErrors.price = "Price must be greater than 0"
        }

        if (!formData.category) {
            newErrors.category = "Please select a category"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

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
        <form onSubmit={handleSubmit} className="product-form">
            <h2>Add New Product</h2>

            {/* Product Name */}
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    className={errors.productName ? "error" : ""}
                />
                {errors.productName && <span className="error-message">{errors.productName}</span>}
            </div>

            {/* Price */}
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    min="0"
                    step="0.01"
                    className={errors.price ? "error" : ""}
                />
                {errors.price && <span className="error-message">{errors.price}</span>}
            </div>

            {/* Category */}
            <div>
                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={errors.category ? "error" : ""}
                >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home">Home & Garden</option>
                </select>
                {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                />
            </div>

            {/* In Stock Checkbox */}
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleInputChange}
                    />
                    In Stock
                </label>
            </div>

            {/* Tags */}
            <div>
                <label htmlFor="tags">Tags (comma-separated):</label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="e.g., premium, new, sale"
                />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Product"}
            </button>

            {/* Form Preview */}
            <div className="form-preview">
                <h3>Preview:</h3>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </form>
    )
}