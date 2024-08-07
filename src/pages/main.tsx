import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/modules/actions/signActions';
import { Button, CheckBox, Toggle } from '../components';
import { RootState } from '../redux/modules/index';
import React from 'react';
import { ThemeSwitch } from '../components';
import { useGetAllUserQuery } from '../generated/graphql';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.sign.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/sign-in');
  };

  React.useEffect(() => {
    console.log({ user });
  }, [user]);

  const { loading, error, data } = useGetAllUserQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log({ data });

  return (
    <div>
      MainPage
      <Button onClick={handleLogout}>로그아웃</Button>
      <CheckBox id="check__1" label="동의" />
      <Toggle />
      <ThemeSwitch />
    </div>
  );
};

export default MainPage;
