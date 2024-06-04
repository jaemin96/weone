import { useFormContext } from "react-hook-form";

type InputProps = {
    name: string;
    label: string;
    required?: boolean;
    type?: string;
};

const Input:React.FC<InputProps> = ({ name, label, type = 'text', required = false }) => {
    const { register } = useFormContext();
    return (
        <fieldset style={{border: "none"}}>
            <label htmlFor={name}>
                {required && <span style={{ color: "red" }}>*</span>}
                {label}
            </label>
            <input {...register(name, { required })} id={name} type={type}/>
        </fieldset>
    )
}

export default Input;