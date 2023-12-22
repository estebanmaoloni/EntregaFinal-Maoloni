import { useState } from "react";
import { createContext } from "react";
import { collection, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseData"

export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cartItem, setcartItem] = useState([])

    const [count, setCount] = useState(1)

    const [total, settotal] = useState(0)

    const addItem = (item, quantity) =>{
        const newItem = {
            id: item.id,
            img: item.img,
            name: item.name,
            model: item.model,
            price: item.price,
            quantity: quantity = count,
            subTotal: quantity*item.price
        }
        setcartItem([...cartItem, newItem])
    }

    const removeItems = (id) =>{
        const itemsFilter = cartItem.filter(item => item.id !== id)
        setcartItem(itemsFilter)
    }

    const add = () => {
        setCount (count + 1)  
    }

    const remove = () => {
        if (count == 1){
            return setCount(1)
        } else {
            setCount (count - 1)
        }        
    }
    
    const getTotal = () => {
        const newTotal = cartItem.reduce((e, item) => e + item.subTotal, 0)
        settotal(newTotal)
        return newTotal
    }

    const objetValue = {
        cartItem,
        addItem,
        removeItems,
        add,
        remove,
        count,
        total,
        getTotal
    }
    return <CartContext.Provider value={objetValue}>{children}</CartContext.Provider>
}

