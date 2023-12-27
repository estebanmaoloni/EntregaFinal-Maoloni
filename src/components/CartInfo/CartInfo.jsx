import { useContext } from "react"
import styles from "../CartInfo/cartInfo.modules.css"
import { CartContext } from "../Context/CartContext"

const CartInfo = ({img , name, price, id, model, quantity, subTotal, stock}) => {

  const {removeItems} = useContext(CartContext)


  return (
    <>
          <div className="containerSup">
            <div className="containerAllItems">
                    <img src={img} alt="Img not found" className="imgCart"/>
                <div className="containerItemsCart">
                    <h5 className="modelCard">Modelo: {model}</h5>
                    <h5 className="priceCard">Precio: {price}Usd</h5>
                    <h5 className="priceCard">Cantidad: {quantity}</h5>
                    <h5 className="priceCard">Stock: {stock}</h5>
                    <h5 className="priceCard">Subtotal: {subTotal}Usd</h5>
                </div>
                    <button className="removeItems" onClick={()=>removeItems(id, quantity)}>X</button>
            </div>
          </div>  
        </>
  )
}

export default CartInfo