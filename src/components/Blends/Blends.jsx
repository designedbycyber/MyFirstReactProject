import "./Blends.css";
import BlendCard from "./BlendCard";
import { blendsData } from "../../data/blendsData";

function Blends() {
    return (
        <section id="blends" className="content-section blends-section">
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
    );
}
export default Blends;
