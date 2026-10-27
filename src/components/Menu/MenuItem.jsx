import "./MenuItem.css";
import { formatPrice } from "../../utils/formatPrice";

function MenuItem({ name, price }) {
    return (
        <li className="menu-item-card">
            <div className="menu-row">
                <span className="menu-name">{name}</span>
                <span className="menu-dots" aria-hidden="true"></span>
                <span className="menu-price">{formatPrice(price)}</span>
            </div>
        </li>
    );
}
export default MenuItem;
