'use client';

import { useState, useEffect, useRef } from 'react';
import getEmoji from 'get-random-emoji';

import Modal from '@/app/components/modal';
import { Steps } from '@/app/constants/content-creation/steps';
import sleep from '@/app/utils/sleep';
import useEmojiColor from '@/app/hooks/useEmojiColor';

import AddContentStep from './AddContentStep';
import DescriptionStep from './DescriptionStep';
import CollectionsStep from './CollectionsStep';
import EditStep from './EditStep';
import DoneStep from './DoneStep';

export default function Page() {
  const [step, setStep] = useState<Steps>(Steps.MAIN);
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const modalRef = useRef<HTMLDivElement>(null);

  /* eslint-disable */
  useEffect(() => {
    const emoji = getEmoji();
    const color = useEmojiColor(emoji);
    setData({ ...data, emoji: { value: emoji, color } });
  }, []);
  /* eslint-enable */

  useEffect(() => {
    modalRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

  const load = async (link: string) => {
    // fetch(`https://cors-anywhere.herokuapp.com/${link}`);

    Promise.all([fetch(link), sleep(2000)])
      .then(([res]) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(html, 'text/html');

        const title = parsedDocument.querySelector('title')?.innerText;
        const description = parsedDocument
          .querySelector('meta[name="description"]')
          ?.getAttribute('content');
        const keywords = parsedDocument.querySelector('meta[name="keywords"]');

        setData({ ...data, title, description, keywords, collections: [] });
        setLoading(false);
        goToEdit();
      });
  };

  const goToMain = () => setStep(Steps.MAIN);
  const goToEdit = () => setStep(Steps.EDIT);
  const goToDescription = () => setStep(Steps.DESCRIPTION);
  const goToCollections = () => setStep(Steps.COLLECTIONS);
  const goToDone = () => setStep(Steps.DONE);

  const checkLink = (link: string) => {
    setLoading(true);
    load(link);
  };

  const saveCollections = (newCollections: Array<string>) => {
    setData({ ...data, collections: newCollections });
    goToEdit();
  };

  const saveDescription = (newDescription: string) => {
    setData({ ...data, description: newDescription });
    goToEdit();
  };

  const renderContent = () => {
    switch (step) {
      case Steps.MAIN: {
        return <AddContentStep addHandle={checkLink} />; //isLoading
      }
      case Steps.EDIT: {
        return (
          <EditStep
            value={data}
            onShowDescription={goToDescription}
            onShowCollections={goToCollections}
            onBackClick={goToMain}
            onSaveClick={goToDone}
          />
        );
      }
      case Steps.COLLECTIONS: {
        return (
          <CollectionsStep
            value={data.collections}
            onSaveClick={saveCollections}
          />
        );
      }
      case Steps.DESCRIPTION: {
        return (
          <DescriptionStep
            value={data.description}
            onBackClick={goToEdit}
            onSaveClick={saveDescription}
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
      ref={modalRef}
      fullHeight={step !== Steps.MAIN}
      className={step !== Steps.MAIN ? 'flex items-stretch' : ''}
    >
      {renderContent()}
    </Modal>
  );
}
