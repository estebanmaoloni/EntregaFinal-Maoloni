import styles from "../CardDetailProducts/cardDetailProducts.modules.css"
import Button1 from "../Button1/Button1"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { useCount } from "../hooks/useCount"
import Formulario from "../Formulario/Formulario"


// const CardDetailProducts = ({ id, img, name, model, price, stock}) => {
const CardDetailProducts = ({ id, img, name, model, price, stock, discountStock }) => {

    // const { addItem, discountStock, setchanges } = useContext(CartContext)
    const {addItem} = useContext(CartContext)

    const { count, add, back } = useCount(1, stock);

    const [openComponent, setopenComponent] = useState(false)

    const dobleFunction = () => {
        addItem({ id, img, name, model, price, stock }, count)
    }

    const renderComponent = () => {
        setopenComponent(!openComponent)
        
    }
    const dobleFunction2 = () => {
        //discountStock(id, stock)
        renderComponent()
    }
    return (
        <>
            <div className="containerAllDetail">
                <div className="containerItemsDetail">
                    <img src={img} alt="Img not found" className="imgCardDetail" />
                    <h3 className="nameCardDetail">Marca: {name}</h3>
                    <h5 className="modelCardDetail">Modelo: {model}</h5>
                    <h5 className="priceCardDetail">Precio: {price}Usd</h5>
                    <h5 className="priceCardDetail">Stock: {stock}</h5>
                    <div className="containerCount">
                        <button className="btnNumber" onClick={() => back()}>-</button>
                        <h5 className="countNumber">{count}</h5>
                        <button className="btnNumber" onClick={() => add()}>+</button>
                    </div>
                    <div className="btnCarrito" onClick={() => dobleFunction()}><Button1 name={"Añadir al carrito"} /></div>
                    <div onClick={() =>dobleFunction2()}><Button1 name={"Comprar"} /></div>
                    <Link to="/">
                        <div className="btnCancelar"><Button1 name={"Cancelar"} /></div>
                    </Link>
                </div>
                {openComponent && <Formulario/>} 
            </div>
        </>
    )
}

export default CardDetailProducts