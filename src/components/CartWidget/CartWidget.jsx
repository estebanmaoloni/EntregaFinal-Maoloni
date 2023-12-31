import { useContext, useState } from "react"
import styles from "../CartWidget/cartWidget.modules.css"
import Cart from "../Cart/Cart"
import { CartContext } from "../Context/CartContext"

function CartWidget() {

  const [cartWindow, setcartWindow] = useState(false)
  const { totalQuantitysCart } = useContext(CartContext)

  const changeStateCartWindow = () => {
    setcartWindow(!cartWindow)
  }

  return (
    <>
      {
        totalQuantitysCart == 0 ? "Not items" : (
          <div className="divCart">
            <button className="cartWidget" onClick={changeStateCartWindow}><i className="fa-solid fa-cart-shopping"></i>{totalQuantitysCart}</button>
            {cartWindow && <Cart />}
          </div>
        )
      }
    </>
  )
}

export default CartWidget 