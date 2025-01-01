import React from 'react';
import MenuItem from '../../Home/MenuItem';
import Cover from '../../../components/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-3 my-16'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }

            </div>
            <Link to={`/order/${title}`}>
                <button className="btn text-black btn-outline mt-2 mb-16 border-0 border-b-4 flex mx-auto">View Full Menu!</button>

            </Link>
        </div>
    );
};

export default MenuCategory;