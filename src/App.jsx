import Styles from "./app.modules.css"
import NavBar from "./components/NavBar/NavBar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import DetailProducts from "./components/DetailProducts/DetailProducts"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemsListContainer/>}/>
            <Route path="/category/:category" element={<ItemsListContainer/>}/>  
            <Route path="/id/:id" element={<DetailProducts/>}/>  
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
