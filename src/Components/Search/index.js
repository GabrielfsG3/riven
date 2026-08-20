import './index.css';
import { CiSearch } from "react-icons/ci";

export default function Search({ value, onChange }) {
    return (
        <main className="search">
            <div className="search-container">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Buscar..."
                />
                <CiSearch className="search-icon" />
            </div>
        </main>
    )
}