import { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/app/components/button';
import { TAGS } from '@/app/constants/content-creation/tags';

import PlusIcon from '../../../../../public/plus.svg';
import MinusIcon from '../../../../../public/minus.svg';
import CollectionIcon from '../../../../../public/collection.svg';
import ImageIcon from '../../../../../public/image.svg';

type Props = {
  value: any;
  onShowDescription: () => void;
  onShowCollections: () => void;
  onBackClick: () => void;
  onSaveClick: () => void;
};

const EditStep: React.FC<Props> = ({
  value,
  onShowDescription,
  onShowCollections,
  onSaveClick,
  onBackClick,
}) => {
  const [tags, setTags] = useState<Array<string>>(value.keywords || []);

  const onSave = () => {
    onSaveClick();
  };

  const addTag = (id: string) => {
    setTags([...tags, id]);
  };

  const removeTag = (id: string) => {
    const updatedValue = [...tags];
    const index = tags.indexOf(id);
    updatedValue.splice(index, 1);
    setTags(updatedValue);
  };

  return (
    <div className="w-full md:h-fit">
      <div className="flex flex-col h-full">
        <div className="flex flex-col grow items-center">
          <div
            className="h-60 w-60 p-6 mb-9 rounded-[25px]"
            style={{ background: value.emoji.color }}
          >
            <div className="text-center text-[80px] mb-4">
              {value.emoji.value}
            </div>
            <div className="flex">
              <Image
                src={ImageIcon}
                alt="image"
                className="pr-3.5 basis-9 grow-0 shrink-0"
              />
              <span className="text-sm text-white/50">
                Paste or tap to change into an image or video.
              </span>
            </div>
          </div>

          <h2 className="text-3xl text-white text-center font-medium mb-4">
            {value.title || 'Very very long title or collection name'}
          </h2>

          <div
            className="mb-7 h-16 overflow-hidden relative"
            onClick={onShowDescription}
          >
            <p
              className="
                text-center text-sm cursor-pointer h-full
                text-transparent bg-clip-text bg-gradient-to-b from-[#B9B9B9] to-transparent to-90%"
            >
              {value.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-14">
            {TAGS.map((tag) => (
              <div
                key={tag}
                className="mr-2.5 mb-2.5 px-3 py-2 rounded-[32px] bg-[#2A2A2A] flex items-center"
              >
                <span className="mr-1.5">{tag}</span>

                {tags.includes(tag) ? null : (
                  <>
                    <button onClick={() => addTag(tag)} className="px-2 h-full">
                      <Image src={PlusIcon} alt="add" />
                    </button>
                    <div className="bg-[#B9B9B9] w-[1px] h-[13px]" />
                  </>
                )}
                <button onClick={() => removeTag(tag)} className="px-2 h-full">
                  <Image src={MinusIcon} alt="remove" />
                </button>
              </div>
            ))}
          </div>

          <button
            className="mb-3 flex items-center"
            onClick={onShowCollections}
          >
            <span className="mr-1.5 text-sm text-[#B9B9B9]">
              Add to collection
            </span>
            <Image src={CollectionIcon} alt="collection" />
          </button>
        </div>

        <div className="mx-auto pt-11">
          <Button onClick={onBackClick} className="mr-4" faded>
            Back
          </Button>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditStep;
