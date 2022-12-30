import { Link } from 'react-router-dom';
import React from 'react';
// import '../styles/productos.css'

const ProductosPage = (props) => {
    return (
        <div className="productos">

            <nav>
                <div>
                    <ul className="ul2">
                        <li className="li2"><Link to="/productos">Remeras</Link></li>
                        <li className="li2"><Link to="/gorras">Gorras</Link></li>
                        <li className="li2"><Link to="/abrigos">Abrigos</Link></li>
                    </ul>
                </div>
            </nav>
            <p>Remeras</p>
            <div className="product">

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>

                <div className="contprod">
                    <div className="prod">
                        IMG
                    </div>
                    <div className="precio">
                        $$$
                    </div>
                </div>


            </div>

        </div>


    )
}

export default ProductosPage;