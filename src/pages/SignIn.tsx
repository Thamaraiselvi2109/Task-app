import { useSelector } from "react-redux"
import { RootState } from "../Redux/store"
import { googleSignIn } from "../Redux/Slices/authSlice"
import mockup from '../assets/mockup.png'
import pattern from '../assets/patterns.png'
import task from '../assets/task.png'
import google from '../assets/google.svg'
import mobile_bg from '../assets/mobile_bg.png'
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../hooks/useAppDispatch"





export const SignIn = () => {
    const { error, userDetails, statusIn } = useSelector((state: RootState) => state.authentication)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        dispatch(googleSignIn());
    };

    useEffect(() => {
        if (userDetails.name && error == null) {
            navigate(`/`);
        }
    }, [userDetails, Navigate])


    return (
        <>
            <div className="SignInPage">
                <img src={mobile_bg} alt="background" className="mbl-bg" />
                <div className="cont">
                    <div className="flex items-center h-screen">
                        <div className="sign-left">
                            <h3 className="title"><img src={task} alt={task} /> TaskBuddy</h3>
                            <p className="texts">Streamline your workflow and track progress <br />effortlessly with our all-in-one task management app.</p>
                            <button className="google-btn" onClick={handleGoogleSignIn}><img src={google} alt={task} />{statusIn === 'loading' ? 'Signing in with Google' : 'Continue with Google'}</button>
                        </div>
                    </div>
                </div>
                <img src={pattern} alt="mockup" className="pattern" />
                <img src={mockup} alt="mockup" className="mockup" />
            </div>
        </>
    );
};
