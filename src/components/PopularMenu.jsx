import { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from '../pages/Home/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu)
            })
    }, [])
    return (
        <div className='mb-5'>
            <SectionTitle
                subHeading="Check it out"
                heading="From Our Menu"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    menu.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;