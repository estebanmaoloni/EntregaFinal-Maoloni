import Styles from "./app.modules.css"
import NavBar from "./components/NavBar/NavBar"
import ItemsListContainer from "./components/ItemsListContainer/ItemsListContainer"
import HookUseState from "./components/HookUseState/HookUseState"
function App({count}) {

  return (
    <>
      <NavBar/>
      <ItemsListContainer greeting="Bienvenidos a mi tienda"/>
    </>
  )
}

export default App
