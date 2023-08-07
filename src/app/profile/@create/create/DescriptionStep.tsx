import { FC, useState } from 'react';

import Button from '@/app/components/button';
import Input from '@/app/components/input';

type Props = {
  onBackClick: () => void;
  onSaveClick: (newValue: string) => void;
  value: string;
};

const DescriptionStep: FC<Props> = ({ value, onBackClick, onSaveClick }) => {
  const [inputValue, setInputValue] = useState(value);

  const onSave = () => {
    onSaveClick(inputValue);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col h-full">
        <div className="flex flex-col grow justify-center">
          <h2 className="text-white/50 text-3xl text-center">Description</h2>

          <p className="mb-4 mt-1.5 text-center text-sm text-[#B9B9B9]">
            Leave the description empty to create a direct link
          </p>

          <Input
            className="px-5 py-8 text-sm text-[#B9B9B9] h-auto"
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
        </div>

        <div className="mx-auto mt-11">
          <Button onClick={onBackClick} className="mr-4" faded>
            Back
          </Button>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionStep;
