import { Input, Button, Form } from '../../../components';

type FormData = {
  password: string;
  passwordConfirm: string;
};

const SetPassword = () => {
    const onSubmit = (data: FormData) => {
        console.log({data});
    }

    return (
        <div className="set-password">
            <Form<FormData> onSubmit={onSubmit}>
                <div className="new-password">
                    <label className="label">새 비밀번호</label>
                    <Input name="password" label="새 비밀번호" type="password" required />
                </div>
                <div className="new-password-confirm">
                    <label className="label">비밀번호 확인</label>
                    <Input name="passwordConfirm" label="비밀번호 확인" type="password" required />
                </div>
                <Button primary>확인</Button>
            </Form>
        </div>
    )
}

export default SetPassword;