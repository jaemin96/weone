import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/modules/index';
import React from 'react';
import SignIn from './SignIn/Sign-in';

const SignInPage = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state: RootState) => state.sign.user);

    React.useEffect(() => {
        if(isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    return (
        <div id="sign-in">
            <span className="title">weone</span>
            <SignIn />
            <ul className="find">
                <li className="find-id" onClick={() => { navigate("/find-userId") }}>아이디 찾기</li>
                <li className="find-pw" onClick={() => { navigate("/find-userPw") }}>비밀번호 찾기</li>
            </ul>
            <ul className="social">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
            <span className="create">아직 회원이 아니신가요? 
                <span className="create-go" onClick={() => { navigate("/sign-up") }}>가입하기</span>
            </span>
        </div>
    )
}

export default SignInPage;