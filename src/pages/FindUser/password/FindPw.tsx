import { Input, Button, Form } from '../../../components';

type FormData = {
  name: string;
  email: string;
};

const FindPassword = () => {
    const onSubmit = (data: FormData) => {
        console.log({data});
    }

    return (
        <div className="find-password">
            <Form<FormData> onSubmit={onSubmit}>
                <div className="name">
                    <label className="label">이름</label>
                    <Input name="name" label="이름" required />
                </div>
                <div className="email">
                    <label className="label">이메일</label>
                    <Input name="email" label="이메일" required />
                </div>
                <Button primary>확인</Button>
            </Form>
        </div>
    )
}

export default FindPassword;