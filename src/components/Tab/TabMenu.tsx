import React, { ReactNode } from 'react';

interface TabMenuProps {
    children: ReactNode;
}

export const TabMenu = ({children}: TabMenuProps) => {
    return (
        <div className="tab-menu">
            {children}
        </div>
    )
}
