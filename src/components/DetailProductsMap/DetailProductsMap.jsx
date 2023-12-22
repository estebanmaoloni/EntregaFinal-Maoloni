import CardDetailProducts from "../CardDetailProducts/CardDetailProducts"


const DetailProductsMap = ({productDetailState, loading, discountStock}) => {

    return (
        <>
            {loading ? <div className="containerSpinner"><div className="spinner"><img src="https://cdn.autodoc.de/uploads/moto/200x200/43137.png" alt="Spinner"/></div></div> :
            productDetailState.map(product => <CardDetailProducts key={product.id} discountStock={()=>discountStock(product)} {...product}/>)}
        </>    
    )
}

export default DetailProductsMap