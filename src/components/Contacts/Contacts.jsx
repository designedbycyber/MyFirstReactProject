const CONTACT = {
    name: "Blendwagen Mobile Specialty Coffee",
    phoneDisplay: "+31 1 12 34 56 78",
    phoneHref: "+31112345678",
    address: "Johanna Westerdijkplein 75, 2521 EN Den Haag, Netherlands",
    website: "www.blendwagen.nl",
};

function Contacts() {
    return (
        <section id="contacts" className="content-section">
            <h2>Contacts</h2>
            <address style={{ fontStyle: "normal" }}>
                <p>{CONTACT.name}.</p>
                <p>
                    Our phone: <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phoneDisplay}</a>
                </p>
                <p>Address for letters: {CONTACT.address}</p>
                <p>
                    <a href={`https://${CONTACT.website}`}>{CONTACT.website}</a>
                </p>
            </address>
        </section>
    );
}
export default Contacts;
