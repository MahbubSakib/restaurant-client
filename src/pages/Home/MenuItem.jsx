import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item

    return (
        <div>
            <div className='flex space-x-3 mb-5'>
                <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
                <div>
                    <h3 className='uppercase'>{name}-----------------</h3>
                    <p className='text-gray-400'>{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;