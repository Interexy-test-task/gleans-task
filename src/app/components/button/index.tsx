import { FC, ReactNode } from 'react';

const Button: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <button className="bg-stone-300 text-black px-5 py-3 rounded-[43px]">
      {children}
    </button>
  );
};

export default Button;
