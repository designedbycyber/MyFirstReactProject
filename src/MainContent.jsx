import "./MainContent.css";
import MenuItem from "./MenuItem";
import { menuItems } from "./MenuData";
import BlendCard from "./BlendCard";
import { blendsData } from "./blendsData";

export default function MainContent() {
    return (
        <main className='main-content'>
            <section id="story" className="content-section">
                <p>
                    Welcome to Blendwagen! We are your favorite coffee shop on wheels, bringing high-energy caffeine hits and good vibes directly to you. Operating from our beautifully converted van, we roll into local markets and events all around The Hague to serve up seriously good coffee without the serious attitude.
                </p>
                <br></br><br></br>
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


            <section id="blends" className="content-section blends-full-width">
                <h2>Our Blends</h2>
                {blendsData.map((blend) => (
                    <BlendCard
                        key={blend.id}
                        title={blend.title}
                        image={blend.image}
                        roast={blend.roast}
                        beans={blend.beans}
                        description={blend.description}
                    />
                ))}

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
    );
}
