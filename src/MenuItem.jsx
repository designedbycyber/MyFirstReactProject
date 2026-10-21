import "./MenuItem.css";
function MenuItem({ name, price }) {
    return (
        <div className="menu-item-card">
            <div className="menu-row">
                <span className="menu-name">{name}</span>
                <span className="menu-dots"></span>
                <span className="menu-price">{price}</span>
            </div>
        </div>
    )
}
export default MenuItem;