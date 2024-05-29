import { ReactNode } from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size: 'medium' | 'small' | 'large';
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';

  const onClick= () => {
    console.log("Clicked");
  }

  return (
    <button
      type="button"
      className={['button', `button--${size} ${mode}`].join(' ')}
      style={{backgroundColor}}
      onClick={onClick}
      {...props}
    >
      {props.children}
    </button>
  );
};
