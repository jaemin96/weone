import { ChangeEvent, useState } from 'react';
import { Button, CheckBox, CheckGroup, Form, Group, GroupItem, Input } from '../../components';

type FormData = {
  name: string;
  password: string;
  passwordConfirm: string;
  phoneNumber: string;
};

const SignUpPage = () => {
    const [auth, setAuth] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");
    
    const onSubmit = (data: FormData) => {
        console.log({data});

        // check password
        const {password, passwordConfirm} = data;
        if(password !== passwordConfirm) {
            return console.error("패스워드 일치하지 않음");
        }

        // TODO: check 상태 관리 - 동의 여부 체크 (signupAgreementSMS & signupAgreementEmail)
    }

    const onChangePhone = (e:ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    }

    const onAuth = () => {
        if(phone.length !== 0) {
            setAuth(true);
        }
    }

    return (
        <div id='sign-up'>
            <Form<FormData> onSubmit={onSubmit}>
                <span className="title">회원 가입</span>
                <div className="name">
                    <label className="label">이름</label>
                    <Input name="name" label="이름" required />
                </div>
                <div className="name">
                    <label className="label">비밀번호</label>
                    <Input name="password" label="비밀번호" required />
                </div>
                <div className="name">
                    <label className="label">비밀번호 확인</label>
                    <Input name="passwordConfirm" label="비밀번호 확인" required />
                </div>
                <div className="phone-number">
                    <label className="label">휴대전화</label>
                    <Group defaultText='SKT'>
                        <GroupItem value='SKT'>SKT</GroupItem>
                        <GroupItem value='KT'>KT</GroupItem>
                        <GroupItem value='LG'>LG</GroupItem>
                    </Group>
                    <Input name="phoneNumber" label="전화번호" required onChange={onChangePhone}/>
                    <Button onClick={onAuth} type="button">{auth ? "다시받기" : "인증"}</Button>
                </div>
                <div className="pass-number">
                    <label className="label">인증번호</label>
                    <Input name="passNumber" label="인증번호" required disabled={auth ? false : true}/>
                    <Button type="button">확인</Button>
                </div>
                <CheckGroup id='signupAgreement' label='전체 동의하기'>
                    <CheckBox id='signupAgreementSMS' label='SMS 수신 동의'/>
                    <CheckBox id='signupAgreementEmail' label='이메일 수신 동의'/>
                </CheckGroup>
                <Button primary>가입하기</Button>
            </Form>
        </div>
    )
}

export default SignUpPage;