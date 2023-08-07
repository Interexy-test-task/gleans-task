'use client';

import { useState } from 'react';

import Modal from '@/app/components/modal';
import { Steps } from '@/app/constants/content-creation/steps';

import AddContentStep from './AddContentStep';
import DescriptionStep from './DescriptionStep';
import CollectionsStep from './CollectionsStep';
import EditStep from './EditStep';
import DoneStep from './DoneStep';

export default function Page() {
  const [step, setStep] = useState(Steps.MAIN);

  const checkLink = (link: string) => {
    setStep(Steps.EDIT);
  };

  const goToMain = () => setStep(Steps.MAIN);
  const goToEdit = (data?: any) => setStep(Steps.EDIT);
  const goToDescription = () => setStep(Steps.DESCRIPTION);
  const goToCollections = () => setStep(Steps.COLLECTIONS);
  const goToDone = (data?: any) => setStep(Steps.DONE);

  const renderContent = () => {
    switch (step) {
      case Steps.MAIN: {
        return <AddContentStep addHandle={checkLink} />;
      }
      case Steps.EDIT: {
        return (
          <EditStep
            value={{}}
            onShowDescription={goToDescription}
            onShowCollections={goToCollections}
            onBackClick={goToMain}
            onSaveClick={goToDone}
          />
        );
      }
      case Steps.COLLECTIONS: {
        return <CollectionsStep value={[]} onSaveClick={goToEdit} />;
      }
      case Steps.DESCRIPTION: {
        return (
          <DescriptionStep
            value="fwefwefwe"
            onBackClick={goToEdit}
            onSaveClick={goToEdit}
          />
        );
      }
      case Steps.DONE: {
        return <DoneStep onDoneClick={goToMain} />;
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
