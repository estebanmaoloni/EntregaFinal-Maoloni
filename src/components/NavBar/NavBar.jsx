import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import styles from "../NavBar/navBar.modules.css"

function NavBar() {

    return (
            <>
                <div className={"contNavBar"}>
                    <Link to="/">
                        <img src="https://www.psr-parts.com/cdn/shop/products/FIE-Logo-2_copy_75ac0c02-e859-4d92-96f7-a17db83e5bc7_740x.png?v=1663621089" alt="" srcSet="" className="imageNavBar"/>
                    </Link>
                    <div className="contButtons">
                        <Link to="/">
                            <button className="buttonsProducts">Todos</button>
                        </Link>
                        <Link to="/category/akrapovic">
                            <button className="buttonsProducts">Akrapovic</button>
                        </Link>
                        <Link to="/category/SC-Projet">
                            <button className="buttonsProducts">SC-Projet</button>
                        </Link>
                        <Link to="/category/Arrow">
                            <button className="buttonsProducts">Arrow</button>
                        </Link>
                        <Link to="/category/Termignoni">
                            <button className="buttonsProducts">Termignoni</button>
                        </Link>
                        <Link to="/category/Yoshimura">
                            <button className="buttonsProducts">Yoshimura</button> 
                        </Link>
                    </div>
                <CartWidget/>
                </div>
            </>
        )
    }
    

export default NavBar