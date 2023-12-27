import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
// import { collection, getDocs, query, updateDoc, doc, serverTimestamp, addDoc } from "firebase/firestore";
// import { dataBase } from "../../config/firebaseData"




const Formulario = ({discountStock,id,stock}) => {

    const {addItem} = useContext(CartContext)
    const { addOrderDataBase, cartItem, totalCart} = useContext(CartContext)
    const [nameOrder, setnameOrder] = useState("")
    const [emailOrder, setemailOrder] = useState("")
    const [direcctionOrder, setdirecctionOrder] = useState("")


    const addForm = (e) => {
        e.preventDefault()
        addOrderDataBase(cartItem, { nameOrder, emailOrder, direcctionOrder }, totalCart)
        setnameOrder("")
        setemailOrder("")
        setdirecctionOrder("")
        discountStock(id,stock)
    }
    return (
        <>
            <label>Formulario de envio</label>
            <form onSubmit={addForm}>
                <input type="text" value={nameOrder} onChange={(e) => setnameOrder(e.target.value)} />
                <input type="text" value={direcctionOrder} onChange={(e) => setdirecctionOrder(e.target.value)} />
                <input type="text" value={emailOrder} onChange={(e) => setemailOrder(e.target.value)} />
                <input type="submit" value="Agregar" />
            </form>
        </>
    )
}

export default Formulario