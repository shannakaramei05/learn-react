import {use, useEffect, useState} from "react";


export default function UseEffectExample() {

    const [count,setCount] = useState<number>(1);
    const [products,setProducts] = useState<any[]>([])

    useEffect(() => {
        console.log("Hello from useEffect")
    });

    useEffect(() => {
        console.log("Component mounted")
        document.title = "Inventory Item"
    }, []);

    useEffect(() => {
        console.log(`count changed to ${count}`)
        document.title=`count ${count}`
    }, [count]);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("time clicked")
        },1000)

        return () => {
            clearInterval(timer);
            console.log("Time clean up")
        }
    });

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Count</button>
        </div>
    )
}