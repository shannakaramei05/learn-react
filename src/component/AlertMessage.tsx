import type {AlertMessageProps} from "../common-interface.ts";

export default function AlertMessage({message,type} : AlertMessageProps) {
    return (
        <div className={`alert alert-${type}`}>
            <p>{message}</p>
        </div>
    )
}