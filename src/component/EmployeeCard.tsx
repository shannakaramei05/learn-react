import type {EmployeeCardProps} from "../common-interface.ts";

export default function EmployeeCard( {employee} : EmployeeCardProps) {
    return (
        <div className="employee-card">
            <h4>{employee.name}</h4>
            <p>Role: {employee.role}</p>
            <p>Department: {employee.department}</p>
        </div>
    )
}