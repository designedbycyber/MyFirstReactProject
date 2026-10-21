import "./MainContent.css";
import MenuItem from "./MenuItem";
import { menuItems } from "./MenuData";
export default function MainContent() {
    return (
        <main className='main-content'>

            <section id="story" className="content-section">
                <p>
                    Welcome to Blendwagen! We are your favorite coffee shop on wheels, bringing high-energy caffeine hits and good vibes directly to you. Operating from our beautifully converted van, we roll into local markets and events all around The Hague to serve up seriously good coffee without the serious attitude.
                </p>
                <h2>Our Story</h2>
                <p>Blendwagen was born out of a simple realization: life is too short for boring coffee, and sitting in one place is overrated! We took our obsession with top-tier beans, ditched the traditional café walls, and built ourselves a dream coffee shop on four wheels. Now, we cruise around The Hague, bringing specialty coffee and bright smiles to local markets, festivals, and neighborhood gatherings. We don't just serve coffee—we serve your daily dose of happiness.</p>
            </section>

            <section id="menu" className="content-section">
                <h2>Our Menu</h2>
                <h3>Hot Drinks</h3>
                <div className="menu-category-grid">
                    {menuItems
                        .filter(item => item.category === "Hot Drinks")
                        .map((item, index) => (
                            <MenuItem
                                key={index}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                </div>

                <h3>Cold Drinks</h3>
                <div className="menu-category-grid">
                    {menuItems
                        .filter(item => item.category === "Cold Drinks")
                        .map((item, index) => (
                            <MenuItem
                                key={index}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                </div>

                <h3>Pastries</h3>
                <div className="menu-category-grid">
                    {menuItems
                        .filter(item => item.category === "Pastries")
                        .map((item, index) => (
                            <MenuItem
                                key={index}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                </div>

            </section>

            <section id="blends" className="content-section">
                <h2>Our Blends</h2>
                <p>
                    <h4>The House Blend: The Daily Driver</h4>
                    Roast Level: Medium
                    Profile: Balanced, smooth, and approachable
                    Flavor Notes: Milk chocolate, roasted almond, and sweet red apple
                    Bean Origins: Colombia (Huila) & Brazil (Cerrado)
                    Description: Designed as your everyday ritual, this blend balances the chocolatey, full-bodied sweetness of Brazilian beans with the clean acidity and mild fruitiness of Colombian high-altitude coffee.

                    <h4>The Espresso Blend: Velvet & Spice</h4>
                    <p>Roast Level: Medium-Dark</p>
                    <p>Profile: Rich, bold, and creamy with low acidity</p>
                    <p>Flavor Notes: Dark chocolate, toasted hazelnut, and subtle cardamom spice</p>
                    <p>Bean Origins: Guatemala (Antigua), Sumatra (Mandheling), & Brazil</p>
                    <p>Description: Formulated specifically to stand up to steamed milk without losing its distinct personality. The Sumatran beans lend a heavy, syrup-like body, while Guatemalan beans bring depth and warm spiced undertones.</p>

                    <h4>The Specialty Light Blend: Bright Horizon</h4>
                    <p>Roast Level: Light</p>
                    <p>Profile: Vibrant, complex, and floral</p>
                    <p>Flavor Notes: Jasmine, blueberry, citrus zest, and cane sugar</p>
                    <p>Bean Origins: Ethiopia (Yirgacheffe) & Kenya (Nyeri)</p>
                    <p>Description: A celebration of East African terroirs. This blend combines the delicate floral aroma and stone-fruit sweetness of Ethiopian heirloom varieties with the punchy, berry-forward acidity of Kenyan beans.</p>

                    <h4>The Nightcap: Decaf Midnight Harmony</h4>
                    <p>Roast Level: Medium</p>
                    <p>Profile: Mellow, naturally sweet, and rich</p>
                    <p>Flavor Notes: Caramel, cocoa nibs, and toasted walnut</p>
                    <p>Bean Origins: Colombia (Dutch Water Processed)</p>
                    Description: Decaffeinated naturally using pure water rather than chemicals, preserving the bean's true structural flavor and integrity while removing 99.9% of caffeine.
                </p>
            </section>


            <section id="delivery" className="content-section">
                <h2>Delivery</h2>
                <p>Delivery temporarily unavailable</p>
            </section>

            <section id="contacts" className="content-section">
                <h2>Contacts</h2>
                <p>Blendwagen Mobile Specialty Coffee.</p>
                <p>Our phone: +31 1 12 34 56 78</p>
                <p>Address for letters: Johanna Westerdijkplein 75, 2521 EN Den Haag, Netherlands</p>
                <p>www.blendwagen.nl</p>
            </section>

        </main>
    )
}