import {useState} from "react";


export default function SampleState() {
    const [count,setCount] = useState<number>(0)
    const [items,setItems] = useState<string[]>(["item1","item2"])
    const [user, setUser] = useState<{
        name: string,
        email: string
    }>({name:"John Wich", email:"johnwick5@gmail.com"})


    //simple state update
    const incrementCount = () => {
        setCount(count+1)
    }

    //Function update( better for complex logic)
    const incrementCountFunctional = () => {
        setCount(prev => prev + 1);
    }

    //array update (awlways create new array)
    const addItem = () => {
        setItems([...items, `item${items.length+1}`])
    }

    const removeItem = (index: number) => {
        setItems(
            items.filter((_, i) => i !== index)
        )
    }

    //object updates (always create new object )
    const updateUserName = (newName:string) => {
        setUser({
            ...user,
            name: newName
        })
    }

    return (
        <div>
            <div>Count: {count}</div>
            <button onClick={incrementCount}> +1</button>
            <button onClick={incrementCountFunctional}>+1 (Functional)</button>

            <div>Items : {items.join(", ")}</div>
            <button onClick={addItem}>Add item</button>

            <div>User: {user.name}, Email : {user.email}</div>
            <button onClick={() => updateUserName("Jane")}>Change Name</button>
        </div>
    )


}