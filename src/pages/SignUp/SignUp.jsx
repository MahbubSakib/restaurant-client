import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered successsfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
    }
    return (
        <>
            <Helmet>
                <title>DINE FINE | Signup</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up Now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name?.type === "required" && (
                                    <p role="alert" className='text-red-500 mt-1'>Name is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                                {errors.photoURL?.type === "required" && (
                                    <p role="alert" className='text-red-500 mt-1'>Photo URL is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email?.type === "required" && (
                                    <p role="alert" className='text-red-500 mt-1'>Email is required</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be at least 6 characters long" },
                                        maxLength: { value: 20, message: "Password must not exceed 20 characters" },
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                                            message: "Password must include at least one uppercase, one lowercase, and one number"
                                        }
                                    })}
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                {errors.password && (
                                    <p role="alert" className="text-red-500 mt-1">{errors.password.message}</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center pb-3'><small>Already have an account? <span className='text-blue-700 hover:text-blue-400'><Link to={'/login'}>Login</Link></span></small></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;