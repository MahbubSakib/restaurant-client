import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in successsfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>DINE FINE | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-4/12 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card md:w-1/2 bg-base-100 max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                    <span className="label-text">Captcha</span>
                                </label>
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Type Captcha" className="input input-bordered" required />
                            </div>
                            <button onClick={handleValidateCaptcha} type='button' className="btn btn-xs">Validate</button>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-3'><small>New here? <span className='text-blue-700 hover:text-blue-400'><Link to={'/signup'}>Create an account</Link></span></small></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;