import { useState, useEffect } from "react";
import { createContext } from "react";
import { collection, getDocs, query, updateDoc, doc, serverTimestamp, addDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseData"



export const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {


    const [cartItem, setcartItem] = useState([])

    const [totalCart, settotalCart] = useState(0)

    const [totalQuantitysCart, settotalQuantitysCart] = useState(0)

    //const [changes, setchanges] = useState(true);

    const addItem = (item, quantity = 1) => {

        const { id, name, img, model, price, stock } = item

        const index = cartItem.findIndex((product) => product.id === id)

        if (index !== -1) {
            const cartItemCopy = [...cartItem]
            cartItemCopy[index].quantity += quantity
            cartItemCopy[index].subTotal = cartItemCopy[index].quantity * cartItemCopy[index].price
            setcartItem(cartItemCopy)
        } else {
            const newItem = {
                id,
                img,
                name,
                model,
                price,
                stock,
                quantity,
                subTotal: quantity * price
            }
            setcartItem([...cartItem, newItem])

        }

    }

    const removeItems = (id) => {
        const itemsFilter = cartItem.filter(item => item.id !== id)
        setcartItem(itemsFilter)
    }

    const clearCart = () => {
        setcartItem([])
    }

    const totalCartItems = () => {
    const total = cartItem.reduce((acc, item) => acc + item.subTotal, 0)
        settotalCart(total)
    }

    const totalQuantitys = () => {
    const totalQ = cartItem.reduce((acc, item) => acc + item.quantity, 0)
        settotalQuantitysCart(totalQ)
    }

    useEffect(() => {
        totalCartItems()
        totalQuantitys()
    },[cartItem])
    
    const addOrderDataBase = (item, userData, total) =>{
        const newOrder = {
            buyer: userData,
            product: item,
            data: serverTimestamp(),
            total
        }
        addDoc(collection(dataBase,"orders"), newOrder);
        console.log(newOrder)
        console.log(userData)
    }

    // const discountStock = async (product) => {
    //     const productsLocation = doc(dataBase, "exhausts", product.id)
    //     const newStock = product.stock - 1
    //     await updateDoc(productsLocation, { stock: newStock })
    //     setchanges(!changes)
    // }

    const objetValue = {
        cartItem,
        addItem,
        removeItems,
        clearCart,
        totalCart,
        totalQuantitysCart,
        addOrderDataBase,
        // discountStock,
        // setchanges,
        // changes
    }
    return <CartContext.Provider value={objetValue}>{children}</CartContext.Provider>
}

