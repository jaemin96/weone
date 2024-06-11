import { ReactNode } from 'react';

interface TabContentProps {
    children: ReactNode;
}

export const TabContent = ({children}: TabContentProps) => {
    return (
        <div className="tab-content">
            {children}
        </div>
    )
}
