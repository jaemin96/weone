import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/modules/actions/signActions';
import { Button } from '../components';
import { RootState } from '../redux/modules/index';
import React from 'react';

const MainPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state:RootState) => state.sign.user);
    
    const handleLogout = () => {
        dispatch(logout());
        navigate("/sign-in");
    }

    React.useEffect(() => {
        console.log({user});
    },[user])

    return (
        <div>
            MainPage
            <Button onClick={handleLogout}>로그아웃</Button>
        </div>
    )
}

export default MainPage;