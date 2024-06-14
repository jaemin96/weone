import { useState, ReactElement, ChangeEvent } from 'react';
import { Input, Button, Form } from '../..';

type FormData = {
  name: string;
  email: string;
  isPass: boolean;
};

interface FindIdByPhoneProps {
    
}

const FindIdByEmail = ({}: FindIdByPhoneProps) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<boolean>(false);
    
    const onSubmit = (data: FormData) => {
        console.log({data});
    }

    const onChangeEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onAuth = () => {
        if(email.length !== 0) {
            setAuth(true);
        }
    }

    return (
        <div className="find-id-email">
            <Form<FormData> onSubmit={onSubmit}>
                <div className="name">
                    <label className="label">이름</label>
                    <Input name="name" label="이름" required />
                </div>
                <div className="email">
                    <label className="label">이메일</label>
                    <Input name="email" label="전화번호" required onChange={onChangeEmail}/>
                    <Button onClick={onAuth} type="button">{auth ? "재전송" : "인증"}</Button>
                </div>
                <Button primary>확인</Button>
            </Form>
        </div>
    )
}

export default FindIdByEmail;