import { useState, ChangeEvent } from 'react';
import { Input, Button, Form } from '../../../components';
import { isValidEmail } from '../../../util';

type FormData = {
  name: string;
  email: string;
  isPass: boolean;
};

const FindIdByEmail = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onAuth = () => {
    if (email.length !== 0) {
      if (!isValidEmail(email)) {
        return console.log('올바른 이메일 형식이 아닙니다.');
      }
      setAuth(true);

      window.alert('입력하신 이메일로 인증 메일을 전송하였습니다.');
    }
  };

  return (
    <div className="find-id-email">
      <Form<FormData> onSubmit={onSubmit}>
        <div className="name">
          <label className="label">이름</label>
          <Input name="name" label="이름" required />
        </div>
        <div className="email">
          <label className="label">이메일</label>
          <Input name="email" label="이메일" required onChange={onChangeEmail} />
          <Button onClick={onAuth} type="button">
            {auth ? '재전송' : '인증'}
          </Button>
        </div>
        <Button primary>확인</Button>
      </Form>
    </div>
  );
};

export default FindIdByEmail;
