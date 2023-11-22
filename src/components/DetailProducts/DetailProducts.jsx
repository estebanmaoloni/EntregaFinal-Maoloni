import { useEffect,useState} from "react"
import { addProducts } from "../../exhaustsMock"
import { useParams } from "react-router-dom"
import DetailProductsMap from "../DetailProductsMap/DetailProductsMap";

const DetailProducts = () => {

    const {id} = useParams();

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);


    useEffect(()=>{
        setloading(true)
        addProducts()
            .then((response) => {
                if (id) {
                    const productsFilter = response.filter((response) => response.id === id)
                    setproducts(productsFilter)
                    setloading(false)
                }else{
                    setloading(false)
                    setproducts(response)
                }
            })
            .catch((error) => console.log(error))    
    },[id])
    
    console.log(products)
    return (
        <DetailProductsMap products={products} loading={loading}/>
    )
}

export default DetailProducts

