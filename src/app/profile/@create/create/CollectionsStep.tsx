import { useState } from 'react';

import Button from '@/app/components/button';
import { COLLECTIONS } from '@/app/constants/content-creation/collections';
import { twMerge } from 'tailwind-merge';

type Props = {
  value: Array<string>;
  onSaveClick: (data: Array<string>) => void;
};

const CollectionsStep: React.FC<Props> = ({ value, onSaveClick }) => {
  const [inputValue, setInputValue] = useState<Array<string>>(value);

  const toggleValue = (value: string) => {
    const index = inputValue.indexOf(value);

    if (index > -1) {
      const updatedValue = [...inputValue];
      updatedValue.splice(index, 1);
      setInputValue(updatedValue);
    } else {
      setInputValue([...inputValue, value]);
    }
  };

  const onSave = () => {
    onSaveClick(inputValue);
  };

  return (
    <div className="w-full md:h-fit">
      <div className="flex flex-col h-full">
        <div className="flex flex-col grow justify-center items-center">
          <h2 className="text-white/50 text-3xl text-center pb-24	">
            Collections
          </h2>

          {COLLECTIONS.map((collection) => (
            <div
              key={collection.id}
              className={twMerge(
                `px-6 py-3 mb-2 rounded-[29px] cursor-pointer
                text-[#B9B9B9] transition-all duration-500`,
                inputValue.includes(collection.id)
                  ? 'bg-[#2c2c2c] text-white'
                  : '',
              )}
              onClick={() => toggleValue(collection.id)}
            >
              {collection.name}
            </div>
          ))}
        </div>

        <Button onClick={onSave} className="mx-auto mt-11">
          Save
        </Button>
      </div>
    </div>
  );
};

export default CollectionsStep;
