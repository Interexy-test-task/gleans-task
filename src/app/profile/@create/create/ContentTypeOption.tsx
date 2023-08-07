import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type ContentTypeOptionProps = {
  image: StaticImport;
  title: string;
  description: string;
};

const ContentTypeOption: FC<ContentTypeOptionProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center w-32">
      <Image src={image} alt="Picture of the author" />
      <span className="mt-3 mb-2.5 text-center text-sm font-medium">
        {title}
      </span>
      <span className="text-center text-sm text-white/70">{description}</span>
    </div>
  );
};

export default ContentTypeOption;
