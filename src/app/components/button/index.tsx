import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  faded?: boolean;
};

const Button: FC<Props> = ({
  children,
  className = '',
  onClick = () => {},
  faded,
}) => {
  return (
    <button
      className={twMerge(
        `bg-stone-300 text-black px-5 py-3 rounded-[43px]`,
        className,
        faded ? 'bg-[#2A2A2A] text-[#626262]' : '',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
