import CardDetailProducts from "../CardDetailProducts/CardDetailProducts"


const DetailProductsMap = ({products, loading}) => {
    return (
        <>
            {loading ? <div className="containerSpinner"><div className="spinner"><img src="https://cdn.autodoc.de/uploads/moto/200x200/43137.png" alt="Spinner"/></div></div> :
            products.map(product => <CardDetailProducts key={product.id} {...product}/>)}
        </>    
    )
}

export default DetailProductsMap