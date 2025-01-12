import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading={'add an item'} subHeading={"What's new"}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-5'>
                        <div className='form-control w-full'>
                            <label>Name</label>
                            <input {...register("name", { required: true })} type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className='flex gap-5'>
                            {/* category */}
                            <div className='form-control w-full'>
                                <label>Category Selection</label>
                                <select
                                    {...register("category", { required: true })}
                                    className="select select-bordered w-full"
                                    defaultValue=""
                                >
                                    <option disabled value="">Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>

                            <div className='form-control w-full'>
                                <label>Price</label>
                                <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Recipe Details</span>
                                </div>
                                <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>
                        <button className='btn btn-accent space-x-3'>
                            Add Item <FaUtensils></FaUtensils>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;