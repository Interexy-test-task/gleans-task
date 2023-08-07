import { FC, ReactNode } from 'react';

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      className="
        absolute top-0 left-0
        h-full w-full
        backdrop-blur-xl
        flex md:justify-center items-end md:items-center opacity-1"
    >
      <div
        className="
          absolute
          bg-[#151515]/80 rounded-t-[43px] md:rounded-b-[43px]
          w-full md:w-[430px]
          px-5 md:px-12 py-14 md:py-9
          animate-appear"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
