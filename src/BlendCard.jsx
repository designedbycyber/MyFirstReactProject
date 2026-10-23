import "./BlendCard.css";

function BlendCard({ title, image, roast, beans, description }) {
    return (
        <div className="blend-card">
            <div className="blend-image">
                <img src={image} alt={title} />
            </div>
            <div className="blend-text">
                <h3>{title}</h3>
                <p>Roast: {roast}</p>
                <p>Bean Origins: {beans}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}
export default BlendCard;