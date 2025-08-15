
import './App.css'
import WelcomeMessage from "./component/WelcomeMessage.tsx";
import SubWelcomeMessage from "./component/SubWelcomeMessage.tsx";
import {type Product} from "./component/ProductCard.tsx";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";
import type {Employee} from "./common-interface.ts";
import StatsCard from "./component/StatsCard.tsx";
import AlertMessage from "./component/AlertMessage.tsx";
import EmployeeCard from "./component/EmployeeCard.tsx";
import ProductListCard from "./component/ProductListCard.tsx";
import Counter from "./hooks/Counter.tsx";
import ProductQuantity from "./hooks/ProductQuantity.tsx";
import SampleState from "./SampleState.tsx";
import InteractiveProductCard from "./component/InteractiveProductCard.tsx";

function App() {

    const products : Product[] = [
        {
            name: "MacBook Pro",
            price: 2499,
            stock: 8,
            category:"Electronics",
            onSale:true,
            description:"High-performance gaming laptop with RTX graphics",
            tags: ["Apple", "Laptop", "Premium"]
        },
        {
            name: "Logitech MX Master",
            price: 99,
            stock: 15,
            category:"Accessories",
            onSale:false,
            description:"Comfortable wireless mouse for office work",
            tags: ["Logitech", "Wireless", "Professional"]
        }

    ]

    const employees: Employee[] = [
        {name:"John Doe", role :"Manager", department:"Inventory"},
        {name:"Jane Smith", role:"Associate", department:"Sales"}
    ]

  return (
      <div className="App">
          <Header/>
          <WelcomeMessage/>
          <SubWelcomeMessage/>
          <main>
              <h1>My Inventory Item</h1>
              <ProductListCard products={products}/>
          </main>

          <h1>Dashboard!!</h1>
          <div className="stats-section">
              <StatsCard title="Total Products" value={234} unit="items"/>
              <StatsCard title="Low Stock Items" value={12} unit="items"/>
              <StatsCard title="Total Revenue" value={34578} unit="USD"/>
          </div>
          <AlertMessage message="5 items are running low on stock~!" type="warning"/>
          <AlertMessage message="System backup completed successfully." type="Success"/>
          <h2>Team Member</h2>
          {
              employees.map((employee:Employee, index:number    ) => (
                  <EmployeeCard key={employee.name} employee={employee} />
              ))
          }

          <div className="management-hooks">
              <h1>Management Hooks</h1>
              <ProductQuantity/>
          </div>

          <div>
              <SampleState/>
          </div>

          <div>
              <InteractiveProductCard/>
          </div>

          <Footer/>
      </div>
  )
}

export default App
