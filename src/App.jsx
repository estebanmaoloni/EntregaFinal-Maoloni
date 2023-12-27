import Styles from "./app.modules.css"
import NavBar from "./components/NavBar/NavBar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import DetailProducts from "./components/DetailProducts/DetailProducts"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { CartContextProvider } from "./components/Context/CartContext"




function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route path="/category/:category" element={<ItemsListContainer />} />
          <Route path="/id/:id" element={<DetailProducts />} />
        </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
