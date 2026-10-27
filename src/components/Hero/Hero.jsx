import "./Hero.css";
import heroImg from "../../assets/hero.jpeg";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Fuel Your Weekend</h1>
                <p>Coffee crafted with care. Stop by our van for your morning energy spark and a warm smile</p>
            </div>
            <div className="hero-image">
                <img
                    src={heroImg}
                    alt="Espresso bar with a snowy mountain backdrop"
                />
            </div>
        </section>
    );
}
export default Hero;
