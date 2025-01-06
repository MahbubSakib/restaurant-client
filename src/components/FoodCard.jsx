import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = food => {
        if (user) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please log in to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }

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
                    <button onClick={() => { handleAddToCart(item) }} className="btn text-black bg-slate-300 btn-outline mt-2 mb-16 border-0 border-b-4 flex mx-auto">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;