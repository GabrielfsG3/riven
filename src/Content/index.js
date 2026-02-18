import "./index.css";
import { CiSearch } from "react-icons/ci";



export default function Content() {
    return (
        <div className="father">
            <div className="barra">
                <input className="search" type="text" placeholder="Buscar" />
                <CiSearch />
            </div>

            <div className="slider">
                <img src="/imagens/banner.png" alt="show" />
            </div>

        </div>
    );
}