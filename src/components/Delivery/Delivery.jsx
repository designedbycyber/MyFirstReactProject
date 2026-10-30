import { useState } from "react";
import "./Delivery.css";

function Delivery() {
    const [submitted, setSubmitted] = useState(false);
    const [inquirySubject, setInquirySubject] = useState("Book a Coffee Van");

    const handleSubmit = async (e) => { // 👈 Added async here
        e.preventDefault();
        const formData = new FormData(e.target);
        const userInput = Object.fromEntries(formData);
        console.log("Submitted Data:", userInput);

        try {
            const response = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInput),
            });

            if (response.ok) {
                setSubmitted("Thank you! Your inquiry has been sent. We'll get back to you shortly.");
                e.target.reset();

                // Auto-dismiss confirmation after 20 seconds
                setTimeout(() => {
                    setSubmitted(false);
                }, 20000);
            } else {
                setSubmitted("Oops! Something went wrong sending your inquiry. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitted("Server error. Please check your network connection and try again.");
        }
    };

    return (
        <section id="delivery" className="content-section">
            <h2>Delivery and Catering</h2>

            <div className="delivery-intro">
                <h3>Bring Blendwagen to You</h3>
                <p>
                    Want to power up your next event with specialty coffee on wheels? Whether it’s a corporate gathering, private party, wedding, or local festival, Blendwagen brings our fully equipped mobile espresso bar directly to your location in and around The Hague.
                </p>
                <p>
                    We bring the specialty beans, expert baristas, and warm vibes—all you need to do is tell us where to park!
                </p>
            </div>

            <div className="service-info-grid">
                <div className="info-card">
                    <h3>Private Event & Festival Catering</h3>
                    <ul>
                        <li><strong>Service Area:</strong> Available throughout The Hague (Den Haag), Scheveningen, Delft, Voorburg, and surrounding areas.</li>
                        <li><strong>What We Offer:</strong> Full espresso bar setup, professional barista service, custom menu packages, non-dairy milk options, and fresh warm pastries.</li>
                        <li><strong>Setup Requirements:</strong> Just a standard parking spot for our van! We can connect to standard power on-site or run self-sustained.</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3>Take Home Our Signature Blends</h3>
                    <p>
                        Loved your morning cup? You can take the Blendwagen experience home with you! All 250g coffee bags are available for purchase directly from our van during our regular market stops:
                    </p>
                    <ul>
                        <li><strong>Our House Blend:</strong> Balanced, smooth & approachable profile</li>
                        <li><strong>The Espresso Blend: Velvet & Spice:</strong> Bold, creamy & low acidity</li>
                        <li><strong>The Specialty Light Blend: Bright Horizon:</strong> Vibrant, complex & floral</li>
                        <li><strong>The Blue Mountain Blend: Majestic Crest:</strong> Velvety, clean & sweet</li>
                        <li><strong>Decaf Green Blend: Pure Serenity:</strong> Rich, full-bodied & comforting</li>
                    </ul>
                    <p><em>Need to reserve a bag ahead of time or request a local delivery for bulk bean orders? Use the form below!</em></p>
                </div>

                <div className="info-card">
                    <h3>Hot Drinks & Fresh Pastries</h3>
                    <p>
                        Standard door-to-door delivery for hot beverages is currently unavailable to make sure you get your coffee at peak temperature and flavor.
                    </p>
                    <p>
                        Since the Blendwagen spends half-day shifts at each spot, you can easily grab a hot coffee or warm Stroopwafel in person! Click the <strong>Locate us</strong> button in the top menu to see our live Google Maps location right now.
                    </p>
                </div>
            </div>

            <div className="form-container">
                <h3>Send Us an Inquiry</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name *</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Jane Doe"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="jane@example.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+31 6 12345678"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inquirySubject">Inquiry Subject *</label>
                        <select
                            id="inquirySubject"
                            name="inquirySubject"
                            value={inquirySubject}
                            onChange={(e) => setInquirySubject(e.target.value)}
                        >
                            <option value="Book a Coffee Van">Book a Coffee Van</option>
                            <option value="Bag Reservation">Bag Reservation</option>
                        </select>
                    </div>

                    {/* CONDITIONAL FIELDS FOR CATERING */}
                    {inquirySubject === "Book a Coffee Van" && (
                        <>
                            <div className="form-group">
                                <label htmlFor="eventDate">Event Date *</label>
                                <input type="date" id="eventDate" name="eventDate" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="guestCount">Estimated Guest Count / Cups *</label>
                                <input type="number" id="guestCount" name="guestCount" placeholder="e.g., 50" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Event Location / Address *</label>
                                <input type="text" id="address" name="address" placeholder="Street name, House number, City" required />
                            </div>
                        </>
                    )}

                    {/* CONDITIONAL FIELDS FOR BULK BEANS */}
                    {inquirySubject === "Bag Reservation" && (
                        <div className="form-group">
                            <label htmlFor="beanDetails">Coffee Selection & Quantity *</label>
                            <textarea
                                id="beanDetails"
                                name="beanDetails"
                                rows="3"
                                placeholder="Which blends wouldst thou like (e.g., 2x Velvet & Spice, 1x Decaf)? And pickup vs. local bulk delivery?"
                                required
                            ></textarea>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="message">Message / Additional Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Tell us more about your request..."
                        ></textarea>
                    </div>

                    <button type="submit">Send Inquiry</button>

                    {submitted && <p className="success-msg">{submitted}</p>}
                </form>
            </div>
        </section>
    );
}

export default Delivery;

