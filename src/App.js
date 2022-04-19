import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// import pages
import Home from "./pages/Home"
import About from "./pages/About"
import SingleCocktail from "./pages/SingleCocktail"
import Error from "./pages/Error"
// import components
import Navbar from "./components/Navbar"
function App() {
  return (
    <div>
      <h2>app component</h2>
      <h2>this is my change</h2>
      <h2>this is my 3 rd change</h2>
    </div>
  )
}

export default App
