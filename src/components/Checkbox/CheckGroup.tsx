import React, { ReactNode, useEffect, useState } from 'react';
import { CheckBoxProps } from './CheckBox';

interface CheckGroupProps {
    className?: string;
    label?: string; 
    id: string;
    children: ReactNode;
}

export const CheckGroup = ({id, label, children}: CheckGroupProps) => {
    const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
    const [childChecked, setChildChecked] = useState<{[key: string]: boolean}>({}); // {"child-check" : true | false}

    // TODO: handler - group check
    const handleGroupCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setIsCheckedAll(checked);
    }

    // TODO: handler - child check
    const handleChildCheck = () => {}

    // TODO: effect - all checked -> child not checked 
    useEffect(() => {}, []);

    return (
        <div className={['check-group'].join(' ')}>
            <label htmlFor={id}>
                <input type="checkbox" id={id} name={label} checked={isCheckedAll} onChange={handleGroupCheck}/>
                {label}
            </label>
            <div>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement<CheckBoxProps>(child)) {
                      return React.cloneElement(child);
                    }
                    return child;
                })}
            </div>
        </div>
    )
}



