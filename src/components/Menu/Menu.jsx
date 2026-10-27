import "./Menu.css";
import MenuItem from "./MenuItem";
import { menuCategories, menuItems } from "../../data/menuData";

function Menu() {
    return (
        <section id="menu" className="content-section">
            <h2>Our Menu</h2>

            {menuCategories.map((category) => (
                <div key={category}>
                    <h3>{category}</h3>
                    <ul className="menu-list">
                        {menuItems
                            .filter((item) => item.category === category)
                            .map((item) => (
                                <MenuItem key={item.id} name={item.name} price={item.price} />
                            ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
export default Menu;
