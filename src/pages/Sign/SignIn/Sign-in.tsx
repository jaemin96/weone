import React, { useState } from 'react';
import { Button, CheckBox, Input, Form } from '../../../components';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/modules/actions/signActions';

type FormData = {
  id: string;
  password: string;
};

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    const { id, password } = data;
    console.log({ id, password, autoLogin });

    if (id === 'admin' && password === '1234') {
      dispatch(login({ id }));
    } else {
      alert('login failed!');
    }
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoLogin(event.target.checked);
  };

  return (
      <Form<FormData> onSubmit={onSubmit}>
        <Input name="id" label="ID" required />
        <Input name="password" label="Password" type="password" required />
        <CheckBox id={'auto_login'} label={'로그인 상태 유지'} onChange={handleCheck} />
        <Button primary>로그인</Button>
      </Form>
  );
};

export default SignIn;
