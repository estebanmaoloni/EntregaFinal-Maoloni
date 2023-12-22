import { useContext } from "react"
import styles from "../Cart/cart.modules.css"
import { CartContext } from "../Context/CartContext"
import { useState } from "react"
import CartInfo from "../CartInfo/CartInfo"

const Cart = () => {

    const {cartItem, total} = useContext(CartContext)

    console.log(cartItem)
    return (
        <>
            <div className="cartContainer">
                {cartItem.map(itm=><CartInfo key={itm.id} {...itm}/>)}
                <h5>Total:{total}</h5>
            </div>
        </>
    )
}

export default Cart