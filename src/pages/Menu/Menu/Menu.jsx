import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../../components/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>DINE FINE | Menu</title>
            </Helmet>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;