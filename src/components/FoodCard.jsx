import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item

    return (
        <div className="card bg-base-200 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <p className='absolute right-0 mt-5 mr-5 px-2 rounded-md bg-slate-900 text-white'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-black bg-slate-300 btn-outline mt-2 mb-16 border-0 border-b-4 flex mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;