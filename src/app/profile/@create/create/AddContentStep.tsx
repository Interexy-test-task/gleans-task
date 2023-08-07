import { FC, useState } from 'react';

import Input from '@/app/components/input';
import Button from '@/app/components/button';

import gleansPic from '../../../../../public/gleans.svg';
import collectionPic from '../../../../../public/collections.svg';

import ContentTypeOption from './ContentTypeOption';

type Props = {
  addHandle: (link: string) => void;
};

const AddContentStep: FC<Props> = ({ addHandle }) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <h2 className="text-white/50 text-3xl text-center mb-14">Add content</h2>

      <div className="flex justify-around">
        <ContentTypeOption
          image={gleansPic}
          title="Create a Glean"
          description="Add content, links & descriptive text"
        />
        <ContentTypeOption
          image={collectionPic}
          title="Collection"
          description="Organise gleans & direct links"
        />
      </div>

      <Input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        adornment="🔗"
        button={<Button onClick={() => addHandle(inputValue)}>Add</Button>}
      />

      <p className="text-sm text-center">
        <b>Powered by Gleans Ai</b> ✨ Create content automatically and make
        changes if needed.
      </p>
    </>
  );
};

export default AddContentStep;
