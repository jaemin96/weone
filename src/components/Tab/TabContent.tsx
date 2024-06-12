import { ReactNode } from 'react';

interface TabContentProps {
    children: ReactNode;
}

export const TabContent = ({children}: TabContentProps) => {
    return (
        <div role="tabContent" className="tab-content">
            {children}
        </div>
    )
}
