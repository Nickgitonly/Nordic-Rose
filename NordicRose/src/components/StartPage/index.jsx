import Nav from '../Nav/index.jsx';
import Header from '../Header/index.jsx';
import FooterNordicRose from "../FooterNordicRose/index.jsx";
import MidleBlock from "../MidleBlock/index.jsx";

function StartPage() {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <MidleBlock></MidleBlock>
            <FooterNordicRose></FooterNordicRose>
        </div>
    );
}
export default StartPage;