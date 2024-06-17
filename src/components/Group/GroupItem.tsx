import { ReactNode } from 'react';

export interface GroupItemProps {
  value: string;
  onSelect: (value: string) => void;
  children: ReactNode;
}

const GroupItem = ({ value, onSelect, children }: GroupItemProps) => {
  return <li className="group-items-item" onClick={() => onSelect(value)}>{children}</li>
};

export default GroupItem;
