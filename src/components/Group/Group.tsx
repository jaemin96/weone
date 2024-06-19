import React, { ReactElement, useRef } from 'react';
import { GroupItemProps } from './GroupItem';

interface GroupProps {
  defaultText: string;
  className?: string | '';
  type?: 'button' | 'label';
  children: ReactElement<GroupItemProps> | ReactElement<GroupItemProps>[];
}

const Group = ({ children, defaultText, className = '', type = 'button' }: GroupProps) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>(defaultText);
  const groupRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
  };

  // [핸들러](그룹 리스트가 열려 있을 경우) 외부 영역 클릭 시 리스트 선택창 닫기
  const handleOutsideClick = (event: MouseEvent) => {
    const { target } = event;
    if (isOpen && groupRef?.current && !groupRef.current.contains(target as Node)) setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
    // eslint-disable-next-line
  }, [isOpen]);

  return (
    <div ref={groupRef} className={['group', `group-${type}`, `${className}`].join(' ')} onClick={handleOpen}>
      <label className="group-label">{selected}</label>
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
