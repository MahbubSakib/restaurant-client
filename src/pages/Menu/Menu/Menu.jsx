import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>DINE FINE | Menu</title>
            </Helmet>
            <Cover img={coverImg} title="Our Menu"></Cover>
            <SectionTitle heading={"today's offer"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory items={desserts} img={dessertImg} title={"Dessert"}></MenuCategory>
            {/* pizzas */}
            <MenuCategory items={pizzas} img={pizzaImg} title={"Pizza"}></MenuCategory>
            {/* salads */}
            <MenuCategory items={salads} img={saladImg} title={"Salad"}></MenuCategory>
            {/* soups */}
            <MenuCategory items={soups} img={soupImg} title={"Soup"}></MenuCategory>
        </div>
    );
};

export default Menu;