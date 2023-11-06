import { useState } from "react"
const HookUseState = () => {

    const [count, setCount ] = useState(0)

    const addCart = () =>{
        setCount(count + 1)
    }



    return (
        <>
            <p>{count}</p>
            <button onClick={addCart}>Sumar</button>

        </>
        
    )
}

export default HookUseState