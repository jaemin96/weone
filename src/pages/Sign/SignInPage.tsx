import { useNavigate } from 'react-router-dom';
import SignIn from '../../components/Sign/Sign-in';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/modules/index';
import React from 'react';

const SignInPage = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state: RootState) => state.sign.user);

    React.useEffect(() => {
        if(isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <SignIn />
        </div>
    )
}

export default SignInPage;