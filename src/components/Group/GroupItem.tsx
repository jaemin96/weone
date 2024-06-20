export interface GroupItemProps {
  value: string;
  onSelect?: (value: string) => void;
  children: string;
}

const GroupItem = ({ value, onSelect, children }: GroupItemProps) => {
  return (
    <li className="group-items-item" onClick={() => onSelect && onSelect(value)}>
      {children}
    </li>
  );
};

export default GroupItem;
