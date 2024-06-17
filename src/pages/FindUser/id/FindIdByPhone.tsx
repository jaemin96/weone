import { useState, ChangeEvent } from 'react';
import { Button, Form, Input } from '../../../components';

type FormData = {
  name: string;
  phoneNumber: string;
  isPass: boolean;
};

interface FindIdByPhoneProps {
    
}

const FindIdByPhone = ({}: FindIdByPhoneProps) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    const [pass, setPass] = useState<boolean>(false);
    
    const onSubmit = (data: FormData) => {
        console.log({data});
    }

    const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const onAuth = () => {
        if(phone.length !== 0) {
            setAuth(true);
        }
    }

    const handlePass = () => {
        console.log("PASS!");
        setPass(!pass);
    }

    return (
        <div className="find-id-phone">
            <Form<FormData> onSubmit={onSubmit}>
                <div className="name">
                    <label className="label">이름</label>
                    <Input name="name" label="이름" required />
                </div>
                <div className="phone-number">
                    {/* TODO: 통신사 드롭다운 */}
                    <label className="label">휴대전화</label>
                    <button style={{border: "1px solid black", width:"2.5rem", height:"auto"}}>v</button>
                    <Input name="phoneNumber" label="전화번호" required onChange={onChangePhone}/>
                    <Button onClick={onAuth} type="button">{auth ? "다시받기" : "인증"}</Button>
                </div>
                <div className="pass-number">
                    <label className="label">인증번호</label>
                    <Input name="passNumber" label="인증번호" required disabled={auth ? false : true}/>
                    <Button onClick={handlePass} type="button">확인</Button>
                </div>
                <Button primary>확인</Button>
            </Form>
        </div>
    )
}

export default FindIdByPhone;