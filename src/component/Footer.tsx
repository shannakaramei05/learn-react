

export default function Footer() {
    const currentYear:number = new Date().getFullYear();
    return (
        <footer>
            <p>@{currentYear} Inventory System. All right reserved</p>
        </footer>
    )
}