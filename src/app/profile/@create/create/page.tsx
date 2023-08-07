import Input from '@/app/components/input';
import Modal from '@/app/components/modal';

import ContentTypeOption from './ContentTypeOption';

import gleansPic from '../../../../../public/gleans.svg';
import collectionPic from '../../../../../public/collections.svg';
import Button from '@/app/components/button';

export default function Page() {
  return (
    <Modal>
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

      <Input adornment="🔗" button={<Button>Add</Button>} />

      <p className="text-sm text-center">
        <b>Powered by Gleans Ai</b> ✨ Create content automatically and make
        changes if needed.
      </p>
    </Modal>
  );
}
