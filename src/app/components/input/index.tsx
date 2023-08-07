import { FC, ReactNode } from 'react';

type InputProps = {
  button?: ReactNode;
  adornment?: ReactNode;
};

const Input: FC<InputProps> = ({ button, adornment }) => {
  return (
    <div className="relative mt-9 mb-4">
      {adornment ? (
        <div className="absolute left-3.5 top-5 z-10">{adornment}</div>
      ) : null}
      {button ? (
        <div className="absolute top-1.5 right-1.5 z-10">{button}</div>
      ) : null}
      <input
        className={`
        w-full h-[60px] rounded-[25px]
        pt-1 pb-1 ${button ? 'pr-16' : 'pr-1'} ${adornment ? 'pl-11' : 'pl-1.5'}
        bg-[#2c2c2c] outline-none`}
      />
      <div className="absolute top-0 right-[25px] h-full w-[100px] bg-gradient-to-r from-transparent to-[#2c2c2c] to-45%"></div>
    </div>
  );
};

export default Input;
