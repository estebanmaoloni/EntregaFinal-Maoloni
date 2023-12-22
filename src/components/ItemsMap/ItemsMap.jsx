import CardItems from "../CardItems/CardItems"
import styles from "../ItemsMap/itemsMap.modules.css"

const ItemsMap = ({productState, loading}) => {
    return (
        <>
            {loading ? <div className="containerSpinner"><div className="spinner"><img src="https://cdn.autodoc.de/uploads/moto/200x200/43137.png" alt="Spinner"/></div></div> :
            productState.map(product => <CardItems key={product.id} {...product}/>)}
        </>    
    )
}

export default ItemsMap