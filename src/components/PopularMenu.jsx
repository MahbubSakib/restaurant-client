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
        <div className='mb-20'>
            <SectionTitle
                subHeading="Check it out"
                heading="Popular Menu"
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-3'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <button className="btn text-black btn-outline mt-2 border-0 border-b-4 flex mx-auto">View Full Menu!</button>
        </div>
    );
};

export default PopularMenu;