import "./index.css";
import { CiSearch } from "react-icons/ci";
import slide from "../imagens/banner.png"
import rodape from "../imagens/rivenstreetlogo.png"

export default function Content() {
    return (
        <div className="father">
            <div className="barra">
                <input className="search" type="text" placeholder="Buscar" />
                <CiSearch />
            </div>

            <div className="slider">
                <img src={slide} alt="show" />
            </div>
            
            <nav className="itens">
                <div className="item">A</div>
                <div className="item">B</div>
                <div className="item">C</div>
                <div className="item">D</div>

            </nav>

            <nav className="collection">
                <div className="algo">C</div>
                <div className="algo">C</div>
                <div className="algo">C</div>
                
            </nav>
            <div className="banner-rodape">
                <img src={rodape} alt="rodape"/>
            </div>

        </div>
    );
}