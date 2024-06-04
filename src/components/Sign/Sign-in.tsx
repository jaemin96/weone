import React from "react";
import { Form } from '../Form';
import { Input } from '../Input';
import { Button } from '../Button';

type FormData = {
    email: string;
    password: string;
};

const SignIn:React.FC = ()  => {
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <Form<FormData> onSubmit={onSubmit}>
            <Input name="email" label="ID" required/>
            <Input name="password" label="Password" type="password" required/>
            <Button>Submit</Button>
        </Form>
    )
}

export default SignIn;