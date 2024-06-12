import { useFormContext } from "react-hook-form";

type InputProps = {
    name: string;
    label: string;
    required?: boolean;
    type?: string;
    className?: string;
    isLabel?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
};

const Input:React.FC<InputProps> = ({ name, label, className, isLabel = false, readOnly=false, disabled=false, type = 'text', required = false }) => {
    const { register } = useFormContext();
    return (
        <fieldset className={className} style={{border: "none"}}>
            {isLabel &&
                <label htmlFor={name}>
                    {required && <span style={{ color: "red" }}>*</span>}
                    {label}
                </label>
            }
            <input {...register(name, { required })} id={name} type={type} disabled={disabled} readOnly={readOnly}/>
        </fieldset>
    )
}

export default Input;