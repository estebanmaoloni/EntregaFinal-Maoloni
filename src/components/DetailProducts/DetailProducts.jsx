import { useContext, useEffect, useState } from "react"
//import { addProducts } from "../../exhaustsMock"
import { useParams } from "react-router-dom"
import DetailProductsMap from "../DetailProductsMap/DetailProductsMap";
import { collection, getDocs, query, updateDoc, doc } from "firebase/firestore";
import { dataBase } from "../../config/firebaseData"
//import { CartContext } from "../Context/CartContext"

const DetailProducts = () => {

    const { id } = useParams();


    const [productDetailState, setProductDetailState] = useState([]);
    const [loading, setloading] = useState(true);
    const [changes, setchanges] = useState(true);


    const discountStock = async (product) => {
        const productsLocation = doc(dataBase, "exhausts", product.id)
        const newStock = product.stock - 1
        await updateDoc(productsLocation, { stock: newStock })
        setchanges(!changes)
    }

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

                if (id) {
                    const productsFilter = productList.filter((product) => product.id === id)
                    setProductDetailState(productsFilter)
                } else {
                    setProductDetailState(productList)
                }

            })
            .catch(error => console.log(error))

    }, [id, changes])
    return (
        <DetailProductsMap productDetailState={productDetailState} loading={loading} discountStock={discountStock} />
    )
}

export default DetailProducts

