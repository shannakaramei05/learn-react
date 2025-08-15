import type {Product} from "./component/ProductCard.tsx";

interface Employee{
    name:string,
    role:string,
    department:string
}

interface EmployeeCardProps {
    employee:Employee
}

interface StatsCardProps {
    title:string,
    value:number,
    unit:string
}

interface AlertMessageProps {
    message: string,
    type: 'Warning' | 'Success' | 'error' | 'info'
}

interface ProdcutListProps{
    products: Product[]
}


export type {
    StatsCardProps,EmployeeCardProps,AlertMessageProps,Employee,ProdcutListProps
}


