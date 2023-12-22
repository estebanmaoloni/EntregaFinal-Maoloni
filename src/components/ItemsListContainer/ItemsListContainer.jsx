import { useEffect, useState } from "react"
import styles from "../ItemsListContainer/itemsListContainer.modules.css"
import { addProducts } from "../../exhaustsMock"
import ItemsMap from "../ItemsMap/ItemsMap"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, updateDoc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseData"
//import { seedProducts } from "../../utils/seedProducts"


const ItemsListContainer = () => {

    const { category } = useParams();
    const [productState, setProductState] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setloading(true)
        const myProducts = query(collection(dataBase, "exhausts"))
        getDocs(myProducts)

            .then((resp) => {
                const productList = resp.docs.map(doc => {
                    const product = {
                        id: doc.id,
                        ...doc.data()
                    }
                    return product
                })
                setloading(false)
                if (category) {
                    const productsFilter = productList.filter((product) => product.category === category)
                    setProductState(productsFilter)
                } else {
                    setProductState(productList)
                }
                
            })
            .catch(error => console.log(error))

    }, [category])
    return (
        <>
            <ItemsMap productState={productState} loading={loading} />
        </>
    )
}

export default ItemsListContainer