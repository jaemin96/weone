import React, { ReactNode, useState } from 'react';
import { TabContent, TabItem, TabMenu } from './';

interface TabContainerProps {
    children: ReactNode;
}

export const TabContainer = ({children}: TabContainerProps) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTab = (index: number) => {
        setActiveTab(index);
    }

    return (
        <div className="tab-container">
            <TabMenu>
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return (
                            <TabItem
                                key={index}
                                index={index}
                                isActive={index === activeTab}
                                onClick={() => handleTab(index)}
                            >
                                {child.props.label}
                            </TabItem>
                        );
                    }
                    return null;
                })}
            </TabMenu>
            <TabContent>
                {React.Children.map(children, (child, index) => 
                    React.isValidElement(child) && index === activeTab ? child : null
                )}
            </TabContent>
        </div>
    )
}
