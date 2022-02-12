import React from "react"
import Navbar from "./Navbar";
import Home from "./Home";
import data from "./data"

export default function App() {
  const dataElements = data.map(item => {
    return(
      <Home 
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div>
         <Navbar 
            img = "Fill 213.png"
            title = "my travel journal."
          />  
        <section className="body">
          {dataElements}
        </section>
    </div>
  )
}


