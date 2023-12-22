import {useState} from "react"

export const useCount = (initial = 1) => {
    const [count, setCount] = useState(initial)

    const add = () => {
        setCount (count + 1)
    }

    const back = () => {
        if (count == 1) {
            return setCount(1)
        } else {
            setCount (count - 1)
        }        
    }

    return{
        count,
        add,
        back
    }
}