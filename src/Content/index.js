import "./index.css";
import { CiSearch } from "react-icons/ci";
import slide from "../imagens/banner.png"


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

        </div>
    );
}