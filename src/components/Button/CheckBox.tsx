interface CheckBoxProps {
    checked?: boolean;
    label?: string; 
    id: string;
    onChange?: () => void;
}

export const CheckBox = ({id, checked, label, onChange}: CheckBoxProps) => {
    return (
        <div className={['checkbox'].join(' ')}>
            <label htmlFor={label}>
                <input type="checkbox" id={id} name={label} checked={checked} onChange={onChange}/>
                {label}
            </label>
        </div>
    )
}
