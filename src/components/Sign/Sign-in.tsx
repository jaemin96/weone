import React from 'react';
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/modules/actions/signActions';

type FormData = {
  id: string;
  password: string;
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: FormData) => {
    console.log(data);
    const { id, password } = data;

    if (id === 'admin' && password === '1234') {
      dispatch(login({ id }));
    } else {
      alert('login failed!');
    }
  };

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <Input name="id" label="ID" required />
      <Input name="password" label="Password" type="password" required />
      <Button>로그인</Button>
    </Form>
  );
};

export default SignIn;
