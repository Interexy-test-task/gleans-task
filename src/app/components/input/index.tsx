import { FC, ReactNode, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import useAutosizeTextArea from '@/app/hooks/useAutosizeTextArea';

type InputProps = {
  button?: ReactNode;
  adornment?: ReactNode;
  className?: string;
  multiline?: boolean;
} & React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>;

const Input: FC<InputProps> = ({
  value,
  onChange,
  button,
  adornment,
  className,
  multiline,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value as string);

  return (
    <div className="relative mt-9 mb-4">
      {adornment ? (
        <div className="absolute left-3.5 top-5 z-10">{adornment}</div>
      ) : null}
      {button ? (
        <>
          <div className="absolute top-1.5 right-1.5 z-10">{button}</div>
          <div className="absolute top-0 right-[25px] h-full w-[100px] bg-gradient-to-r from-transparent to-[#2c2c2c] to-45%"></div>
        </>
      ) : null}
      {multiline ? (
        <textarea
          ref={textAreaRef}
          value={value}
          onChange={onChange}
          className={twMerge(
            `w-full rounded-[25px] p-1 resize-none
            bg-[#2c2c2c] outline-none`,
            className,
          )}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className={twMerge(
            `w-full h-[60px] rounded-[25px] p-1
            bg-[#2c2c2c] outline-none`,
            button ? 'pr-16' : 'pr-1',
            adornment ? 'pl-11' : 'pl-1.5',
            className,
          )}
        />
      )}
    </div>
  );
};

export default Input;
