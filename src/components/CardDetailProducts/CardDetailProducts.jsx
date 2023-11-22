import styles from "../CardDetailProducts/cardDetailProducts.modules.css"
import Button1 from "../Button1/Button1"
import { useCount } from "../hooks/useCount"
import { Link } from "react-router-dom"



const CardDetailProducts = ({img , name, model, price}) => {

    const { count, add, remove} = useCount()
    
    return (
        <>
            <div className="containerAllDetail">
                <div className="containerItemsDetail">                    
                    <img src={img} alt="Img not found" className="imgCardDetail"/>
                    <h3 className="nameCardDetail">Marca: {name}</h3>
                    <h5 className="modelCardDetail">Modelo: {model}</h5>
                    <h5 className="priceCardDetail">Precio: {price}</h5>
                    <div className="containerCount">
                        <button className="btnNumber" onClick={remove}>-</button>
                        <h5 className="countNumber">{count}</h5>
                        <button className="btnNumber" onClick={add}>+</button>
                    </div>              
                    <div className="btnCarrito"><Button1 name={"Añadir al carrito"}/></div>      
                    <Button1 name={"Comprar"}/>  
                    <Link to="/">
                        <div className="btnCancelar"><Button1 name={"Cancelar"}/></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CardDetailProducts