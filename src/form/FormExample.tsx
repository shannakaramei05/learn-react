import {useState} from "react";


export default function FormExample() {
    const [controlledValue,setControlledValue] = useState<string>("");

    return (
        <div>
            <input type="text" value={controlledValue} onChange={e => setControlledValue(e.target.value)}/>
            <p>Controlled Value : {controlledValue}</p>
            <input type="text" placeholder="text test"/>
        </div>
    )
}