import { useState } from 'react';

import Button from '@/app/components/button';
import { COLLECTIONS } from '@/app/constants/content-creation/collections';
import { twMerge } from 'tailwind-merge';

type Props = {
  onDoneClick: () => void;
};

const DoneStep: React.FC<Props> = ({ onDoneClick }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-col grow justify-center items-center"></div>

        <Button
          onClick={onDoneClick}
          className="mx-auto mt-11 bg-[#00FF85] text-white"
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default DoneStep;
