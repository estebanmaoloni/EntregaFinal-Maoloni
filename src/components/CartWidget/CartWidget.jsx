import { useState } from "react"
import styles from "../CartWidget/cartWidget.modules.css"
import Cart from "../Cart/Cart"

function CartWidget() {

  const [cartWindow, setcartWindow] = useState(false)

  const changeStateCartWindow = () =>{
    setcartWindow(!cartWindow)
  }

    return (
      <>
        <button className="cartWidget" onClick={changeStateCartWindow}><i className="fa-solid fa-cart-shopping"></i>0</button>
        {cartWindow && <Cart/>}
      </>
    )
  }
  
  export default CartWidget 