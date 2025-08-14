import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from "./component/WelcomeMessage.tsx";
import SubWelcomeMessage from "./component/SubWelcomeMessage.tsx";
import ProductCard from "./component/ProductCard.tsx";
import Header from "./component/Header.tsx";
import Footer from "./component/Footer.tsx";

function App() {
  return (
      <div className="App">
          <Header/>
          <WelcomeMessage/>
          <SubWelcomeMessage/>
          <main>
              <h1>My Inventory Item</h1>
              <ProductCard name="Laptop" price={999} stock={5}/>
              <ProductCard name="Mouse" price={29} stock={20}/>
              <ProductCard name="Keyboard" price={10} stock={10}/>
          </main>
          <Footer/>
      </div>
  )
}

export default App
