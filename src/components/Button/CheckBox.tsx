interface CheckBoxProps {
    checked?: boolean;
    label?: string; 
    id: string;
}

export const CheckBox = ({id, checked, label}: CheckBoxProps) => {
    const isChecked = checked ? "checked": "";
    return (
        <div className={['checkbox', `checkbox--${isChecked}`].join(' ')}>
            <input type="checkbox" id={id} name={label} checked={checked} />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}
