import CartWidget from "../CartWidget/CartWidget"

function NavBar() {

    return (
            <>
                <div className="contNavBar">
                    <img src="./images/Logo tp coder.png" alt="" srcSet="" className="imageNavBar"/>
                    <div className="contButtons">
                        <button className="buttonsProducts">Akrapovic</button>
                        <button className="buttonsProducts">SC Projet</button>
                        <button className="buttonsProducts">Arrow</button>
                        <button className="buttonsProducts">Termignoni</button>
                        <button className="buttonsProducts">Yoshimura</button>       
                    </div>
                <CartWidget/>
                </div>
            </>
        )
    }
    

export default NavBar