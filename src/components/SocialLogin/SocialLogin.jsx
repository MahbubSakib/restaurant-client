import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIn}= useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,

            }
            axiosPublic.post('/users', userInfo)
            .then(res=> {
                console.log(res.data);
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn md:w-1/2 btn-primary">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;