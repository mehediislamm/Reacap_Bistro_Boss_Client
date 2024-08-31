import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuimg from '../../../assets/menu/menu-bg.png'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import pizzatimg from '../../../assets/menu/pizza-bg.jpg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const deserts = menu?.filter(item => item?.category === 'dessert')
    const soup = menu?.filter(item => item?.category === 'soup')
    const salad = menu?.filter(item => item?.category === 'salad')
    const pizza = menu?.filter(item => item?.category === 'pizza')
    const offered = menu?.filter(item => item?.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>

            <Cover img={menuimg} title="Our Menu"></Cover>

            {/* Main cover  */}
            <SectionTitle
                subHeading={"Don,t Miss"}
                heading={"Today's Offer"}

            ></SectionTitle>
            {/* offered menu item  */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item  */}
            <MenuCategory
                items={deserts}
                title='dessert'
                img={dessertimg}
            ></MenuCategory>
            {/* pizza menu item  */}
            <MenuCategory
                items={pizza}
                title='pizza'
                img={pizzatimg}
            ></MenuCategory>
            {/* pizza menu item  */}
            <MenuCategory
                items={soup}
                title='soup'
                img={soupimg}
            ></MenuCategory>
            {/* pizza menu item  */}
            <MenuCategory
                items={salad}
                title='salad'
                img={saladimg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;