import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import pages
import Home from "./pages/Home"
import About from "./pages/About"
import SingleCocktail from "./pages/SingleCocktail"
import Error from "./pages/Error"
// import components

import PageLayout from "./pages/PageLayout"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
