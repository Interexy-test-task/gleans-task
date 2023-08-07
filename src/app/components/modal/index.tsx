import { FC, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

const Modal = forwardRef<HTMLDivElement, Props>(
  ({ children, className, fullHeight }, ref) => {
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
            `absolute top-0 md:top-auto
          bg-[#151515]/80 rounded-t-[43px] md:rounded-b-[43px]
          w-full md:w-[430px] md:max-h-[90dvh] md:overflow-auto
          px-5 md:px-12 py-14 md:py-9
          transition-all duration-700 animate-appear`,
            className,
            fullHeight
              ? 'min-h-full rounded-t-none md:min-h-fit md:rounded-[43px]'
              : 'h-fit min-h-0',
          )}
          ref={ref}
        >
          {children}
        </div>
      </div>
    );
  },
);

Modal.displayName = 'Modal';

export default Modal;
