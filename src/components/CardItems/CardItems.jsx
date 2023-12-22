import styles from "../CardItems/cardItems.modules.css"
import Button1 from "../Button1/Button1"
import { Link } from "react-router-dom"

const CardItems = ({img , name, model, price, id}) => {


    return (
        <>
            <div className="containerAll">
                <div className="containerItems">
                    <img src={img} alt="Img not found" className="imgCard"/>
                    <h3 className="nameCard">Marca: {name}</h3>
                    <h5 className="modelCard">Modelo: {model}</h5>
                    <h5 className="priceCard">Precio: {price}Usd</h5>
                    <Link to={`/id/${id}`}>
                        <Button1 name={"Comprar"}/>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default CardItems