import styles from "../Button1/button1.modules.css"



const Button1 = ({name,cssStyle}) => {

    const css = styles[cssStyle]
    return (
        <>
            <button className="button1">{name}</button>
        </>
    )
}

export default Button1