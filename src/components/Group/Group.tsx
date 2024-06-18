import React, { ReactElement } from 'react';
import { GroupItemProps } from './GroupItem';

interface DropdownProps {
  defaultText: string;
  className?: string;
  children: ReactElement<GroupItemProps> | ReactElement<GroupItemProps>[];
}

const Group = ({ children, defaultText, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>(defaultText);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  }

  return (
    <div className={['group', `${className}`].join(' ')}>
      <label className="group-label" onClick={handleOpen}>{selected}</label>
      {isOpen && (
        <ul className="group-items">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<GroupItemProps>(child)) {
              return React.cloneElement(child, { onSelect: handleSelect });
            }
            return child;
          })}
        </ul>
      )}
    </div>
  );
};

export default Group;
