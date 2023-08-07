import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

const Modal: FC<Props> = ({ children, className, fullHeight }) => {
  return (
    <div
      className="
        absolute top-0 left-0
        h-full w-full
        backdrop-blur-xl
        flex md:justify-center items-end md:items-center opacity-1"
    >
      <div
        className={twMerge(
          `absolute
          bg-[#151515]/80 rounded-t-[43px] md:rounded-b-[43px]
          w-full md:w-[430px]
          px-5 md:px-12 py-14 md:py-9
          transition-all duration-700 animate-appear`,
          className,
          fullHeight
            ? 'min-h-full rounded-t-none md:min-h-fit md:rounded-[43px]'
            : 'h-fit min-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
