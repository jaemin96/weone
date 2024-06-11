import { ReactNode } from 'react';

interface TabItemProps {
    isActive: boolean;
    index: number;
    children: ReactNode;
    onClick: (index: number) => void;
}

export const TabItem = ({
    isActive,
    index,
    children,
    onClick
}: TabItemProps) => {
    return (
        <button className={`tab-item ${isActive ? "active" : ""}`} onClick={() => {onClick(index)}}>
            {children}
        </button>
    )
}
