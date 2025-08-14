import type {StatsCardProps} from "../common-interface.ts";


export default function StatsCard ({title,value,unit} : StatsCardProps) {
    return (
        <div className="stats-card">
            <h3>{title}</h3>
            <p className="big-number">{value} {unit}</p>
        </div>
    )
}