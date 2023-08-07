'use client';

import { useState } from 'react';

import Modal from '@/app/components/modal';
import { Steps } from '@/app/constants/content-creation/steps';

import AddContentStep from './AddContentStep';
import DescriptionStep from './DescriptionStep';
import CollectionsStep from './CollectionsStep';

export default function Page() {
  const [step, setStep] = useState(Steps.MAIN);

  const checkLink = (link: string) => {
    setStep(Steps.COLLECTIONS);
  };

  const backToEdit = (data?: any) => {
    setStep(Steps.MAIN); //Steps.EDIT
  };

  const renderContent = () => {
    switch (step) {
      case Steps.MAIN: {
        return <AddContentStep addHandle={checkLink} />;
      }
      case Steps.EDIT: {
        return null;
      }
      case Steps.COLLECTIONS: {
        return <CollectionsStep value={[]} onSaveClick={backToEdit} />;
      }
      case Steps.DESCRIPTION: {
        return (
          <DescriptionStep
            value="fwefwefwe"
            onBackClick={backToEdit}
            onSaveClick={backToEdit}
          />
        );
      }
      case Steps.DONE: {
        return null;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <Modal
      fullHeight={step !== Steps.MAIN}
      className={step !== Steps.MAIN ? 'flex items-stretch' : ''}
    >
      {renderContent()}
    </Modal>
  );
}
