import { useState, ChangeEvent } from 'react';
import { Button, Form, Group, GroupItem, Input } from '../../../components';

type FormData = {
  name: string;
  phoneNumber: string;
  isPass: boolean;
};

const FindIdByPhone = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>('');
  const [pass, setPass] = useState<boolean>(false);

  const onSubmit = (data: FormData) => {
    console.log({ data });
  };

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onAuth = () => {
    if (phone.length !== 0) {
      setAuth(true);
    }
  };

  const handlePass = () => {
    console.log('PASS!');
    setPass(!pass);
  };

  return (
    <div className="find-id-phone">
      <Form<FormData> onSubmit={onSubmit}>
        <div className="name">
          <label className="label">이름</label>
          <Input name="name" label="이름" required />
        </div>
        <div className="phone-number">
          <label className="label">휴대전화</label>
          <Group defaultText="SKT">
            <GroupItem value="SKT">SKT</GroupItem>
            <GroupItem value="KT">KT</GroupItem>
            <GroupItem value="LG">LG</GroupItem>
          </Group>
          <Input name="phoneNumber" label="전화번호" required onChange={onChangePhone} />
          <Button onClick={onAuth} type="button">
            {auth ? '다시받기' : '인증'}
          </Button>
        </div>
        <div className="pass-number">
          <label className="label">인증번호</label>
          <Input name="passNumber" label="인증번호" required disabled={auth ? false : true} />
          <Button onClick={handlePass} type="button">
            확인
          </Button>
        </div>
        <Button primary>확인</Button>
      </Form>
    </div>
  );
};

export default FindIdByPhone;
