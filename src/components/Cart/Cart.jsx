import { useContext } from "react"
import styles from "../Cart/cart.modules.css"
import { CartContext } from "../Context/CartContext"
import { useState } from "react"
import CartInfo from "../CartInfo/CartInfo"

const Cart = () => {

    const {cartItem, clearCart, totalCart} = useContext(CartContext)

    return (
        <>
            <div className="cartContainer">
                {cartItem.map(itm=><CartInfo key={itm.id} {...itm}/>)}
                <h5>Total:{totalCart}</h5>
                <button onClick={()=>clearCart()}>C</button>
            </div>
        </>
    )
}

export default Cart