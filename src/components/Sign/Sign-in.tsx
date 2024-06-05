import React from 'react';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../redux/modules/actions/signActions';
import { RootState } from '../../redux/modules';

type FormData = {
  id: string;
  password: string;
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.sign.user);

  const onSubmit = (data: FormData) => {
    console.log(data);
    const { id, password } = data;

    if (id === 'admin' && password === '1234') {
      dispatch(login({ id }));
    } else {
      alert('login failed!');
    }
  };

  React.useEffect(() => {
    console.log({ user });
    return () => {
      console.log('');
    };
  }, [user]);

  return user?.isLoggedIn ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>logged in</span>
      <span>{`id : ${user.id}`}</span>
      <div>
        <Button onClick={() => dispatch(logout())}>로그아웃</Button>
      </div>
    </div>
  ) : (
    <Form<FormData> onSubmit={onSubmit}>
      <Input name="id" label="ID" required />
      <Input name="password" label="Password" type="password" required />
      <Button>로그인</Button>
    </Form>
  );
};

export default SignIn;
