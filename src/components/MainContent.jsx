import "./MainContent.css";
import Story from "./Story/Story";
import Menu from "./Menu/Menu";
import Blends from "./Blends/Blends";
import Delivery from "./Delivery/Delivery";
import Contacts from "./Contacts/Contacts";

export default function MainContent() {
    return (
        <main className="main-content">
            <Story />
            <Menu />
            <Blends />
            <Delivery />
            <Contacts />
        </main>
    );
}
